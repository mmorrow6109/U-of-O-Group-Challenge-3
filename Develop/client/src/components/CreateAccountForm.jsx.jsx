// Import necessary libraries and components
import React from 'react';
import Navbar from './Navbar'; // Import Navbar component
import CreateAccountForm from './CreateAccountForm'; // Import CreateAccountForm component

// Create CreateAccountPage component
const CreateAccountPage = () => {
  // Return JSX for CreateAccountPage
  return (
    <div>
      {/* Include the Navbar component */}
      <Navbar />
      {/* Include the CreateAccountForm component */}
      <div>
        <h1>Create Account</h1>
        <CreateAccountForm />
      </div>
    </div>
  );
};

// Export CreateAccountPage component
export default CreateAccountPage;
