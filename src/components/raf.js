<form onSubmit={handleSubmit}>
      <FormInput name= "username" placeholder ="username" />
      {/* <FormInput name= "username" placeholder ="username" setUserName={setUserName}/> */}
      <FormInput name= "fullname" placeholder ="full name"/>
      <FormInput name= "password" placeholder ="password"/>
      <button type="submit">Submit</button>
      </form>


const onChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value})
  }