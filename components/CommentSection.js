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

import { useState, useEffect } from "react";
import useComment from "@/hooks/useComment";
import Loader from "./Loader";
import Cookies from "js-cookie";

export default function CommentSection({ id }) {
  const [newsComment, setNewsComment] = useState(undefined);
  const { fetchCommentNew } = useComment();

  useEffect(() => {
    async function get_comments() {
      if (Cookies.get("news_id")) {
        const x = await fetchCommentNew(Cookies.get("news_id"));
        setNewsComment(x);
        console.log(x);
      }
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
                  User Name
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8 ">
                <Typography
                  variant="small"
                  color="gary"
                  className="font-normal text-gray-600"
                >
                  {comment.description}
                </Typography>
              </TimelineBody>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </>
  );
}
