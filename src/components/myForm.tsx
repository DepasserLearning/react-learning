import { FormEvent, useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    emailId: "",
  });

  const [allUser, setAllUser] = useState([]);

  const changeFormData = (e: any) => {
    console.log(e.target);

    const { name, value } = e.target;
    setFormData((prev) => {
      console.log(prev, "prev");

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitFormData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdatanew = formData;
    setAllUser((prev) => {
      return {
        ...prev,
        formdatanew,
      };
    });
    setFormData({
      firstName: "",
      lastName: "",
      contactNumber: "",
      emailId: "",
    });
    console.log(allUser, "this is my data");
  };

  return (
    <>
      <form onSubmit={submitFormData}>
        <input
          type="text"
          name="firstName"
          onChange={changeFormData}
          value={formData.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={changeFormData}
          value={formData.lastName}
        />
        <input
          type="number"
          name="contactNumber"
          onChange={changeFormData}
          value={formData.contactNumber}
        />
        <input
          type="email"
          name="emailId"
          onChange={changeFormData}
          value={formData.emailId}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
