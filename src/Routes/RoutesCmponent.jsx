import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Library from "../components/Library";
import Entry from "../components/Entry";
import Details from "../components/Details";

const RoutesCmponent = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<Entry />} />
    <Route path="/show" element={<Library />}>
      <Route path="/show/:id" element={<Details />} />
    </Route>
    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
  )
}

export default RoutesCmponent