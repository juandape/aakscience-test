// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../redux/actions';
import Swal from 'sweetalert2';

const initialState = {
  user_type: '',
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password: '',
};

const SignUpForm = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(user));
    setUser(initialState);
    Swal.fire({
      title: 'User signed up successfully!',
      icon: 'success',
      confirmButtonText: 'Close',
    });
  };

  const inputClasses =
    'mt-1 block w-80 rounded border-2 border-gray-200 shadow-sm hover:bg-gray-100 mx-auto p-2';
  const labelClasses = 'block mb-2 ml-16 mt-4 font-bold text-blue-500';
  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto border-4 mt-10 shadow-xl'
    >
      <h2 className='text-2xl font-bold my-6 text-center text-blue-500'>
        Sign Up
      </h2>
      <label htmlFor='user_type' className={labelClasses}>
        User Type:
      </label>
      <select
        id='user_type'
        name='user_type'
        value={user.user_type}
        onChange={handleChange}
        className={inputClasses}
        required
      >
        <option disabled hidden value=''>
          Select User Type
        </option>
        <option value='researcher'>Researcher</option>
        <option value='investor'>Investor</option>
        <option value='institution_staff'>Institution Staff</option>
        <option value='service_provider'>Service Provider</option>
      </select>

      <label htmlFor='first_name' className={labelClasses}>
        First Name:
      </label>
      <input
        id='first_name'
        type='text'
        name='first_name'
        value={user.first_name}
        onChange={handleChange}
        className={inputClasses}
        required
      />

      <label htmlFor='last_name' className={labelClasses}>
        Last Name:
      </label>
      <input
        id='last_name'
        type='text'
        name='last_name'
        value={user.last_name}
        onChange={handleChange}
        className={inputClasses}
        required
      />

      <label htmlFor='username' className={labelClasses}>
        Username:
      </label>
      <input
        id='username'
        type='text'
        name='username'
        value={user.username}
        onChange={handleChange}
        className={inputClasses}
        required
      />

      <label htmlFor='email' className={labelClasses}>
        Email:
      </label>
      <input
        id='email'
        type='email'
        name='email'
        value={user.email}
        onChange={handleChange}
        className={inputClasses}
        required
      />

      <label htmlFor='password' className={labelClasses}>
        Password:
      </label>
      <input
        id='password'
        type='password'
        name='password'
        value={user.password}
        onChange={handleChange}
        className={inputClasses}
        required
      />

      <button
        type='submit'
        className=' bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 my-6 mx-auto block'
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
