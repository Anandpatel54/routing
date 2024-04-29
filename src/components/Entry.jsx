import { useNavigate } from "react-router-dom";
const Entry = () => {
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate("/show");
  };

  return (
    <div className="mt-[80px]">
      <button onClick={submitHandler}>submit</button>
    </div>
  );
};

export default Entry;
