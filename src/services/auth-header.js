export const authHeader = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (auth && auth.access) {
    return { Authorization: `Bearer ${auth.access}` };
  } else {
    return {};
  }
};

export const refreshData = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (auth && auth.refresh) {
    return { refresh: auth.refresh };
  } else {
    return null;
  }
};
