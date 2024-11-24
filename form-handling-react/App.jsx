import React from 'react';
import FormikForm from './components/FormikForm';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <div>
      <h1>User Registration with Formik</h1>
      <RegistrationForm/>
      <FormikForm />
    </div>
  );
};

export default App;