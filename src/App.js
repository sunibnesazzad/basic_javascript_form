
import './App.css';
import { useState } from 'react';
// import { Link } from "react-router-dom";
import FormInput from './components/formInput.jsx';

function App() {

  const [values, setValues] =useState({
    username: "",
    email : "",
    birthday : "",
    password : "",
    confirmpassword : ""
  });
  
  const input =[
    {
      id : 1,
      name : "username",
      type : "text",
      placeholder : "Username",
      errorMessage : "user name should be 3-16 character and should not contain any special character",
      label : "Username",
      require: "true"
    },{
      id : 2,
      name : "email",
      type : "email",
      placeholder : "Email",
      errorMessage: "It should be a valid email address",
      label : "Email",
      require: "true"
    },{
      id : 3,
      name : "birthday",
      type : "date",
      placeholder : "Birthday",
      label : "Birthday"
    },{
      id : 4,
      name : "password",
      type : "password",
      placeholder : "Password",
      errorMessage : "password should be 8-12 character",
      label : "Password"
    },{
      id : 5,
      name : "confirmpassword",
      type : "password",
      placeholder : "Confirmpassword",
      pattern : values.password,
      errorMessage : "password don't match",
      label : "Confirmpassword"
    }
    
  ]

  const handleSubmit =(e) =>{
    e.preventDefault();
  };

  const onChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value});
  };

  console.log(values);


  // to see the input detail in form object entries
  // console.log(Object.fromEntries(data.entries()));  

  return (
    <div className="App">    
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
      {input.map((input) => (
       <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
       ))}
       <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
