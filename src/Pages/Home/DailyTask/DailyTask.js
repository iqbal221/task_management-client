import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DailyTask = () => {
  const navigate = useNavigate();

  const handleTask = (event) => {
    event.preventDefault();
    // task info
    const form = event.target;
    const addTask = form.task.value;
    console.log(addTask);

    const totalData = {
      dTask: addTask,
    };
    fetch("https://task-management-server-iqbal221.vercel.app/dailyTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Added Task successfully");
          navigate("/myTask");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <section className="max-w-2xl p-6 mt-20 mx-auto  bg-white rounded-md shadow-md dark:bg-gray-800">
      <h3 className="text-3xl text-purple-500 text-center font-bold">
        My Daily Task
      </h3>
      <form onSubmit={handleTask}>
        <div className="w-full">
          <div className="form-control p-6">
            <input
              name="task"
              type="text"
              placeholder="Write Daily Task Here ...."
              className="file-input border p-3 rounded-lg w-full border-purple-500 mt-3 outline-none"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default DailyTask;
