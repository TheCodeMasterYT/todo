import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
const TodoCards = ({
  title,
  body,
  id,
  delid,
  display,
  updateId,
  toBeUpdate,
}) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">{body.split("", 77)}...</p>
      </div>
      <div className="d-flex justify-content-around ">
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 "
          onClick={() => {
            display("block");
            toBeUpdate(updateId);
          }}
        >
          <GrDocumentUpdate className="card-icons" /> Update
        </div>
        <div
          className="d-flex justify-content-center align-items-center card-icon-head  px-2 py-1 text-danger"
          onClick={() => {
            delid(id);
          }}
        >
          <AiFillDelete className="card-icons del" /> Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
