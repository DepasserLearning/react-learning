import { useEffect, useState } from "react";
import TableData from "./tableData";

const FormData = ({data,usersData}:any) => {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                First Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableData users={usersData}></TableData>
                        {data.map((item:any, index:any) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.firstname}
                                </th>
                                <td className="px-6 py-4">
                                {item.lastname}
                                </td>
                                <td className="px-6 py-4">
                                {item.phone}
                                </td>
                                <td className="px-6 py-4">
                                {item.email}
                                </td>
                                <td className="px-6 py-4">
                                {item.address}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
  
export default FormData;