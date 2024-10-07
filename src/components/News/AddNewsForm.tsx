import DropZoneCommon from "@/Common/DropZoneCommon";
import dynamic from "next/dynamic";
import React from "react";
import Dropzone from "react-dropzone-uploader";

const AddNewsForm = () => {
  const MultipleSelectBox = dynamic(
    () => import("@/Common/MultipleSelectBox"),
    { ssr: false }
  );

  return (
    <form className="theme-form mega-form">
      <div className="mb-3">
        <label className="form-label-title">News Title</label>
        <input className="form-control" type="text" placeholder="News Title" />
      </div>
      
      
      <div className="mb-3">
        <label className="form-label-title">News Content</label>
        <div>
          <textarea className="form-control"></textarea>
        </div>
      </div>
     
      <div className="mb-3">
        <label className="form-label-title ">
          Upload Tour Cover Image here{" "}
        </label>
        <DropZoneCommon />
      </div>
      
      

    </form>
  );
};

export default AddNewsForm;
