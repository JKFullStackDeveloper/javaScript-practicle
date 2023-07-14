let commentContainer = document.querySelector(".comment-container");
let replyComment = document.querySelector(".comment-reply-container");


commentContainer.addEventListener("click", (e) => {

    let closestCommentContainer = e.target.closest(".comment-container");

    if (e.target.classList.contains("reply")) {

        let commentReplyContainer = document.createElement("div");
        commentReplyContainer.setAttribute("class", "comment-reply-container");
        commentReplyContainer.innerHTML = `<input placeholder="write your comment" type="text"><button class="btn-submit">Submit</button>`;
        closestCommentContainer.appendChild(commentReplyContainer);
    }
    else if (e.target.classList.contains("btn-submit")) {

        let closestCommentReply = e.target.closest(".comment-reply-container");
        let value = closestCommentReply.children[0].value;
        let newComment = document.createElement("div");
        newComment.setAttribute("class", "comment-container");
        newComment.innerHTML = `<div class="comment-card"> <h4>${value} </h4>
        <div class="reply">Reply</div> </div>`;
        closestCommentContainer.appendChild(newComment);
        closestCommentReply.remove();
        
    }
})