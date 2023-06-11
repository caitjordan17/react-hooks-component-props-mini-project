import React from "react";
import Article from "./Article";

function ArticleList ({posts}){
    const postData = posts.map((post) => (
        <Article
        key = {post.id}
        title = {post.title}
        date = {post.date}
        preview = {post.preview}
        />
    ))
    return(
        <main>
            {postData}
        </main>
    );
}

export default ArticleList;