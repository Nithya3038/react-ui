import react from 'react';
import {useState} from 'react';

function User(){
    const[user,setUser]=useState({
        name: "Nithya",
        email: "nithya@gmail.com",
        projects: [{title:"Calendar-Notes",description:"Simple Calendar with notes"},
            {title:"Task-Reminder",description:"Task reminder"},
            {title:"Blog-app",description:"Travel-Blog"}],
        });

        const[formData,setFormData]=useState({...user});

        const handleSave=()=>{
            setUser(formData);
        };

        return(
            <div>
                <h2>User Profile</h2>
                <input className="border border-gray-100 rounded p-3"
                value={formData.name}
                onChange={(e)=>setFormData({...formData, name:e.target.value})}
                placeholder="Name"/>

                <input className="border border-gray-100 rounded -3"
                value={formData.email}
                onChange={(e)=>setFormData({...formData,emai:e.target.value})}
                placeholder="Email"/>

                

                <button className="bg-blue-300 text-white px-3 py-2 rounded"
              onClick={handleSave}>
                    Save
                </button>
            </div>
        )

}
export default User;
