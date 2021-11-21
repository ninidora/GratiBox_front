import axios from "axios";

const BASE_URL = "http://localhost:4000";

function registration(body){
	return axios.post(`${BASE_URL}/signup`, body);
}

function signInUser(body){
	return axios.post(`${BASE_URL}/login`, body);
}

function getAdressData(cep){
	return axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`);
}

export { registration, signInUser, getAdressData };