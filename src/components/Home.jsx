import axios from "../helpers/axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [users, setusers] = useState([]);
  const getUsers = async () => {
    try {
      const { data } = await axios.get("/users");
      console.log(data);
      setusers(data);
    } catch (error) {
      console.log(error);
    }
  };

  let renderusers = "Loading....";
  if (users.length > 0) {
    renderusers = users.map((user) => (
      <div className="bg-red-100 p-3 mr-2 mb-2" key={user.id}>
        <h1 className="font-2xl">{user.name}</h1>
        <small>{user.email}</small>
      </div>
    ));
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="mt-[80px]">
      <h1 className="text-2xl font-extrabold">Homepage</h1>
      <div className="flex flex-wrap mt-3">{renderusers}</div>
    </div>
  );
};

export default Home;
