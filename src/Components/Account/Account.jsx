import { useState, useEffect, useContext } from "react";
import { db, storage } from "../../config.js";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import "./style.css";
import userContext from "../../Context/userContext.jsx";

const Account = () => {
  const context = useContext(userContext);
  const { currentUser, userPet } = context;
  const [petDetails, setPetDetails] = useState({
    name: "",
    desc: "",
    age: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const ID = currentUser.uid;

  useEffect(() => {
    const uploadFile = () => {
      const name = ID + imageFile.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);

          switch (snapshot.state) {
            case "paused":
              //   console.log("Upload is paused");
              break;

            case "running":
              //   console.log("Upload is running");
              break;

            default:
              break;
          }
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setPetDetails((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    imageFile && uploadFile();
  }, [imageFile, ID]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "pets"), {
      ...petDetails,
      userID: ID,
    });
    setPetDetails({
      name: "",
      desc: "",
      age: "",
    });
  };

  return (
    <section className="account">
      <h1 className="heading">
        your <span>pet</span>
      </h1>
      <form className="details-form">
        <h3>Details</h3>
        <input
          type="text"
          name="name"
          placeholder="enter your pet name"
          className="box"
          value={petDetails.name}
          onChange={(e) =>
            setPetDetails((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          type="text"
          name="age"
          placeholder="enter age of your pet"
          className="box"
          value={petDetails.age}
          onChange={(e) =>
            setPetDetails((prev) => ({ ...prev, age: e.target.value }))
          }
        />
        <input
          type="text"
          name="desc"
          placeholder="describe your pet"
          className="box"
          value={petDetails.desc}
          onChange={(e) =>
            setPetDetails((prev) => ({ ...prev, desc: e.target.value }))
          }
        />
        <input
          type="file"
          name="image"
          className="box file"
          onChange={(e) => {
            setImageFile(e.target.files[0]);
          }}
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className="btn sign-in"
          disabled={progress !== null && progress < 100}
        >
          {" "}
          Submit
        </button>
      </form>

      <div className="box-container">
        {userPet.map((item) => (
          <div className="card-box" key={item.name}>
            <img src={item.img} alt="" />
            <div className="pet-content">
              <h3> {item.name}</h3>
              <h4>{item.age}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Account;
