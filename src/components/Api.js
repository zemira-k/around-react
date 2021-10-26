const costumFetch = (url, options) =>
  fetch(url, options).then((res) =>
    res.ok ? res.json() : Promise.reject(res.statusText)
  );

class Api {
  constructor({ baseUrl, options }) {
    this._url = baseUrl;
    this._options = options;
  }

  getInitialCards() {
    return costumFetch(`${this._url}/cards`, {
      headers: this._options,
    });
  }

  getUserInfo() {
    return costumFetch(`${this._url}/users/me`, {
      headers: this._options,
    });
  }
}

export default Api;
