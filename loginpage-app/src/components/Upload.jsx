import React from 'react';
import {useState} from 'react';

const Upload=()=>{
    // const [image,setImage]=useState('');

    // const handleFileChange=(e)=>{
    //     const file =e.target.files[0];
    //     if(file){
    //         setImage(URL.createObjectURL(file));
    //     }
    // };

    const [image, setImage]= useState([]);

    const handleFileChange=(e)=>{
        const files = Array.from(e.target.files);
        const imageURL=files.map((file,index)=>({
            id:Date.now()+index,
            src: URL.createObjectURL(file),
            name: files.name,}));
        // setImage(imageURL);
        setImage((prev) => [...prev, ...imageURL]);

    };

    const handleDelete=(id)=>{
        setImage((prev)=>prev.filter((img)=>img.id !== id));
    };

    const handleAllClear=()=>{
        setImage([]);
    };

    return(
         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-body">
           <div className="bg-white p-6 rounded-2xl shadow-md text-center w-full max-w-xl">
                <h2 className="text-2xl font-semibold text-red-400 mb-4">Upload Image</h2>

                <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="block w-full mb-4 text-sm text-gray-500"/>

                {/* <div className="grid grid-cols-2 gap-4">
                {image && (
                    <img src={image} alt="image" className="rounded-lg"/>
                )}
                </div> */}

                {image.length > 0 && (
                <button onClick={handleAllClear} className="mb-4 px-4 py-1 bg-red-400 text-white rounded hover:bg-red-500">Clear All</button>
                )}

                <div className="grid grid-cols-2 gap-4">

                {image.map((img) => (
                 <div className="relative border rounded p-2 bg-gray-50">
                 <img key={img.id} src={img.src} alt="image" className="rounded-lg h-32 w-full object-cover mb-2"/>

                <button onClick={() => handleDelete(img.id)} className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 rounded-full">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Upload;