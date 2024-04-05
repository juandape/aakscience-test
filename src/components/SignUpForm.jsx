import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../redux/actions';

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
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
      <h2 className='text-xl font-bold mb-4'>Sign Up</h2>
      <label className='block mb-2'>
        User Type:
        <select
          name='user_type'
          value={user.user_type}
          onChange={handleChange}
          className='mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
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
      </label>
      <label className='block mb-2'>
        First Name:
        <input
          type='text'
          name='first_name'
          value={user.first_name}
          onChange={handleChange}
          className='mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
          required
        />
      </label>
      <label className='block mb-2'>
        Last Name:
        <input
          type='text'
          name='last_name'
          value={user.last_name}
          onChange={handleChange}
          className='mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
          required
        />
      </label>
      <label className='block mb-2'>
        Username:
        <input
          type='text'
          name='username'
          value={user.username}
          onChange={handleChange}
          className='mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
          required
        />
      </label>
      <label className='block mb-2'>
        Email:
        <input
          type='email'
          name='email'
          value={user.email}
          onChange={handleChange}
          className='mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
          required
        />
      </label>
      <label className='block mb-4'>
        Password:
        <input
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}
          className='mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
          required
        />
      </label>
      <button
        type='submit'
        className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
