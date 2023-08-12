export default function Card({ item }) {
  return (
    <li className="cards_item dark:bg-bgDark pt-10 bg-bgLight ">
      <a href={item.url}>
        <div className="card_news">
          <div className="card_image">
            <img
              src={
                item.urlToImage ||
                "https://www.servicedriventransport.com/wp-content/uploads/2023/06/News.jpg"
              }
            />
          </div>
          <div className="card_content_news ">
            <p className="card_title dark:text-white text-black">
              {item.title}
            </p>

            {/* <a href ={item.url}> <button className="btn card_btn dark:text-white text-black border-black dark:border-white hover:bg-slate-600" >Read More</button> </a> */}
          </div>
        </div>
      </a>
    </li>
  );
}
