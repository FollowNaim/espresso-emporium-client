import { Link } from "react-router-dom";
import navLogo from "../../assets/more/nav-logs.png";
function Nav() {
  return (
    <div>
      <div className="container mx-auto bg-nav flex items-center justify-center py-3 bg-no-repeat bg-cover">
        <Link to={"/"}>
          <img className="w-60" src={navLogo} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
