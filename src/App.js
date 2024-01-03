import "./App.css";
import { useState, useRef } from "react";
import Users from "./data_models/users.json";
import { userSelect } from "./helpers/userSelect";
import { searchUser } from "./helpers/searchUser";
import UserList from "./components/userList";
import InputField from "./components/inputField";

function App() {
  const [activeList, setActiveList] = useState(Users);
  const [showList, setShowList] = useState(false);
  const inputRef = useRef();

  const onTextType = (text) => {
    let n = text.split("@");
    if (text.split(" ")[text.split(" ").length - 1][0] == "@" && !showList) {
      setShowList(true);
    }
    if (showList) {
      setActiveList([...searchUser(n)]);
    }
  };
  const onSelectUser = (item) => {
    setShowList(false);
    setActiveList(Users);
    userSelect(inputRef, item);
  };
  return (
    <div className="App">
      <InputField value={{inputRef, onTextType}}/>
      {showList ? <UserList value={{ activeList, onSelectUser }} /> : null}
    </div>
  );
}

export default App;
