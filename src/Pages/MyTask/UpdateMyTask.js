import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { toast } from "react-hot-toast";

export default function UpdateMyTask({
  setIsOpen,
  isOpen,
  singleDailyTask,
  setDailyTask,
}) {
  function closeModal() {
    setIsOpen(false);
  }

  const handleUpdateMyTask = (event) => {
    event.preventDefault();
    closeModal();
    const form = event.target;
    const newTask = form.myTask.value;
    console.log(newTask);

    const newTaskInfo = {
      dTask: newTask,
    };

    fetch(
      `https://task-management-server-iqbal221.vercel.app/dailyTask/${singleDailyTask._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newTaskInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Updated Task successfully");
          setDailyTask(newTask);
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="w-full mt-7">
                    <form onSubmit={handleUpdateMyTask}>
                      <div className="form-control">
                        <input
                          name="myTask"
                          type="text"
                          defaultValue={singleDailyTask.dTask}
                          placeholder="Write Description Here..."
                          className="textarea border p-5 border-lime-500 input-neutral w-full "
                        />
                      </div>

                      <div className=" form-control mt-4">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Update My Task
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
