import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchSuggestions from "./GPTSearchSuggestions";
import {NETFLIX_LOGIN_BACKGROUND_IMAGE} from '../utils/const'

const GPTSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={NETFLIX_LOGIN_BACKGROUND_IMAGE}
          alt="netflix background logo"
        />
      </div>
      <GPTSearchBar />
      <GPTSearchSuggestions />
    </div>
  );
};

export default GPTSearchPage;
