import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL;
export const PLAYER = 'api/players';

export function getPlayer(email, password) {
  return axios.get(`${API_URL}/${PLAYER}`);
}

export function getPlayerById(id){
    return axios.get(`${API_URL}/${PLAYER}/${id}`);
}

export function getPlayerByAffiliate(id){
    return axios.get(`${API_URL}/${PLAYER}/affiliate/${id}`);
}

export function addPlayer(player) {
    return axios.post(`${API_URL}/${PLAYER}/admin`, { player });
}

export function updatePlayer(player){
    return axios.patch(`${API_URL}/${PLAYER}`, { player });
}

export function deletePlayer(id){
    return axios.delete(`${API_URL}/${PLAYER}/${id}`);
}
