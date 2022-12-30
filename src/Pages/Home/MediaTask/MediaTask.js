import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const MediaTask = () => {
  const hostingImage = process.env.REACT_APP_IMGBB_KEY;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTask = (data) => {
    // task info
    const addTask = data.task;
    console.log(addTask);

    // // image info
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${hostingImage}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          console.log(imageData.data.url);
          const imageInfo = imageData.data.url;

          // press submit button key
          const totalData = {
            MTask: addTask,
            image: imageInfo,
          };

          fetch("http://localhost:5000/mediaTask", {
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
                toast.success("Added task successfully");
                navigate("/media");
              } else {
                toast.error(data.message);
              }
            });
        }
      });
  };

  return (
    <section className="max-w-2xl p-10 my-20 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h3 className="text-3xl text-lime-500 text-center font-bold mb-8">
        Media Task
      </h3>
      <form onSubmit={handleSubmit(handleTask)}>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          <div className="w-full mt-7">
            <div className="form-control ">
              <input
                name="image"
                type="file"
                className="file-input border-black file-input-bordered w-full "
                {...register("image")}
              />
            </div>
          </div>

          <div className="form-control">
            <textarea
              name="task"
              type="text"
              placeholder="Write Description Here..."
              className="textarea border p-5 border-lime-500 input-neutral w-full "
              {...register("task")}
            ></textarea>
          </div>
        </div>
        <div className="form-control mx-auto mt-4">
          <button className="px-6 py-2 font-medium w-full text-white capitalize transition-colors duration-300 transform bg-lime-500 rounded-lg hover:bg-lime-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default MediaTask;
