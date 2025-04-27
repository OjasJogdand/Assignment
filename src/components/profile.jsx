import profileImg from "../assets/profile.png";

function Profile()
{
    return(
        <div className="min-h-screen flex items-center justify-center bg-[#fcfcfc] pl-150">
  <div className="w-[300px] h-screen max-h-screen bg-[#fcfcfc] border border-[#ededed] rounded-md flex flex-col pt-0">

    <div className="bg-white w-full rounded-t-md py-4 px-4 shadow-xs ">
      <h2 className="text-[16px] font-medium text-[#374151] ">Account Settings</h2>
    </div>

    <div className="flex flex-col p-4">
      <div className="flex items-center mb-4">  
        <div className="relative w-12 h-12 mr-4">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
          
          <div className="absolute bottom-0 right-0 bg-[#6A23E5] w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px]">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M70,32H60.5c-0.7-2.5-2-5-5-5h-11c-3,0-4.3,2.5-5,5H30c-3.5,0-6,2.5-6,6v24c0,3.5,2.5,6,6,6h40c3.5,0,6-2.5,6-6V38
           C76,34.5,73.5,32,70,32z M50,64c-6,0-11-5-11-11s5-11,11-11s11,5,11,11S56,64,50,64z M50,47c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6
            S53.3,47,50,47z" fill="white"/>
          </svg>
          </div>
        </div>

        
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold text-[#111827]">Marry Doe</span>
          <span className="text-[12px] text-[#0D0D0D]">Marry@Gmail.Com</span>
        </div>
      </div>

      <p className="text-[12px] text-[#0D0D0D] ">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
      <div className="w-full mt-6">
       <hr className="border-t border-dashed border-gray-300 w-full" />
      </div>
      <div className="w-full mt-110">
       <hr className="border-t border-dashed border-gray-300 w-full" />
      </div>
    </div>
  </div>
</div>
    )
}

export default Profile;