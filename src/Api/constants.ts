const isDev = false;

const HOST = isDev ? "http://" : "https://";
const BASE = isDev ? "localhost:3000" : "note-server-fbej.onrender.com";

const API_BASE = `${HOST}${BASE}`;

const BASE_URL = "extension/v1";

const API_BASE_URL = `${API_BASE}/${BASE_URL}`;

export const URLS = {
  fetchItems: `${API_BASE_URL}/fetch`,
  deleteAllItems: `${API_BASE_URL}/deleteAll`,
  saveItem: `${API_BASE_URL}/saveItem`,
  webSocket: `wss://${BASE}`,
};
