import { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import Cookies from "js-cookie";
export default function LandingPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [postResponse, setPostResponse] = useState("");
  const navigate = useNavigate();

  //effects
  useEffect(() => {
    const jwtToken = Cookies.get("jwt-authorization");

    if (jwtToken) {
      Cookies.remove("jwt-authorization");
    }
  }, []);

  //handlers
  const handleCookie = (jwtToken) => {
    Cookies.set("jwt-authorization", jwtToken);
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
    handlelogin();
    setFormData({ username: "", password: "" });
  };

  const handlelogin = async () => {
    await axios
      .post("http://localhost:3000", {
        username: formData.username,
        password: formData.password,
      })
      .then((response) => {
        setPostResponse(response.data.message);
        if (response.data.message === "User Autenticated ") {
          handleCookie(response.data.token);
          navigate("/main");
        }
      });
  };

  return (
    <div className="CenterPage">
      <UserForm
        postResponse={postResponse}
        formData={formData}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        btnText="Login"
        formType="login"
      />
    </div>
  );
}
