import { useNavigate } from "react-router-dom";

export default function UserForm({
  handleSubmit,
  handleOnChange,
  formData,
  btnText,
  postResponse,
  formType, // New prop to determine which form to display
}) {
  const navigate = useNavigate();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleOnChange}
        />
        <br />

        {/* Show these fields only on Create User & Create Truck User pages */}
        {formType !== "login" && (
          <>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={formData.firstname}
              onChange={handleOnChange}
            />
            <br />
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={formData.lastname}
              onChange={handleOnChange}
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleOnChange}
            />
            <br />
          </>
        )}

        <button type="submit">{btnText}</button>
      </form>

      {postResponse && <p>{postResponse}</p>}

      {/* Show navigation buttons only on login page */}
      {formType === "login" && (
        <>
          <button onClick={() => navigate("/create-user")}>Create User</button>
          <button onClick={() => navigate("/create-TruckUser")}>
            Create Truck User
          </button>
        </>
      )}
    </div>
  );
}
