import React, { useState } from "react";
import "../../../src/styles/tagCloud.scss";

const TagCloud = ({ tags, setTags }) => {
  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag.word !== tagToRemove.word));
  };

  return (
    <div className="tag-cloud">
      <h2>Your Tag Cloud</h2>
      {tags && tags.length === 0 && <p>Your tag cloud is empty. Try adding some key words!</p>}
      <div className="tags">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="tag"
            style={{ padding: `${tag.rank+5}px`}}
            onClick={() => removeTag(tag)}
            onKeyDown={() => removeTag(tag)}
          >
            {tag.word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagCloud;
