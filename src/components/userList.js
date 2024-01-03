export default function UserList(props) {
  return (
    <div className="list">
      {props.value.activeList.map((item, index) => {
        if (index < 1000) {
          return (
            <div
              key={item.id}
              className="user"
              onClick={() => props.value.onSelectUser(item)}
            >
              {item.first_name} {item.last_name}
            </div>
          );
        }
      })}
    </div>
  );
}
