import Users from "../data_models/users.json";

export const searchUser =(n)=>{
  return Users.filter((i) => {
    let str = `${i.first_name} ${i.last_name}`.toLowerCase();
    if (str.includes(n[n.length - 1].toLowerCase())) {
      return i;
    }
  });
}