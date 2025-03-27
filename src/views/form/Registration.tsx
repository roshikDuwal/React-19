import { useState } from "react";

interface IRegistration {
  name: string;
  email: string;
  password: any;
  phone: string;
}

const Registration = () => {
  const [value, setValue] = useState<IRegistration>({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    setValue({
      name: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <h1 className=" text-lg font-bold">Form Registration</h1>
      <p>{`Hello ${value.name}. Your Email is ${value.email} and your password is ${value.password}. Your phone is ${value.phone}`}</p>
      <form
        className="flex flex-col items-center justify-center gap-8 border-2 px-8 py-10 "
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col items-start">
          <label htmlFor="name">
            {" "}
            <b>Name</b>
          </label>
          <input
            className="border-2 px-3 py-2"
            type="text"
            placeholder="Enter a Name"
            name="name"
            value={value.name}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="flex flex-col items-start">
          <label htmlFor="email">
            {" "}
            <b>Email</b>
          </label>
          <input
            className="border-2 px-3 py-2"
            type="email"
            placeholder="Enter an Email"
            name="email"
            required
            value={value.email}
            onChange={handleFormChange}
          />
        </div>

        <div className="flex flex-col items-start">
          <label htmlFor="password">
            {" "}
            <b>Password</b>
          </label>
          <input
            className="border-2 px-3 py-2"
            type="password"
            placeholder="Enter a Password"
            name="password"
            required
            value={value.password}
            onChange={handleFormChange}
          />
        </div>

        <div className="flex flex-col items-start">
          <label htmlFor="phone">
            {" "}
            <b>Phone</b>
          </label>
          <input
            className="border-2 px-3 py-2"
            type="text"
            placeholder="Enter a Phone"
            name="phone"
            required
            value={value.phone}
            onChange={handleFormChange}
          />
        </div>

        <button className="border-2 px-3 py-2 " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
