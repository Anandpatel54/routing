import { Link, Outlet } from "react-router-dom";

const Library = () => {
  return (
    <>
      <h1 className="text-2xl mt-[80px] font-extrabold">Library</h1>
      <ul className="list-none">
        <li>
          <Link to="/show/1">book 1</Link>
        </li>
        <li>
          <Link to="/show/2">book 2</Link>
        </li>
        <li>
          <Link to="/show/3">book 3</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
};

export default Library;
