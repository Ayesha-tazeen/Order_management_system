
import React, { useState } from 'react';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import SampleData from './SampleData';

function Base() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    shipiify: '',
    date: '',
    status: '',
    customer: '',
    email: '',
    country: '',
    shipping: '',
    source: '',
    orderType: ''
  });
  const [sampleData, setSampleData] = useState(SampleData);
  // For toggling the form
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...formData };
    setSampleData([...sampleData, newData]);
    // Reset form data
    setFormData({
      id: '',
      shipiify: '',
      date: '',
      status: '',
      customer: '',
      email: '',
      country: '',
      shipping: '',
      source: '',
      orderType: ''
    });
    // Close the form
    setIsFormOpen(false);
  };

  return (
    <>
      <div onClick={() => setIsFormOpen} className='flex flex-row justify-between'>
        <div className=' p-4 text-xl font-extrabold w-auto'>Orders</div>
        <div className='m-4 py-1 px-6 rounded-lg bg-blue-500 text-sm text-white'>
          <button onClick={toggleForm}>CREATE NEW</button>
        </div>
      </div>
      <NavBar />
      <div className=' mt-3'>
        <Dashboard sampleData={sampleData} />
        {/* 
        *******************************here goes the form fields *************************************8*/}
        {isFormOpen && (
          <form onSubmit={handleSubmit} className="bg-white  py-4 px-4 mx-4 sm:shadow-lg sm:shadow-gray-200 sm:rounded-lg p-4 rounded-md shadow-md">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="id" className="block font-medium">ID:</label>
                <input type="text" name="id" id="id" value={formData.id} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="shipiify" className="block font-medium">Shipiify#:</label>
                <input type="text" name="shipiify" id="shipiify" value={formData.shipiify} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="date" className="block font-medium">Date:</label>
                <input type="text" name="date" id="date" value={formData.date} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="status" className="block font-medium">Status:</label>
                <input type="text" name="status" id="status" value={formData.status} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="customer" className="block font-medium">Customer:</label>
                <input type="text" name="customer" id="customer" value={formData.customer} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium">Email:</label>
                <input type="text" name="email" id="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="country" className="block font-medium">Country:</label>
                <input type="text" name="country" id="country" value={formData.country} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="shipping" className="block font-medium">Shipping:</label>
                <input type="text" name="shipping" id="shipping" value={formData.shipping} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="source" className="block font-medium">Source:</label>
                <input type="text" name="source" id="source" value={formData.source} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="orderType" className="block font-medium">Order Type:</label>
                <input type="text" name="orderType" id="orderType" value={formData.orderType} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
              </div>


            </div>
            <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Submit</button>
          </form>
          // ***********************here ends the form fields***************************************
        )}
      </div>
    </>
  );
}

export default Base;
