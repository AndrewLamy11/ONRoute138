import "../../App.css";

export default function Navbar() {
  return (
    <div>
      <nav className="NavBar">
        <div className="NavLeftSide">ONRoute 138 </div>
        <div className="NavLeftSide"> Hello Admin</div>
        <div className="NavbarItems">
          <ul>
            <li className="NavBarLink">
              <a href="">Home</a>
            </li>
            <li className="NavBarLink">
              <a href="">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

//Backend Person: make it so where it sayd "Hello Admin", it displays the username of the logged in account
//Backend Person: Make the Home and Logout Buttons Work, Home should go to (Mainpage.jsx) and Logout should just logout
