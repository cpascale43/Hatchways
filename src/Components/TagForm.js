import React, { useState } from "react";
import "../Input.css";

const TagForm = ({ addTag, index }) => {
  const [newTag, setNewTag] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTag(newTag);
        setNewTag("");
      }}
    >
      <input
        className="form"
        placeholder="Add a tag"
        type="text"
        value={newTag}
        onChange={(e) => {
          setNewTag(e.target.value);
        }}
      />
      <input type="submit" className="tag-submit" />
    </form>
  );
};

// const inputKeyDown = (e) => {
//   const val = e.target.value;
//   if (e.key === 'Enter' && val) {
//     if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
//       return;
//     }
//     setTags([...tags, val]);
//     tagInput.value = null;
//   } else if (e.key === 'Backspace' && !val) {
//     removeTag(tags.length - 1);
//   }
// };

export default TagForm;
