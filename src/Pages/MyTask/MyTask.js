import React, { useEffect, useState, useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UpdateMyTask from "./UpdateMyTask";
import { AuthContext } from "../../Context/AuthProvider";

const MyTask = () => {
  const [dailyTasks, setDailyTask] = useState([]);
  const [singleDailyTask, setSingleDailyTask] = useState({});
  let [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoading } = useContext(AuthContext);

  const updateDailyTask = (dailyTask) => {
    setIsOpen(true);
    setSingleDailyTask(dailyTask);
  };

  // receive daily task from database
  useEffect(() => {
    fetch("https://task-management-server-iqbal221.vercel.app/dailyTask")
      .then((res) => res.json())
      .then((data) => setDailyTask(data));
  }, []);

  // delete daily dask from database
  const deleteDailyTask = (id) => {
    console.log(id);
    fetch(
      `https://task-management-server-iqbal221.vercel.app/dailyTask/${id}`,
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
    const remainingTask = dailyTasks.filter((tasks) => tasks._id !== id);
    setDailyTask(remainingTask);
  };

  // save data to database
  const ToCompletedTask = (dailyTask) => {
    const { dTask } = dailyTask;
    const taskInfo = {
      CTask: dTask,
    };
    fetch(`https://task-management-server-iqbal221.vercel.app/completedTask`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          navigate("/completedTask");
        }
      });
  };

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <h3 className="text-3xl text-purple-500 text-center font-bold mb-14 mt-24">
        My Task
      </h3>
      <section className="max-w-2xl lg:p-6 p-4 mx-auto  bg-white rounded-md shadow-md dark:bg-gray-800">
        {dailyTasks?.map((dailyTask, i) => (
          <>
            <ul key={dailyTask?._id} className="flex items-center">
              <li className="w-[50px]">{i + 1}</li>
              <li className="w-[380px]">
                <h3 className="text-md">{dailyTask.dTask}</h3>
              </li>

              <li className="w-[80px]">
                <button
                  onClick={() => ToCompletedTask(dailyTask)}
                  className="py-1 px-2 text-xs text-white capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-purple-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  completed
                </button>
              </li>

              <li className="w-[80px] text-lg text-center text-blue-600">
                <button onClick={() => updateDailyTask(dailyTask)}>
                  <UpdateIcon />
                </button>
              </li>
              <li className="w-[50px] text-lg text-red-600">
                <button onClick={() => deleteDailyTask(dailyTask._id)}>
                  <DeleteIcon />
                </button>
              </li>
            </ul>
            <hr className="my-2" />
          </>
        ))}
      </section>
      {/* modal */}
      <UpdateMyTask
        singleDailyTask={singleDailyTask}
        setDailyTask={setDailyTask}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></UpdateMyTask>
    </div>
  );
};

export default MyTask;
