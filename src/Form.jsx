import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!form.firstName) tempErrors.firstName = "First Name is required";
    if (!form.lastName) tempErrors.lastName = "Last Name is required";
    if (!form.username) tempErrors.username = "Username is required";
    if (!form.email) tempErrors.email = "Email is required";
    if (!form.password) tempErrors.password = "Password is required";
    if (!form.phoneNo) tempErrors.phoneNo = "Phone Number is required";
    if (!form.country) tempErrors.country = "Country is required";
    if (!form.city) tempErrors.city = "City is required";
    if (!form.panNo) tempErrors.panNo = "PAN No. is required";
    if (!form.aadharNo) tempErrors.aadharNo = "Aadhar No. is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  useEffect(() => {
    setIsFormValid(validate());
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/success", { state: form });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="mt-2 text-sm text-blue-500">
            {showPassword ? "Hide" : "Show"}
          </button>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="text" name="phoneNo" value={form.phoneNo} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          {errors.phoneNo && <p className="text-red-500 text-sm mt-1">{errors.phoneNo}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <select name="country" value={form.country} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <select name="city" value={form.city} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
          </select>
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">PAN No.</label>
          <input type="text" name="panNo" value={form.panNo} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          {errors.panNo && <p className="text-red-500 text-sm mt-1">{errors.panNo}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Aadhar No.</label>
          <input type="text" name="aadharNo" value={form.aadharNo} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          {errors.aadharNo && <p className="text-red-500 text-sm mt-1">{errors.aadharNo}</p>}
        </div>
        <button type="submit" disabled={!isFormValid} className="w-full bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
