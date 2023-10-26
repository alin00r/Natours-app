/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const auth = async (inputData, type) => {
  try {
    const url =
      type === 'login' ? '/api/v1/users/login' : '/api/v1/users/signup';

    const { data } = await axios({
      method: 'POST',
      url,
      data: { ...inputData },
    });

    if (data.status === 'success') {
      showAlert(
        'success',
        `${
          type !== 'login'
            ? 'Welcome to Natours ^_^'
            : 'Logged in successfully :)'
        }`,
      );
      type === 'login'
        ? window.setTimeout(() => {
            location.assign('/');
          }, 1000)
        : window.setTimeout(() => {
            location.assign('/');
          }, 1000);

      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};

export const forgotPass = async (inputData) => {
  try {
    const url = '/api/v1/users/forgotPassword';

    const { data } = await axios({
      method: 'POST',
      url,
      data: { ...inputData },
    });

    if (data.status === 'success') {
      showAlert('success', 'Email Sent !');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};

export const resetPass = async (password, passwordConfirm, token) => {
  try {
    const url = `/api/v1/users/resetPassword/${token}`;

    const { data } = await axios({
      method: 'PATCH',
      url,
      data: { password, passwordConfirm },
    });

    if (data.status === 'success') {
      showAlert('success', 'Password has been changed successfully.');
      window.setTimeout(() => {
        location.assign('/login');
      }, 1500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
