import React, { useState,useEffect  } from "react";
import Navbar from "./navbar";
import Widgets from "./widgets";
import Form from "./form";
import FormData from "./formData";
const Home = () => {
    const [users, setUsers] = useState([]);
    const api = 'https://api-generator.retool.com/yhlx8U/data';
    const fetchTableData = async (url:any) =>{
        try{
            const res = await fetch(url);
            const data = await res.json();

            if(data.length > 0){
                setUsers(data);
            }
        } catch(e){
            console.error(e)
        }
    };
    useEffect(() => {
        fetchTableData(api);
    }, []);

    const [inputArr, setInputArr] = useState([]);
    const addData = (formData:any) => {
        setInputArr([...inputArr, formData]);
    };
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <div className="widgets-outer flex gap-3">
                    <Widgets records={users.length+inputArr.length}/>
                </div>
                <div className="flex mt-5 gap-3">
                    <div className="tableData  w-[65%]">
                        <FormData data={inputArr} usersData={users}/>
                    </div>
                    <div className="formData border p-5 w-[35%]">
                        <Form addDataSubmit={addData}/>
                    </div>
                </div>
            </div>
        </>
    );
};
  
export default Home;