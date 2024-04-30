import { useNavigate } from "react-router-dom";
import axios from "../helpers/axios";
import { useState } from "react";
const Entry = () => {
  const [posts, setposts] = useState([]);
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate("/show");
  };

  const getposts = async () => {
    try {
      const { data } = await axios.get("/posts");
      console.log(data);
      setposts(data);
    } catch (error) {
      console.log(error);
    }
  };

  let renderPosts = "Loading....";
  if (posts.length > 0) {
    renderPosts = posts.map((post) => (
      <div className="bg-red-100 p-3 mr-2 mb-2" key={post.id}>
        <h2>{post.title}</h2>
        <small>{post.body}</small>
        <h1>{post.name}</h1>
      </div>
    ));
  }

  return (
    <div className="mt-[80px]">
      <h1 className="text-2xl font-extrabold">Book Entries</h1>
      <button className="bg-green-500 py-2 px-5 mt-3" onClick={getposts}>
        Get Posts
      </button>
      <div className="flex flex-wrap mt-3">{renderPosts}</div>
      <hr />
      <hr />
      <button
        className="py-3 px-6 bg-red-300 mt-5 rounded-md"
        onClick={submitHandler}
      >
        submit
      </button>
    </div>
  );
};

export default Entry;
