import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { toast } from "react-hot-toast";

const MyTask = () => {
  const [dailyTasks, setDailyTask] = useState([]);

  // receive daily task from database
  useEffect(() => {
    fetch("http://localhost:5000/dailyTask")
      .then((res) => res.json())
      .then((data) => setDailyTask(data));
  }, []);

  // delete daily dask from database
  const deleteDailyTask = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/dailyTask/${id}`, {
      method: "DELETE",
    })
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

  return (
    <div>
      <h3 className="text-3xl text-purple-500 text-center font-bold mb-8 mt-24">
        My Task
      </h3>
      <section className="max-w-2xl p-6  mx-auto  bg-white rounded-md shadow-md dark:bg-gray-800">
        {dailyTasks.map((dailyTask, i) => (
          <>
            <ul key={dailyTask._id} className="flex items-center mt-3 ">
              <li>{i + 1}</li>
              <li className="w-[50px]"></li>
              <li className="w-[380px]">
                <h3 className="text-md">{dailyTask.dTask}</h3>
              </li>

              <li className="w-[50px] text-lg text-blue-600">
                <button>
                  <UpdateIcon />
                </button>
              </li>
              <li className="w-[50px] text-lg text-red-600">
                <button onClick={() => deleteDailyTask(dailyTask._id)}>
                  <DeleteIcon />
                </button>
              </li>
              <li className="w-[80px]">
                <button className="py-1 px-2 text-xs text-white capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-purple-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  completed
                </button>
              </li>
            </ul>
            <hr className="mt-3" />
          </>
        ))}
      </section>
    </div>
  );
};

export default MyTask;