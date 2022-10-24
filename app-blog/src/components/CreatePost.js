import React, { useState } from "react";

function CreatePost() {


  return (
    <div>
      <label>
        Username:
        <input type="text" />
      </label>
      <label>
        Title:
        <input type="text" />
      </label>
      <label>
        Content:
        <input type="text" />
      </label>
      <button>Create a post</button>
    </div>
  );
}

export default CreatePost;
