import Axios from "axios";
export const Add = async function(user) {
  const { data } = await Axios.post(
    "https://e-commerce-2020.herokuapp.com/users/register",
    user
  );
  console.log(data);
  return data;
};
export const LogIn = async function(user) {
  const { data } = await Axios.post(
    "https://e-commerce-2020.herokuapp.com/users/login",
    user
  );
  // console.log(data.token);
  // console.log(token);

  return data;
};
