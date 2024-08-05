import React from 'react';

const CustomersContent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Customers</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-600">Here you can manage and view all customers.</p>
        {/* Add customer list or table component here */}
      </div>
    </div>
  );
};

export default CustomersContent;
