import React from 'react'
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { useDispatch } from "react-redux";


const Body = () => {
   const dispatch = useDispatch();
   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoUrl } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: photoUrl,
          })
        );
      } else {
        dispatch(removeUser)
      }
    });
  }, []);
  return (
    <div>Body</div>
  )
}

export default Body