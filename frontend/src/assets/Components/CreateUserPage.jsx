import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import UserForm from "./UserForm";
export default function CreateUserPage() {
  const navigate = useNavigate();
  //states
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });

  const [postResponse, setPostResponse] = useState("");

  //handlers

  const handleCreateUser = async () => {
    try {
      await axios
        .post("http://localhost:3000/create-user", {
          username: formData.username,
          password: formData.password,
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
        })
        .then((response) => setPostResponse(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateUser();

    setFormData({
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
    });
  };

  return (
    <div id="user">
      <UserForm
        formData={formData}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        postResponse={postResponse}
        btnText="create User"
        formType="create user"
      />
      <Link to="/">Back to Home </Link>
    </div>
  );
}
