export default function Card({item}){

   
    return (
     
        <li className="cards_item">
    <a href = {item.url}>
          <div className="card_news">
            <div className="card_image"><img src={item.urlToImage}/></div>
            <div className="card_content_news dark:bg-bgDark  bg-white">
     
              <p className="card_title dark:text-white text-black">{item.title}</p>
     
             
              {/* <a href ={item.url}> <button className="btn card_btn dark:text-white text-black border-black dark:border-white hover:bg-slate-600" >Read More</button> </a> */}
            </div>
          </div>
          </a>
        </li>
        
    
    )
}