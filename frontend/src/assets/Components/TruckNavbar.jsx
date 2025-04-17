export default function Navbar({ username }) {
  return (
    <div>
      <nav className="NavBar">
        <div className="NavLeftSide">ONRoute 138</div>
        <div className="NavLeftSide">Hello </div>
        <div className="NavbarItems">
          <ul>
            <li className="NavBarLink">
              <a href="/">Logout</a>
            </li>
            <li className="NavBarLink">
              <a href="/OrderHistory">Order History</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
