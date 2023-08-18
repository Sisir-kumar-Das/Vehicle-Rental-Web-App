import { Button, Navbar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/user/userSlice";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="container mx-auto max-w-[1080px]">
      <Navbar fluid={true} rounded={true}>
        <Link to="/">
          <img
            src="https://thumbs.dreamstime.com/z/concept-design-illustrator-vector-auto-rent-vehicles-logo-template-isolated-white-transparent-background-auto-car-rental-158275127.jpg"
            alt="Bootstrap"
            className="w-[48px] h-[48px]"
          />
        </Link>

        <div className="flex md:order-2 gap-2">
          {userInfo ? (
            <Button onClick={handleLogout} outline={true}>
              <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-2" /> Logout
            </Button>
          ) : (
            <>
              <Link
                to="/signup"
                className="bg-blue-600 text-white hover:bg-blue-800 hover:text-white hover:border-blue-800 p-2 px-4 border-2 rounded-md border-blue-600"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="bg-white text-blue-600 hover:bg-blue-800 hover:text-white hover:border-blue-800 p-2 px-4 border-2 rounded-md border-blue-600"
              >
                Sign in
              </Link>
            </>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {userInfo && userInfo?.role === "admin" ? (
            <Link
              to="/admin"
              className="p-2 text-base hover:text-blue-600 rounded-md"
            >
              Admin
            </Link>
          ) : (
            <>
              <Link
                to="/"
                className="p-2 text-base hover:text-blue-600 rounded-md"
              >
                Home
              </Link>
              {userInfo && (
                <Link
                  to="/my-rents"
                  className="p-2 text-base hover:text-blue-600 rounded-md"
                >
                  My rents
                </Link>
              )}
              <Link
                to="/about"
                className="p-2 text-base hover:text-blue-600 rounded-md"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="p-2 text-base hover:text-blue-600 rounded-md"
              >
                Contact
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
