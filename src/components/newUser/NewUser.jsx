import React, { useEffect, useState } from "react";
import "./newUser.scss";
import Sidebar from "../sidebar/Sidebar";
import { doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { userInputs } from "../../inputsData";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {db, storage } from "../../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const NewUser = () => {
  const [file, setFile] = useState("");
  const [data,setData] = useState({})
  const [per, setPerc] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

 
  const handleInput = (e) => {
    const id = e.target.id  
    const value = e.target.value

    setData({...data, [id] : value})


    
  };
  const handleSubmit = async(e) => {
    e.preventDefault();

   const res = await createUserWithEmailAndPassword(data.email,data.password)
    await setDoc(doc(db, "users", res.user.uid), {
     ...data,
     timeStamp : serverTimestamp()
    });

    
  };

  return (
    <div className="newUser">
      <Sidebar />
      <div className="navContainer">
        {/* <Navbar /> */}
        <div className="formContainer">
          <h1>ADD USER</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              id="fileAdd"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            Add Image
            <label htmlFor="fileAdd" className="">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                }
              />
            </label>
            {userInputs.map((input) => (
              <label key={input.id}>
                <p>{input.label}</p>
                <input
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={handleInput}
                />
              </label>
            ))}
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
