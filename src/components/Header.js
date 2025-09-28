import React from "react";
import { NETFLIX_LOGO, SIGN_OUT_LOGO } from "../utils/const";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { useDispatch } from "react-redux";
import { toggleGPTSearchView } from "../utils/redux/gptSearchSlice";
import {SUPPORTED_LANGUAGES} from '../utils/const'
import { selectLanguage } from "../utils/redux/languageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isGPTSearchView = useSelector((store) => store.gptSearch.gptSearchView);
  //  useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName, photoUrl } = user;
  //       dispatch(
  //         addUser({
  //           uid: uid,
  //           email: email,
  //           displayName: displayName,
  //           photoUrl: photoUrl,
  //         })
  //       );
  //       navigate('/browse')
  //     } else {
  //       dispatch(removeUser())
  //       navigate('/')
  //     }
  //   });
  //   return () => {
  //     unsubscribe()
  //   }
  // }, []);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate("/");
  };
  const toggleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };
  const handleLanguageSelect = (e) => {
    dispatch(selectLanguage(e.target.value))
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-44" />
      {/* {user && <div className='flex items-center cursor-pointer'>
          <img src={SIGN_OUT_LOGO} alt="sign out logo"/>
          <p className='font-bold text-white text-2xl p-2 m-2'>(Sign out)</p>
        </div>} */}

      <div className="flex items-center cursor-pointer">
        <select className="p-4 m-4 bg-gray-700 text-white" onChange={handleLanguageSelect}>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>
        <button
          className="text-white p-4 m-4 bg-purple-700 rounded-lg font-bold"
          onClick={toggleGPTSearch}
        >
          {isGPTSearchView ? "Home Page" : "GPT Search"}
        </button>
        <img src={SIGN_OUT_LOGO} alt="sign out logo" />
        <p
          className="font-bold text-white text-2xl p-2 m-2"
          onClick={handleSignOut}
        >
          (Sign out)
        </p>
      </div>
    </div>
  );
};

export default Header;
