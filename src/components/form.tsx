
import React, { useState,useEffect  } from "react";
const Form = ({ addDataSubmit }:any) => {
    const [inputData, setInputData] = useState({
        firstname:'',
        lastname:'',
        phone:'',
        email:'',
        address:''

    });

    const changeHandleData = (e:any) =>{
        console.log(e.target.name,'wven')
        setInputData({
            ...inputData,
            [e.target.name]:e.target.value
        })
       
    };
    let { firstname, lastname, phone, email, address } = inputData;
    // const [inputArr, setInputArr]=useState([]);
    const addData =async (e:any) =>{
        e.preventDefault();
        const response = await fetch('https://retoolapi.dev/2SrSZG/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputData),
        });
        if (response.ok) {
            addDataSubmit(inputData);
            setInputData({
              firstname: '',
              lastname: '',
              phone: '',
              email: '',
              address: ''
            });
          } else {
            console.error('Failed to submit data');
          }
    };
    // useEffect(() => {
    //     console.log(inputArr, 'inputArr');
    // }, [inputArr]);

   
    return (
        <>
            <form onSubmit={addData}>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input type="text" value={inputData.firstname} name="firstname" onChange={changeHandleData}  id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter First Name" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input type="text" value={inputData.lastname} name="lastname" onChange={changeHandleData} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Last Name" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone</label>
                    <input type="text" value={inputData.phone} name="phone" onChange={changeHandleData} className="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Phone No." required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                    <input type="email" value={inputData.email} name="email" onChange={changeHandleData} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Email Id" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                    <input type="test" value={inputData.address} name="address" onChange={changeHandleData} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Address" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </>
    );
};
  
export default Form;