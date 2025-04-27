import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup()
{
    const [name,setName]=useState("");
    const [number,setNumber]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [company,setCompany]=useState("");
    const [agency,setAgency]=useState("");

    const navigate=useNavigate();

    const handleSubmit = () => {
        if (!name || !number || !email || !password || !agency) {
            alert("Please fill all required fields marked with *");
            return;
        }
        navigate("/profile");
    };
    return(
        <div className="min-h-screen flex items-center justify-center bg-[#fcfcfc] pl-150">
            <div className="w-[300px] h-screen max-h-screen bg-[#f7f8fa] border border-[#ededed] rounded-md flex flex-col justify-start pt-8 px-6">
                <h1 style={{ fontSize: '30px' }} className="text-[#111827] mb-2 font-bold pb-7">
                    Create your <br /> PopX account
                </h1>

                <div className="relative mb-5">
                    <div className="absolute -top-2.5 left-3 bg-[#f7f8fa] px-1 text-[13px] text-[#9B5DE5] font-semibold">
                        Full Name <span className="text-red-500">*</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter full name"
                        className="w-full px-3 py-2.5 border border-[#e5e7eb] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF] text-[14px]"
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                </div>

                
                <div className="relative mb-5">
                    <div className="absolute -top-2.5 left-3 bg-[#f7f8fa] px-1 text-[13px] text-[#9B5DE5] font-semibold">
                        Phone Number <span className="text-red-500">*</span>
                    </div>
                    <input
                        type="tel"
                        placeholder="Enter phone number"
                        className="w-full px-3 py-2.5 border border-[#e5e7eb] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF] text-[14px]"
                        onChange={(e)=>{setNumber(e.target.value)}}
                    />
                </div>

                
                <div className="relative mb-5">
                    <div className="absolute -top-2.5 left-3 bg-[#f7f8fa] px-1 text-[13px] text-[#9B5DE5] font-semibold">
                        Email Address <span className="text-red-500">*</span>
                    </div>
                    <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full px-3 py-2.5 border border-[#e5e7eb] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF] text-[14px]"
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>

                
                <div className="relative mb-5">
                    <div className="absolute -top-2.5 left-3 bg-[#f7f8fa] px-1 text-[13px] text-[#9B5DE5] font-semibold">
                        Password <span className="text-red-500">*</span>
                    </div>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full px-3 py-2.5 border border-[#e5e7eb] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF] text-[14px]"
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>

                
                <div className="relative mb-5">
                    <div className="absolute -top-2.5 left-3 bg-[#f7f8fa] px-1 text-[13px] text-[#9B5DE5] font-semibold">
                        Company Name
                    </div>
                    <input
                        type="text"
                        placeholder="Enter company name"
                        className="w-full px-3 py-2.5 border border-[#e5e7eb] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#6C25FF] focus:border-[#6C25FF] text-[14px]"
                        onChange={(e)=>{setCompany(e.target.value)}}
                    />
                </div>

                
                <div className="text-[13px] text-[#9B5DE5] font-semibold mb-4">
                    Are you an Agency? <span className="text-red-500">*</span>
                </div>
                <div className="flex items-center space-x-4 mb-8 pb-12">
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="agency" value="yes" className="accent-[#6C25FF]" onChange={(e)=>{setAgency(e.target.value)}} />
                        <span className="text-[14px] text-[#111827]">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="agency" value="no" className="accent-[#6C25FF]" onChange={(e)=>{setAgency(e.target.value)}} />
                        <span className="text-[14px] text-[#111827]">No</span>
                    </label>
                </div>

                
                <button
                    style={{ backgroundColor: "#6C25FF" }}
                    className="w-full py-2.5 text-white rounded-lg text-[14px] font-medium hover:bg-[#5a1fe6] transition-colors mt-4"
                    onClick={handleSubmit}
                >
                    Create Account
                </button>
            </div>
            <div className="flex-1 w-full bg-[#fcfcfc]"></div>
        </div>
    )
}

export default Signup;