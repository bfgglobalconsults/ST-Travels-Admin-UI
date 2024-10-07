"use client";
import CommonCardHeader from "@/Common/CommonCardHeader";
import PaginationBox from "@/Common/PaginationBox";
import AllNewsDetails from "@/components/News/AllNewsDetails";
import React from "react";

const AllNews = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <CommonCardHeader
              navigate="/news/addnews"
              tittle="All News"
            />
            <div className="card-body">
              <div className="table-responsive">
                <table className=" table table-striped all-package">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Date</th>
                      <th>View</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <AllNewsDetails />
                </table>
              </div>
            </div>
            <PaginationBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNews;
