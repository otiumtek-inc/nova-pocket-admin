export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.access) {
    return { Authorization: `Bearer ${user.access}` };
  } else {
    return {};
  }
};

export const refreshData = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.refresh) {
    return { refresh: user.refresh };
  } else {
    return null;
  }
};
