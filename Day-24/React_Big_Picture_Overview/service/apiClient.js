class ApiClient {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1';
    this.defaultHeaders = {
      'Content-Types': 'application/json',
      Accept: 'application/json',
    };
  }

  async customFetch(endpoint, options = {}) {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const headers = { ...this.defaultHeaders, ...options.headers };

      const config = {
        ...options,
        ...headers,
        credentials: 'include',
      };

      console.log(`Fetching:${url}`);
      const response = await fetch(url, config);

      // TODO: Check if response.ok === value

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`API ERROR: `, error);
      throw error;
    }
  }

  // Auth endpoints
  async signup(name, email, password) {
    return this.customFetch('/users/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  }

  async login(email, password) {
    return this.customFetch('/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async getProfile() {
    return this.customFetch('/users/me');
  }
}
