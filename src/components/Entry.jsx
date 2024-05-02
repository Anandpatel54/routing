//import { useNavigate } from "react-router-dom";
import axios from "../helpers/axios";
import { useEffect, useState } from "react";
const Entry = () => {
  const [images, setimages] = useState([]);
  const [page, setpage] = useState(1);

  const getposts = async () => {
    try {
      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      console.log(data);
      setimages(data);
    } catch (error) {
      console.log(error);
    }
  };

  let renderImage = "Loading....";
  if (images.length > 0) {
    renderImage = images.map((image) => (
      <div className="shadow-lg shadow-red-500 md:shadow-xl p-3 mr-2 mb-2 ml-12 w-[25%]" key={image.id}>
        <img className="" src={image.download_url} alt="" />
        <h2>{image.author}</h2>
      </div>
    ));
  }

  useEffect(() => {
    getposts();
  }, [page]);

  return (
    <div className="mt-[80px]">
      <h1 className="text-2xl font-extrabold">Book Entries</h1>
      <div className="flex flex-wrap mt-3">{renderImage}</div>
      <div className="text-center p-10">
        <span
          onClick={() => setpage(page - 1)}
          className="text-blue-400 text-3xl mr-10 cursor-pointer"
        >
          prev
        </span>
        <span
          onClick={() => page > 0 && setpage(page + 1)}
          className="text-blue-400 text-3xl mr-10 cursor-pointer"
        >
          next
        </span>
      </div>
    </div>
  );
};

export default Entry;
