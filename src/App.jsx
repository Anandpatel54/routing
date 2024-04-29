import Routes from "./Routes/RoutesCmponent";
import Nav from "../src/components/Nav";
import axios from "axios";

const App = () => {
  const getUsers = async () => {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[80%] m-auto h-screen">
      <Nav />
      <button className="bg-green-500 py-2 px-5 mt-3" onClick={getUsers}>Get Users</button>
      <Routes />
    </div>
  );
};

export default App;
