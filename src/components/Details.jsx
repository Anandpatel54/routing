import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <h1 className="text-2xl">Details</h1>
      <h1 className="text-xl m-5">
        Book Id: <span className="font-extrabold">{id}</span>
      </h1>
      <br />
      <Link className="text-blue-300" to={`${pathname}/profile`}>
        Profile
      </Link>
      <br />
      <button
        className="py-3 px-6 bg-red-300 mt-5 rounded-md"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </>
  );
};

export default Details;
