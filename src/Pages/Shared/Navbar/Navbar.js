import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      x-data="{ isOpen: false }"
      className="relative bg-white shadow dark:bg-gray-800"
    >
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link
              className="font-semibold text-blue-500 transition-colors duration-300 transform dark:text-white lg:text-2xl hover:text-violet-500 dark:hover:text-gray-300"
              to="#"
            >
              TASK MANAGER
            </Link>

            <div className="flex lg:hidden">
              <button>
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Link
                to="/"
                className="px-3 py-2 mx-2 mt-2 text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Add Task
              </Link>
              <Link
                to="/myTask"
                className="px-3 py-2 mx-2 mt-2 text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                My Task
              </Link>
              <Link
                to="/media"
                className="px-3 py-2 mx-2 mt-2 text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Media
              </Link>
              <Link
                to="/completedTask"
                className="px-3 py-2 mx-2 mt-2 text-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Completed Task
              </Link>
              <Link
                to="/login"
                className="px-3 py-1 mx-2 mt-2 text-blue-500 border border-blue-500 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
