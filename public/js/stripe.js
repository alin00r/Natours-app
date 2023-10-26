import axios from 'axios';
import { showAlert } from './alerts';
export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe(
      'pk_test_51NXWiqHHfCzf7X9YwRPStsF3oNWR7nUnatCYSSrZWsHlZUDkelvJU27vlMZ70nIOv3pAhwPA23SlX6bpEpgSDQU400kNqHPkII',
    );

    // Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    // console.log(err);
    showAlert('error', err);
  }
};
