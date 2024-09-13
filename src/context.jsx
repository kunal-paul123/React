// create a context
// provider
// consumer / useContext

import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const AppContext = React.createContext();

// const API = "https://thapareactapi.up.railway.app";

const initialState = {
  name: "",
  image: "",
  // services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Kunal Technical",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Kunal Paul",
        image: "./images/about1.svg",
      },
    });
  };

  // to get the api data

  // const getServices = async (url) => {
  //   try {
  //     const response = await fetch(url);
  //     let data = await response.json();
  //     dispatch({ type: "GET_SERVICES", payload: data });
  //   } catch (err) {
  //     console.log("My error is: ", +err);
  //   }
  // };

  // to call the API

  // useEffect(() => {
  //   // getServices(API);
  // }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// global custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
