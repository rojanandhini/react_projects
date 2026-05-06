import React, { useEffect, useState } from 'react'

const Profile = () => {
  const userId = localStorage.getItem("userId");
  const [userData,setUserData]=useState();
  const userDataFetch=async ()=>{
    const res = await fetch(`/api/userData/${userId}`);
const data = await res.json();
setUserData(data.data);
  }
  useEffect(()=>{userDataFetch()},[]
  );
    if (!userData) {
    return <div className="text-center py-10">Loading profile...</div>;
  }

  return (<div className=" bg-gradient-to-br from-violet-300 to-fuchsia-300 p-10"><form className="  backdrop-blur-[10px] border-white/30 shadow-2xl
                 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-lg ring-1 ring-inset ring-white/20 w-[50%] mx-auto flex flex-col items-center py-5 ">
        <h2 className="text-2xl font-semibold text-gray-700 py-2">Personal Information</h2>
        {
          <div className="grid grid-cols-2 gap-3">
            
               Name:
            <div>
              {userData.firstName} 
               
            </div>
            Second Name:
            <div className="">{userData.secondName} </div>
          

           Gender:
           <div className="">{userData.gender}</div>
            

           Date Of Birth:
           <div className="">{userData.dateOfBirth}</div>
             

            Mobile number:
            <div className="">{userData.mobNo}</div>
          

            Email:
            <div>
               {userData.email}
               
            </div>
            
        </div>}
        
        
        
    </form></div>
    
  )
}

export default Profile