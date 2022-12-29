import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { toast } from "react-hot-toast";

const Media = () => {
  const [mediaTask, setMediaTask] = useState([]);

  // media task  receive from database
  useEffect(() => {
    fetch("http://localhost:5000/mediaTask")
      .then((res) => res.json())
      .then((data) => setMediaTask(data));
  }, []);

  // delete media dask from database
  const deleteMediaTask = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/mediaTask/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Delete Task Successfully");
        }
      });
    const remainingTask = mediaTask.filter((tasks) => tasks._id !== id);
    setMediaTask(remainingTask);
  };

  return (
    <div>
      <h3 className="text-3xl text-green-500 text-center font-bold mb-8 mt-24">
        Media Task
      </h3>
      <section className="max-w-2xl p-6  mx-auto  bg-white rounded-md shadow-md dark:bg-gray-800">
        {mediaTask.map((MT, i) => (
          <>
            <ul key={MT._id} className="flex items-center mt-4 ">
              <li className="w-[50px]">{i + 1})</li>
              <li className="mr-8 ">
                <img
                  className="w-16 h-16 rounded-full"
                  src={MT.image}
                  alt="..."
                />
              </li>
              <li className="w-[350px]">
                <h3 className="text-md">{MT.MTask}</h3>
              </li>

              <li className="w-[50px] text-lg text-blue-600">
                <UpdateIcon />
              </li>
              <li className="w-[50px] text-lg text-red-600">
                <button onClick={() => deleteMediaTask(MT._id)}>
                  <DeleteIcon />
                </button>
              </li>
            </ul>
            <hr className="text-green-500 mt-3" />
          </>
        ))}
      </section>
    </div>
  );
};

export default Media;
