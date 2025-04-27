import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fcfcfc] pl-150">
      <div className="w-[300px] h-[700px] bg-[#f7f8fa] border border-[#ededed] rounded-md flex flex-col justify-end pb-8 px-6">
        <div>
          <h2
            className="text-2xl text-black pb-1"
            style={{ fontWeight: 650 }}
          >
            Welcome to PopX
          </h2>
          <p className="text-base text-[#8a8a8a] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <button
            className="w-full text-white font-medium py-2 rounded mb-3 h-11"
            style={{ backgroundColor: "#6600FF" }}
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>
          <button
            className="w-full text-black font-medium py-2 rounded h-11"
            style={{ backgroundColor: "#D9CAFF" }}
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
