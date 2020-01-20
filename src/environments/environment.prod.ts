export const environment = {
  production: true,
  
  CONSTANTS: {
		AMEX_REGEX: /^3[47][0-9]{13}$/,
		VISA_REGEX: /^4[0-9]{12}(?:[0-9]{3})?$/,
		MASTERCARD_REGEX: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
		DINNERS_CLUB_REGEX: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
		DISCOVER_REGEX: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
		JCB_REGEX: /^(?:2131|1800|35\d{3})\d{11}$/,
		EMAIL_REGEX: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?/
	}
};
