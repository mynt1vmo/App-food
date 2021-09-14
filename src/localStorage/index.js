const localStore = (() => {
  const key = "cart";

  function set(value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function remove() {
    localStorage.removeItem(key);
  }

  function get() {
    const data = JSON.parse(localStorage.getItem(key)) ?? {};
    return data;
  }
  return {
    set,
    remove,
    get
  };
})();
const localUser = (() => {
  const key = "user";

  function set(value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function remove() {
    localStorage.removeItem(key);
  }

  function get() {
    const data = JSON.parse(localStorage.getItem(key)) ?? "";
    return data;
  }
  return {
    set,
    remove,
    get
  };
})();
export { localStore, localUser };
