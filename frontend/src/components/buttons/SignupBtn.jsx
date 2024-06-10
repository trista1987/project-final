import { Link } from "react-router-dom";

export const SignupBtn = () => {
  return (
    <div>
      <Link to="/signup">
        <button className="bg-transparent text-white p-2 rounded-[23px] border-3 border-black font-avenir">
          Signup
        </button>
      </Link>
    </div>
  );
};
