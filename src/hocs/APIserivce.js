import React, { useState, useEffect} from 'react'
import {REACT_APP_API_URL} from "./plugins"
import axios from "axios";






export const createProduct =  (product) => {
    const url = `${REACT_APP_API_URL}/api/blog/new/`;
    const headers = {Authorization: `Bearer ${AuthService.getAuthToken()}`};
    return axios.post(url,product,{headers: headers});
}