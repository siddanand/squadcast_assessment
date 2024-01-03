import "./App.css";
import { useState, useRef } from "react";
import Users from "./data_models/users.json";


// would have implemented debouncing if the data was given through api to limit to number of api calls on search
// would have given a background to the text with @ in it
// would have looked into more edge cases like: if @ is removed the list should also disappear
// would have used reducers for state managemnet of the list
// would have used better naming convention

function App() {
  const [activeList, setActiveList] = useState(Users);
  const [showList, setShowList] = useState(false);
  const inputRef = useRef();

  const onTextType = (text) => {
    let n = text.split("@");
    if (
      text.split(" ")[text.split(" ").length - 1][0] == "@" &&
      showList == false
    ) {
      setShowList(true);
    }
    if (showList == true) {
      let list = Users.filter((i) => {
        let str = `${i.first_name} ${i.last_name}`.toLowerCase();
        if (str.includes(n[n.length - 1].toLowerCase())) {
          return i;
        }
      });
      setActiveList([...list]);
    }
  };
  const onSelectUser = (item) => {
    setShowList(false);
    setActiveList(Users);
    let n = inputRef.current.value.split("@");
    let text = `${n[0]}`;
    n.map((item, index) => {
      if (index < n.length - 1 && index > 0) text = text + `@${item}`;
    });
    inputRef.current.value = `${text}@${item.first_name} ${item.last_name}`;
  };
  return (
    <div className="App">
      <input
        ref={inputRef}
        style={{ width: "100%" }}
        type="text"
        placeholder="Mention"
        onChange={(e) => onTextType(e.target.value)}
      />{" "}
      {showList ? (
        <div
          style={{
            border: "1px solid black",
            maxWidth: "200px",
            width: "auto",
            marginTop: "10px",
            padding: "5px",
            overflowX: "scroll",
            overflowY: "scroll",
            maxHeight: "300px",
          }}
        >
          {activeList.map((item, index) => {
            if (index < 1000) {
              return (
                <div
                  key={item.id}
                  className="user"
                  onClick={() => onSelectUser(item)}
                >
                  {item.first_name} {item.last_name}
                </div>
              );
            }
          })}
        </div>
      ) : null}
    </div>
  );
}

export default App;
