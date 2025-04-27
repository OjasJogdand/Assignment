import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login()
{
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    return(
        <div className="min-h-screen flex items-center justify-center bg-[#fcfcfc] pl-150">
  <div className="w-[300px] h-[700px] bg-[#f7f8fa] border border-[#ededed] rounded-md flex flex-col justify-start pt-8 px-6">
    
    <h1 style={{ fontSize: '30px' }} className="text-[#111827] mb-2 font-bold pb-2">
      Signin to your <br  /> PopX account
    </h1>
    <p className="text-[14px] text-[#6b7280] mb-6">
      Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
    </p>

    <div className="relative mb-5">
      <div className="absolute -top-2.5 left-3 bg-[#f7f8fa] px-1 text-[13px] text-[#9B5DE5] font-semibold">
        Email Address
      </div>
      <input
        type="email"
        placeholder="Enter email address"
        className="w-full px-3 py-2.5 border border-[#e5e7eb] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF] text-[14px]"
        onChange={(e)=>{setEmail(e.target.value)}}
      />
    </div>

    <div className="relative mb-6">
      <div className="absolute -top-2.5 left-3 bg-[#f7f8fa] px-1 text-[13px] text-[#9B5DE5] font-semibold">
        Password
      </div>
      <input
        type="password"
        placeholder="Enter password"
        className="w-full px-3 py-2.5 border border-[#e5e7eb] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF] text-[14px]"
        onChange={(e)=>{setPassword(e.target.value)}}
      />
    </div>  

    <button style={{ backgroundColor: "#cccccc" }} className="w-full py-2.5 text-white rounded-lg text-[14px] font-medium hover:bg-[#5a1fe6] transition-colors" onClick={
        ()=>{
            navigate("/profile");
        }
    }>
      Login
    </button>
  </div>

  <div className="flex-1 w-full bg-[#fcfcfc]"></div>
</div>

    )
}

export default Login;