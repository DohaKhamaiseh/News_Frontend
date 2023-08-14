import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import Createcomment from "./Createcomment";
import { useState, useEffect } from "react";
import useComment from "@/hooks/useComment";
import Loader from "./Loader";
import Cookies from "js-cookie";
import { useAuth } from "@/context/auth";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { UpdateModel } from "./UpdateModel";
import DeleteModel from "./DeleteModel";

export default function CommentSection({ title, isSaved, news }) {
  const [newsComment, setNewsComment] = useState(undefined);
  const { fetchCommentNew, createComment } = useComment();
  const { user } = useAuth();

  async function handlecreate(commObj) {
    // event.preventDefault();
    if (isSaved.length === 0) {
      const newNews = createNews(news);

      const obj = {
        user: user.id,
        news: newNews.id,
        newsTitle: encodeURI(news.title),
        userName: user.username,
        description: commObj.description,
      };
      createComment(obj);
    } else {
      const obj = {
        user: user.id,
        news: isSaved[0].id,
        newsTitle: encodeURI(news.title),
        userName: user.username,
        description: commObj.description,
      };

      const w = await createComment(obj);
      setNewsComment((prev) => [...prev, w]);
    }
  }

  useEffect(() => {
    async function get_comments() {
      console.log("title is coming ", title);
      const x = await fetchCommentNew(title);
      setNewsComment(x);
      console.log(x);
    }
    get_comments();
  }, []);

  return (
    <>
      {!newsComment ? (
        <Loader />
      ) : (
        <Timeline>
          {newsComment.map((comment) => (
            <TimelineItem key={comment.id}>
              <TimelineConnector />
              <TimelineHeader className="h-3 ">
                <TimelineIcon />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="leading-none"
                >
                  {comment.userName}
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  variant="small"
                  color="gary"
                  className="font-normal text-gray-600"
                >
                  {comment.description}
                </Typography>
                <UpdateModel
                  styles={{ position: "absolute", left: "38rem", top: "0rem" }}
                  comment={comment}
                  setNewsComment={setNewsComment}
                />
                <FaTrash
                  className="text-red-700 absolute top-0"
                  style={{ position: "absolute", left: "40rem", top: "0rem" }}
                  size={18}
                />
                <DeleteModel
                  styles={{ position: "absolute", left: "40rem", top: "0rem" }}
                  comment={comment}
                  setNewsComment={setNewsComment}
                />
              </TimelineBody>
            </TimelineItem>
          ))}
        </Timeline>
      )}
      <Createcomment handlecreate={handlecreate} />
    </>
  );
}
