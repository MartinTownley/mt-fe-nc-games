import React from "react";
import { useState } from "react";
import CommentCard from "./CommentCard";

const CommentsList = ({ comments }) => {
  console.log(comments, "<< comments in CommentsList");

  return (
    <main className="Comments-List">
      <h2> Comments </h2>

      <ul>
        <li>
          {comments.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                author={comment.author}
                body={comment.body}
                created_at={comment.created_at}
                votes={comment.votes}
              ></CommentCard>
            );
          })}
        </li>
      </ul>
    </main>
  );
};

export default CommentsList;
