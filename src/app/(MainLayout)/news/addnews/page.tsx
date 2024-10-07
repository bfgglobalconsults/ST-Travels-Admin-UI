"use client";
import CommonCardFooter from "@/Common/CommonCardFooter";
import AddNewsForm from "@/components/News/AddNewsForm";
import React from "react";

const AddNews = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5>Add News</h5>
                </div>
                <div className="card-body">
                  <AddNewsForm />
                </div>
                <CommonCardFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNews;
