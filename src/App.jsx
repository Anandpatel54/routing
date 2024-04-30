import Routes from "./Routes/RoutesCmponent";
import Nav from "../src/components/Nav";

const App = () => {
  return (
    <div className="w-[80%] m-auto h-screen">
      <Nav />
      <Routes />
    </div>
  );
};

export default App;
