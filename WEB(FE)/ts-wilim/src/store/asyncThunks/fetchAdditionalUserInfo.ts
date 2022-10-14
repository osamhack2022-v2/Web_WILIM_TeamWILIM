import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchAdditionalUserInfoProps } from "../../schema/fetch";

export const fetchAdditionalUserInfo = createAsyncThunk(
  "user/FetchAdditionalUserInfo",
  async ({ username, serviceType }: FetchAdditionalUserInfoProps) => {
    const response = await axios.post(
      `https://wilimbackend.tk/userSchemaAPI/register/kakao`,
      {
        username,
        serviceType,
      },
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (response.status === 201) {
      console.log(response.data);
      return response.data;
    }
    return response.data;
  }
);
