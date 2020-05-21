import React, { useState } from "react";
import "../Input.css";

const TagForm = ({ addTag, index }) => {
  const [newTag, setNewTag] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTag(newTag, index);
        setNewTag("");
      }}
    >
      <input
        className="form"
        placeholder="Add a tag"
        type="text"
        value={newTag}
        onChange={(e) => {
          e.preventDefault();
          setNewTag(e.target.value);
        }}
      />
      <input type="submit" className="tag-submit" />
    </form>
  );
};

export default TagForm;
