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
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        User Type:
        <select name='user_type' value={user.user_type} onChange={handleChange}>
          <option disabled hidden value=''>
            Select User Type
          </option>
          <option value='researcher'>Researcher</option>
          <option value='investor'>Investor</option>
          <option value='institution_staff'>Institution Staff</option>
          <option value='service_provider'>Service Provider</option>
        </select>
      </label>
      <label>
        First Name:
        <input
          type='text'
          name='first_name'
          value={user.first_name}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type='text'
          name='last_name'
          value={user.last_name}
          onChange={handleChange}
        />
      </label>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={user.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type='email'
          name='email'
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}
        />
      </label>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
