import { useState } from "react";
import { useEffect } from "react";
import { auth, db } from "../config.js";
import { collection, onSnapshot } from "firebase/firestore";
import UserContext from "./userContext.jsx";

const UserState = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userPet, setUserPet] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser({});
      }

      const unsub = onSnapshot(
        collection(db, "pets"),
        (snapshot) => {
          let list = [];
          snapshot.docs.forEach((doc) => {
            if (doc.data().userID === currentUser.uid)
              list.push({ ...doc.data() });
          });

          setUserPet(list);
        },
        (error) => {
          console.log(error);
        }
      );

      return () => {
        unsub();
      };
    });
  }, [currentUser.uid]);

  //   console.log(userPet);

  return (
    <UserContext.Provider value={{ currentUser, userPet }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
