import Routes from "./Routes/RoutesCmponent";
import Nav from "../src/components/Nav";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [user, setuser] = useState([]);
  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
      setuser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[80%] m-auto h-screen">
      <Nav />
      <button className="bg-green-500 py-2 px-5 mt-3" onClick={getUsers}>
        Get Users
      </button>
      <div>
        {user.map((user, i) => (
          <h2 key={i}>
            {user.id}. {user.name}
          </h2>
        ))}
      </div>
      <Routes />
    </div>
  );
};

export default App;
