import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "./redux_toolkit/api";
function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [placeHolderText, setPlaceHolderText] = useState("Search");
  let dispatch = useDispatch();
  let data = useSelector((state) => state.apiData);
  console.log(data);
  function haandleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleclick() {
    console.log(searchTerm);
    // props.handleOuterFunction();
    props.handleInputData(searchTerm);
    dispatch(fetchData(searchTerm));
    setSearchTerm("");
    setPlaceHolderText("Start new Search");
  }
  //   useEffect(() => {

  //   }, [dispatch]);
  return (
    <>
      <CiSearch className="iconSearch" />
      <input
        type="text"
        placeholder={placeHolderText}
        value={searchTerm}
        id="inputSearch"
        onChange={haandleChange}
        onKeyDown={props.handleOuterChange}
      ></input>
      <button className="btn1" onClick={handleclick}>
        GO!
      </button>
    </>
  );
}

export default SearchBar;
