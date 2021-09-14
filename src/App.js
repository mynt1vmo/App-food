import "./App.css";
import { useSelector } from "react-redux";
import { Spin } from "antd";

import Routes from "./routes";
import { localStore, localUser } from "./localStorage";

const data = localStore.get();

if (data) {
  localStore.set(data);
} else {
  localStore.set({});
}
const user = localUser.get();
if (user) {
  localUser.set(user);
} else {
  localUser.set({});
}

function App() {
  const spin = useSelector((state) => state.spin);
  return (
    <Spin size="large" spinning={spin.spinning}>
      <div className="App">
        <Routes />
      </div>{" "}
    </Spin>
  );
}

export default App;
