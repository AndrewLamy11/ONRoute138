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
      console.log("JWT Token from cookie on page load:", jwtToken);
    }
  }, []);

  //handlers
  const handleCookie = (jwtToken) => {
    Cookies.set("jwt-authorization", jwtToken, {
      expires: 7,
      path: "/",
      sameSite: "Lax",
    });
    console.log("JWT Token set in cookie:", jwtToken);
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
    try {
      const res = await axios.post("http://localhost:3000", {
        username: formData.username,
        password: formData.password,
      });

      console.log("🧪 Full login response:", res.data);

      if (res.data.token) {
        Cookies.set("jwt-authorization", res.data.token);
        console.log("✅ Logged in with role:", res.data.role);

        if (res.data.role === "truckUser") {
          navigate("/truck");
        } else if (res.data.role === "user") {
          navigate("/main");
        } else {
          console.error("❌ Unknown role:", res.data.role);
          navigate("/not-authorized");
        }
      } else {
        setPostResponse("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setPostResponse("Login failed. Please try again.");
    }
  };

  // const handlelogin = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:3000", {
  //       username: formData.username,
  //       password: formData.password,
  //     });

  //     if (res.data.token) {
  //       Cookies.set("jwt-authorization", res.data.token);
  //       console.log("✅ Logged in with role:", res.data.role);

  //       // redirect based on role
  //       if (res.data.role === "user") {
  //         navigate("/main");
  //       } else if (res.data.role === "truckUser") {
  //         navigate("/truck");
  //       } else {
  //         console.error("Unknown role:", res.data.role);
  //         navigate("/not-authorized");
  //       }
  //     } else {
  //       setPostResponse("Login failed. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //     setPostResponse("Login failed. Please try again.");
  //   }
  // };
  // const handlelogin = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:3000", {
  //       username: formData.username,
  //       password: formData.password,
  //     });

  //     if (res.data.token) {
  //       Cookies.set("jwt-authorization", res.data.token);
  //       console.log("✅ Logged in with role:", res.data.role);

  //       // redirect based on role
  //       if (res.data.role === "truckUser") {
  //         navigate("/truck");
  //       } else if (res.data.role === "user") {
  //         navigate("/main");
  //       } else {
  //         console.error("Unknown role:", res.data.role);
  //         navigate("/not-authorized");
  //       }
  //     }

  //   // redirect based on role
  //   if (res.data.role === "truckUser") {
  //     navigate("/truck"); // 🚚 Truck user route
  //   } else {
  //     navigate("/user"); // 👤 Regular user route
  //   }
  // } else {
  //   setPostResponse(res.data.message);
  // }
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //     setPostResponse("Login failed. Please try again.");
  //   }
  // };
  // const handlelogin = async () => {
  //   await axios
  //     .post("http://localhost:3000", {
  //       username: formData.username,
  //       password: formData.password,
  //     })
  //     .then((response) => {
  //       setPostResponse(response.data.message);
  //       if (
  //         response.data.message === "User  Authenticated" ||
  //         "TruckUser Authenticated"
  //       ) {
  //         handleCookie(response.data.token);
  //         navigate("/main");
  //       }
  //     });
  // };

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
