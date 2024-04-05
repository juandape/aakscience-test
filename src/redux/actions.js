import axios from 'axios';

export const signUpUser = (user) => async (dispatch) => {
 try {
    const response = await axios.post('https://django.aakscience.com/signup/', user);
    console.log('User signed up:', response.data);
    dispatch({
      type: 'SIGN_UP_USER',
      payload: response.data,
    });
 } catch (error) {
    console.error('Error signing up user:', error);
 }
};

