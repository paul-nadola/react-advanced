import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  const [person, setPerson] = useState({//creating one state
    firstName: '',
    email:"",
    age: ""
  })
  const [people, setPeople] = useState([]);

  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setPerson({...person, [name]: value})
  }
  const handleSubmit =(e) => {
    e.preventDefault()
    if (person.firstName && person.email && person.age) {
      const newPerson = {...person, id:new Date().getTime().toString()}
      setPeople([...people, newPerson])
      setPerson({firstName: '', email: '', age: ''})
      alert(`name : ${person.firstName} of email address ${person.email} and age ${person.age} years
      added successfully, ID generated successfully`)
    }
  }

  return (
    <>
    <h2>multiple inputs</h2>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange = {handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange = {handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange = {handleChange}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, age, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{id}</h4>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
