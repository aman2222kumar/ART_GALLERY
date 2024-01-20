import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import img1 from "./iamgesFile/mountain-sun.jpg";
import img2 from "./iamgesFile/mountain.jpg";
import img3 from "./iamgesFile/sky-night.jpg";
import img4 from "./iamgesFile/sky-shine.jpg";
import img5 from "./iamgesFile/sun-shine.jpg";
import img6 from "./iamgesFile/sky-shine2.jpg";
import Header from "./header";
import SearchBar from "./searchComponent";

import ApiTags from "./allApiTags";
import ImageList from "./imagesComponent";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [isActive, setActive] = useState(false);
  const [searchData, setSearchData] = useState("");
  const arr = new Array(img1, img2, img3, img4, img5, img6);
  const [isOpacity, settOpacity] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  let { loading, error } = useSelector((state) => state.apiData);
  console.log(loading);
  window.onload = () => {
    settOpacity(1);
  };
  // const apiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    // console.log(loading);
    // console.log(error);
    // console.log(data);
    setRandomNumber(Math.round(Math.random() * (arr.length - 1)));
    console.log(randomNumber);
    // fetch(
    //   `https://pixabay.com/api/?key=41888144-4be90e249ed67cd2091f81074&q=yellow+flowers&image_type=photo`
    // )
    //   .then((res) => res.json())
    //   .then((result) => console.log(result));
  }, []);

  function handleOuterChange(e) {
    setActive(true);
  }
  function handeSearchTerm(e) {
    console.log("inputValueee", e);
    setSearchData(e);
  }
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${arr[randomNumber]})`,
        width: "100vw",
        height: isActive === true ? "max-content" : "100vh",
        opacity: isOpacity,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section id="section1">
        <Header />
      </section>

      <main>
        <section id="section2">
          {isActive === false ? (
            <div className="subTitle">
              <p>Discover over 2,000,000 free Stock Images</p>
            </div>
          ) : (
            ""
          )}
          <div className="search_and_tag_container">
            <div className="search_container">
              <SearchBar
                handleOuterChange={handleOuterChange}
                handleInputData={handeSearchTerm}
              />
            </div>
            <div className="tagData">
              {isActive === false ? (
                <div className="tag_container">
                  <p>Trending:</p>
                  <span>flowers,love,forest,river</span>
                </div>
              ) : (
                <p>Results:{searchData}</p>
              )}
            </div>
          </div>
        </section>
        {isActive === true ? (
          <section id="section3">
            <div className="api_tag_container">
              <ApiTags />
            </div>
            <div className="images_Container">
              <ImageList />
            </div>
          </section>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
