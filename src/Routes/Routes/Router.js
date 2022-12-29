import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import CompletedTask from "../../Pages/CompletedTask/CompletedTask";
import AddTask from "../../Pages/Home/AddTask/AddTask";
import Media from "../../Pages/Media/Media";
import MyTask from "../../Pages/MyTask/MyTask";
import Login from "../../Pages/RegisterAndLogin/Login/Login";
import Register from "../../Pages/RegisterAndLogin/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <AddTask></AddTask>,
      },
      {
        path: "/myTask",
        element: <MyTask></MyTask>,
      },
      {
        path: "/media",
        element: <Media></Media>,
      },
      {
        path: "/completedTask",
        element: <CompletedTask></CompletedTask>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
