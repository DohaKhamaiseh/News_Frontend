import fetchCommentUser from "@/hooks/useComment"
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

import Loader from "./Loader";


export default function Usercomment({new_id}){
    const {usercomment} = fetchCommentUser(new_id)
    console.log(usercomment)
    return (
        <>
      {!usercomment ? (
        <Loader />
      ) : (
        <div className ="dark:bg-bgDark py-6 sm:py-12 dark:text-white w-1/3">
        
        <Timeline>
          {usercomment.map((comment) => (
            <TimelineItem key={comment.id}>
              <TimelineConnector />
              <TimelineHeader className="h-3 ">
                <TimelineIcon />
                <Typography
                  variant="h6"
                //   color="blue-gray"
                  className="leading-none"
                >
                  {comment.userName}
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  variant="small"
                //   color="gary"
                  className="font-normal text-gray-500"
                >
                  {comment.description}
                </Typography>
              
              </TimelineBody>
            </TimelineItem>
          ))}
        </Timeline>
        </div>
      )}

    </>
    )
}