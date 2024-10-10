import React, { useEffect, useState } from "react";
import ResturandCardList from "./ResturantCard/ResturandCardList";
import "./Body.css";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch("https://dummyjson.com/recipes");
      const jsonData = await data.json();
      console.log('data', jsonData)
      const resData = jsonData?.recipes;
      setIsLoading(false);
      setResList(resData);
      setSearchItems(resData);
    } catch (error) {
      console.log("error occured", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const getHighlyRatedRes = () => {
    const fileteredList = resList.filter((res) => res?.rating > 4.5);
    setSearchItems(fileteredList);
  };

  const searchResturants = () => {
    const searchList = resList.filter((res) =>
      res?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchItems(searchList);
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button onClick={searchResturants}>Search</button>
      </div>
      <div className="rated-btn">
        <button onClick={getHighlyRatedRes}>Highly Rated Resturants</button>
      </div>
      <ResturandCardList resturants={searchItems} isLoading={isLoading} />
    </>
  );
};

export default Body;
