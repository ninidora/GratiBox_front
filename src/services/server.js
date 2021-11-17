import axios from "axios";

const BASE_URL = "http://localhost:4000";

function registration(body){
	return axios.post(`${BASE_URL}/signup`, body);
}

function signInUser(body){
	return axios.post(`${BASE_URL}/login`, body);
}

export { registration, signInUser };