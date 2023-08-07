// func -1- add a comment to the comment table using the comment route arguments : dictionary 
// func -2- delete a comment from the comment table using the comment route arguments : comment id 
// func -3- get all comments for the user on all posts argument : user id
// func -4- update the comment in the comment table using the comment route arguments : comment id ,dictionary(contain the description)
// func -5- get all comments for certain new : news id

import useSWR from 'swr';

export const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
import { useAuth } from '../contexts/auth';

export default function useComment(news_id) {
    
    const url = apiUrl + 'api/v1/dailypulse/get_comments/' + str(user.id);

    const { tokens, logout, user } = useAuth();
    const { data, error,isLoading, mutate } = useSWR([url, tokens], fetchCommentUser);
  



    // to get all comments for the user on all posts argument : user id
    async function fetchCommentUser() {
        const url = apiUrl + 'api/v1/dailypulse/get_comments/' + str(user.id);
        if (!tokens) {
            return;
        }

        try {
            const response = await fetch(url, config());

            const responseJSON = await response.json();

            return responseJSON;

        } catch (err) {
            handleError(err);
        }
    }

    // to get all comments for new : news id
    async function fetchCommentNew(news_id) {
        const url = apiUrl + 'api/v1/dailypulse/get_comments_news/' + str(news_id);
        if (!tokens) {
            return;
        }

        try {
            const response = await fetch(url, config());

            const responseJSON = await response.json();

            return responseJSON;

        } catch (err) {
            handleError(err);
        }
    }

    // to add a comment to the comment table using the comment route arguments : dictionary
    async function createComment(info) {
        const url = apiUrl + 'api/v1/dailypulse/create_comment/';

        try {
            const options = config();
            options.method = "POST",
            options.body = JSON.stringify(info);
            await fetch(url, options);
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            handleError(err);
        }
    }
    
    // to delete a comment from the comment table using the comment route arguments : comment id 
    async function deleteComment(id) {

        try {
            const url = apiUrl + 'api/v1/dailypulse/delete_comment/' + str(id);
            const options = config();
            options.method = "DELETE";
            await fetch(url, options);
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            handleError(err);
        }
    }

    // to update the comment in the comment table using the comment route arguments : comment id,dictionary(contain the description)
    async function updateComment(id, info) {

        try {
            const url = apiUrl + 'api/v1/dailypulse/update_comment/' + str(id);
            const options = config();
            options.method = "PUT";
            options.body = JSON.stringify(info);
            await fetch(url, options);
            mutate(); // mutate causes complete collection to be refetched
        } catch (err) {
            handleError(err);
        }
    }



    // helper function to handle getting Authorization headers EXACTLY right
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
        // currently just log out on error
        // but a common error will be short lived token expiring
        // STRETCH: refresh the access token when it has expired
        logout();
    }

    return {
        resources: data,
        error,
        loading: isLoading,
        createComment,
        deleteComment,
        updateComment,
        fetchCommentNew,
       
    };



}