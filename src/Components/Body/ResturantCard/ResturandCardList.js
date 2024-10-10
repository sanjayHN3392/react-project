import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import "./ResturandCradList.css";
import ShimmerCard from "../../../utils/Shimmer/ShimmerCard";
import { Link } from "react-router-dom";
const ResturandCardList = (props) => {
  const { resturants, isLoading } = props;

  if (!isLoading && resturants?.length === 0) {
    return <h1> No Data Found</h1>;
  }

  return isLoading ? (
    <div className="shimmer-list">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  ) : (
    <div className="res-Container">
      {resturants.map((item) => (
        <Link key={item?.id} to={"/resturant/" + item?.id}>
          <ResturantCard resObj={item} />
        </Link>
      ))}
    </div>
  );
};

export default ResturandCardList;
