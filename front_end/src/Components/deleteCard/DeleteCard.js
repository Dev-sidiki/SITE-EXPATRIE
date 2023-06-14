import React from "react";
// import { useDispatch } from "react-redux";
// import { deletePost } from "../../actions/post.actions";
import deleteIcon from "../../Assets/icons/trash.svg";
const DeleteCard = (/*props*/) => {
  // const dispatch = useDispatch();

  // const deleteQuote = () => dispatch(deletePost(props.id));

  return (
    <div
      onClick={() => {
        if (
          window.confirm(
            "Voulez-vous supprimer cet article/post/evenement/etc.. ?"
          )
        ) {
          // deleteQuote();
        }
      }}
    >
      <img src={deleteIcon} alt="trash" />
    </div>
  );
};

export default DeleteCard;
