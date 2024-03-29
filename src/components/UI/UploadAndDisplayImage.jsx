import React, { useState } from "react";

const UploadAndDisplayImage = (props) => {

  return (
    <div>
      <div>Upload Image</div>
      {props.selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"25%"}
            src={URL.createObjectURL(props.selectedImage)}
          />
          <br />
          <button onClick={() => props.setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <input
        type="file"
        name="CharacterImage"
        onChange={(event) => {
          props.setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
