import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const CompletedTask = () => {
  const [completedTasks, setCompletedTask] = useState([]);
  const navigate = useNavigate();

  // receive completed task from database
  useEffect(() => {
    fetch("https://task-management-server-iqbal221.vercel.app/completedTask")
      .then((res) => res.json())
      .then((data) => setCompletedTask(data));
  }, []);

  // delete daily dask from database
  const deleteCompletedTask = (id) => {
    console.log(id);
    fetch(
      `https://task-management-server-iqbal221.vercel.app/completedTask/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("task_management")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Delete Task Successfully");
        }
      });
    const remainingTask = completedTasks.filter((CT) => CT._id !== id);
    setCompletedTask(remainingTask);
  };

  return (
    <div>
      <h3 className="text-3xl text-pink-400 text-center font-bold mb-14 mt-24">
        Completed Task
      </h3>
      <section className="max-w-2xl lg:p-6 md:p-4 p-2 mx-auto  bg-white rounded-md shadow-md dark:bg-gray-800">
        {completedTasks.map((completedTask, i) => (
          <>
            <ul key={completedTask._id} className="flex items-center">
              <li className="w-[50px]">{i + 1}</li>
              <li className="w-[280px]">
                <h3 className="text-md">{completedTask.CTask}</h3>
              </li>
              <li className="w-[150px] ">
                <button className="py-1 md:px-2 px-0 mx-1 text-xs text-white capitalize transition-colors duration-300 transform bg-yellow-400 rounded-lg hover:bg-pink-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  <Link to="/myTask">Not Completed</Link>
                </button>
              </li>
              <li className="mx-1 text-center">
                <input
                  name="task"
                  type="text"
                  placeholder="comments...."
                  className="file-input border md:p-2 p-1 text-xs rounded w-full border-purple-500  outline-none"
                />
              </li>

              <li className="w-[70px] text-center text-lg text-red-600">
                <button onClick={() => deleteCompletedTask(completedTask._id)}>
                  <DeleteIcon />
                </button>
              </li>
            </ul>
            <hr className="my-3" />
          </>
        ))}
      </section>
    </div>
  );
};

export default CompletedTask;
