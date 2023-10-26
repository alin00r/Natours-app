/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

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
