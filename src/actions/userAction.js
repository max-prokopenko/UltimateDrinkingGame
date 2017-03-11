export function userLogin() {
	return {
		type: "USER_LOGIN_FULFILLED",
		payload: {
			id: 1,
			name: "Max",
		}
	}
}