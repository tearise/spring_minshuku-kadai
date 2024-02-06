const stripe = Stripe('pk_test_51Oe2hTFmJHdqeM8wAtX5y5OQ5gBdrjmRoqJZV6Tg9yKHKxeapp9vEYyVjnMvAF3vlrG85sAoAxcI4udKUe7e1ztH00M0r5L21V');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});