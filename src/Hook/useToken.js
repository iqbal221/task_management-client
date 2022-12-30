import { useState, useEffect } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://task-management-server-iqbal221.vercel.app/jwt?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem("task_management", data.access_token);
            setToken(data.access_token);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
