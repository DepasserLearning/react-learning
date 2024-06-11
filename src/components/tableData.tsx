
import React, { useState,useEffect  } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const TableData = ({users}:any) => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        if (users.length > 0) {
          setIsLoading(false);
        }
      }, [users]);
    return (
        <>
        {isLoading
          ? [...Array(5)].map((index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <Skeleton />
                </th>
                <td className="px-6 py-4">
                  <Skeleton />
                </td>
                <td className="px-6 py-4">
                  <Skeleton />
                </td>
                <td className="px-6 py-4">
                  <Skeleton />
                </td>
                <td className="px-6 py-4">
                  <Skeleton />
                </td>
              </tr>
            ))
          : users.map((curUser:any) => (
              <tr key={curUser.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {curUser.firstname}
                </th>
                <td className="px-6 py-4">
                  {curUser.lastname}
                </td>
                <td className="px-6 py-4">
                  {curUser.phone}
                </td>
                <td className="px-6 py-4">
                  {curUser.email}
                </td>
                <td className="px-6 py-4">
                  {curUser.address}
                </td>
              </tr>
            ))}
         </>
    );
};
  
export default TableData;