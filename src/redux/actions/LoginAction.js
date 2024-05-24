import { createAsyncThunk } from "@reduxjs/toolkit";
//Login
export const LoginRequest = createAsyncThunk('fetch/LoginDetails', async (myForm) => {
    try {
      const API_ENDPOINT_URL = 'http://localhost:81/api/Users/Login';

      const response = await fetch(API_ENDPOINT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },       
        body: JSON.stringify(myForm)
      });  
  
      if (response.ok) {
        const data = await response.json();
        return data; 
      } else {
        const data = await response.text();
        return data; 
      }
    } catch (error) {
      console.error('Error during the POST request:', error);
      throw new Error(`Error during the POST request: ${error.message}`);
    }
  });


  //Register
  export const RegisterRequest = createAsyncThunk('fetch/RegisterDetails', async (myForm) => {
    try {
      const API_ENDPOINT_URL = 'http://localhost:81/api/Users/Add';

      const response = await fetch(API_ENDPOINT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },       
        body: JSON.stringify(myForm)
      });  
  
      if (response.ok) {
        const data = await response.json();
        return data; 
        
      } else {
        const data = await response.text();
        return data; 
      }
    } catch (error) {
      console.error('Error during the POST request:', error);
      throw new Error(`Error during the POST request: ${error.message}`);
    }
  });

//get all users

 //Register
 export const GetAllUsers = createAsyncThunk('fetch/AllUsers', async () => {
  try {
    const API_ENDPOINT_URL = 'http://localhost:81/api/Users/GetAll';

    const response = await fetch(API_ENDPOINT_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },       
    });  

    if (response.ok) {
      const data = await response.json();
      return data; 
    } else {
      const data = await response.json();
      return data; 
    }
  } catch (error) {
    console.error('Error during the POST request:', error);
    throw new Error(`Error during the POST request: ${error.message}`);
  }
});

 