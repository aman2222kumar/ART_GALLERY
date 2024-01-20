import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const apiKey = process.env.REACT_APP_API_KEY;
const fetchData = createAsyncThunk("user/fetchData", async (searchTerm) => {
  const res = await axios(
    `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo`
  );
  console.log(apiKey);
  return res.data;
});

export default fetchData;
