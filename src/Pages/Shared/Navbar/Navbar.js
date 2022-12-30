import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* large menu */}
          <Typography
            className="text-blue-500"
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              flexGrow: 1,
              textDecoration: "none",
            }}
          >
            TASK MANAGER
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {user?.uid ? (
              <>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    to="/"
                    className="px-2 py-2 mt-2 text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Add Task
                  </Link>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    to="/myTask"
                    className="px-2 py-2 mt-2 text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    My Task
                  </Link>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {" "}
                  <Link
                    to="/media"
                    className="px-2 py-2 mt-2 text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Media
                  </Link>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    to="/completedTask"
                    className="px-2 py-2 mt-2 text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Completed Task
                  </Link>
                </Button>
                <Button
                  onClick={handleLogout}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    to="/login"
                    className="px-2 py-1 mt-2 text-blue-500 border border-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
                  >
                    Logout
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    to="/login"
                    className="px-3 py-1  mt-2 text-blue-500 border border-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
                  >
                    LogIn
                  </Link>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    to="/signup"
                    className="px-3 py-1  mt-2 text-blue-500 border border-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
                  >
                    SignUp
                  </Link>
                </Button>
              </>
            )}
          </Box>

          {/* responsive menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              className="text-blue-500"
              color="blue"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {user?.uid ? (
                <>
                  <MenuItem>
                    <Link
                      to="/"
                      className="px-2  text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Add Task
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/myTask"
                      className="px-2  text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      My Task
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/media"
                      className="px-2  text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Media
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/completedTask"
                      className="px-2  text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Completed Task
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      onClick={handleLogout}
                      to="/login"
                      className="px-2  text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      LogOut
                    </Link>
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem>
                    <Link
                      to="/login"
                      className="px-2  text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      LogIn
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/signup"
                      className="px-2  text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      SignUp
                    </Link>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>

          <Typography
            className="text-blue-500 mx-auto"
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            TASK MANAGER
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

//         <div className="flex">
//      <div className="flex flex-col -mx-6 lg:flex-row lg:items-center ">
//       {user?.uid ? (
//         <>
//           <Link
//             to="/"
//             className="px-3 py-2 mx-2 mt-2 text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             Add Task
//           </Link>
//           <Link
//             to="/myTask"
//             className="px-3 py-2 mx-2 mt-2 text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             My Task
//           </Link>
//           <Link
//             to="/media"
//             className="px-3 py-2 mx-2 mt-2 text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             Media
//           </Link>
//           <Link
//             to="/completedTask"
//             className="px-3 py-2 mx-2 mt-2 text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             Completed Task
//           </Link>
//           <button onClick={handleLogout}>
//             <Link
//               to="/login"
//               className="px-3 py-1 mx-2 mt-2 text-blue-500 border border-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
//             >
//               Logout
//             </Link>
//           </button>
//         </>
//       ) : (
//         <>
//           <Link
//             to="/login"
//             className="px-3 py-1 mx-2 mt-2 text-blue-500 border border-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
//           >
//             Login
//           </Link>

//           <Link
//             to="/signup"
//             className="px-3 py-1 mx-2 mt-2 text-blue-500 border border-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
//           >
//             SignUp
//           </Link>
//         </>
//       )}
//     </div>
//   </div>
