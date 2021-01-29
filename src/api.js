const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: async (keyword) => {
    const res = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
    if (res.ok) {
      return res.json();
    }
    else {
      return { data: [] };
    }
  },
  random: async () => {
    const res = await fetch(`${API_ENDPOINT}/api/cats/random50`);
    if (res.ok) {
      return res.json();
    }
    else {
      return { data: [] };
    }
  },
  fetchCatInfo: async (id) => {
    const res = await fetch(`${API_ENDPOINT}/api/cats/${id}`);
    return res.json();
  },
};
