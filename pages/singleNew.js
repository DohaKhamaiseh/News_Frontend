import { Parent } from "@/components/Parent";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Cookies from "js-cookie";
import  useComment  from "hooks/useComment";
import { useAuth } from "../context/auth";
import Link from "next/link";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}



export default function singleNew() {

  const [news, setNews] = useState({});
  const { createComment, fetchCommentNew } = useComment()
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

   async function handlecreate(event) {
    event.preventDefault();

    const obj ={
      user : user?.id ,
      news : news.id,
      description : event.target.comm.value,
    }

    if (news.id) {
      let comment 
     createComment(obj)
     setLoading(false);
    comment = await fetchCommentNew(news.id)
      {loading? console.log("loading") :console.log(comment)
      // console.log(user.id)
    }

   
   
  }
}

 

  useEffect(() => {
    if (Cookies.get("news")) {
      setNews(JSON.parse(Cookies.get("news")));
      console.log(JSON.parse(Cookies.get("news")));
      console.log(news.url_image);
    }
  }, []);

  return (
    <Parent>
<div classNameName="flex flex-row  dark:bg-bgDark bg-bgLight">
 <div classNameName="post-card dark:bg-bgDark bg-bgLight">
 <a href={news.url}> 
		<div classNameName="img-container">
      <img src={news.url_image}/>
		</div>
		{/* <span classNameName="share-btn"><i classNameName="fa fa-share-alt"></i></span> */}
	
		<div classNameName="post-text dark:text-signup">
			<div classNameName="post-meta">
				<span classNameName="post-category">{news.source}</span>
				
				<span classNameName="post-date"><i classNameName="fa fa-calendar">  🗓️</i>{news.published_date}</span>
			</div>
			<h3 classNameName="post-title">{news.title}</h3>
			<p classNameName="post-desc">{news.description || news.content}</p>
		</div>
		<div classNameName="author-container">
			<p>by {news.author}</p>
		</div>
    </a>
	</div>

  {user && <div className="login-box">
  {/* <h2>Login</h2> */}
  <form onSubmit={handlecreate} >
    <div className="user-box">
      <input type="text" name="comm" required=""/>
      <label>Comment</label>
    </div>
 
    <button>
      <span></span>
     
      Add
    </button>
  </form>
</div>}
  </div>
    


   {/* <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>

   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/> */}


   
    </Parent>
  );
}
