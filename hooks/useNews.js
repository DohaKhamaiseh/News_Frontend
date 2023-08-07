// func -1- add a news to the news table argument dictionary 
// func -2- delete a news from the news table argument news id 
// func -3- get the news from the news table argument user id from useAuth


import useSWR from 'swr';

const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL + '/api/v1/dailypulse/';
import { useAuth } from '../contexts/auth';

export default function useNews(){

    const { tokens, logout,user } = useAuth();
    const { data,isLoading, error, mutate } = useSWR([apiUrl, tokens], fetchNews);

    async function fetchNews(){
        if (!tokens) {
            return;
        }

        try {
            const url = `${apiUrl}Get_News/${user.id}`
            const response = await fetch(url, config());

            const responseJSON = await response.json();

            return responseJSON;

        } catch (err) {
            handleError(err);
        }
    }
    async function createNews(info) {
        try {
            const url = `${apiUrl}Create_News/`
            const options = config();
            options.method = "POST",
            options.body = JSON.stringify(info);
            await fetch(url, options);
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            handleError(err);
        }
    }
    async function deleteNews(news_id) {

        try {
            const url = `${apiUrl}Delete_News/${news_id}`;
            const options = config();
            options.method = "DELETE";
            await fetch(url, options);
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            handleError(err);
        }
    }
    function config() {
    
            return {
                headers: {
                    'Authorization': 'Bearer ' + tokens.access,
                    'Content-Type': 'application/json',
                }
            };
        }
    
    function handleError(err) {
            console.error(err);
            
            // STRETCH: refresh the access token when it has expired
            logout();
        }  
        
    return {
        news: data,
        error,
        isLoading: isLoading,
        fetchNews,
        createNews,
        deleteNews,
    };    
}




