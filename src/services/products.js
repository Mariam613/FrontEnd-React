import Axios from "axios";
export const GetAll = async function(search, filter, sort, pageNo, size) {
  const { data } = await Axios.get(
    `https://e-commerce-2020.herokuapp.com/products?search=${search}&category=${filter}&sortBy=${sort}&pageNo=${pageNo}&size=${size}`
  );
  console.log(data);
  return data;
};
export const GetById = async function(id) {
  const { data } = await Axios.get(
    `https://e-commerce-2020.herokuapp.com/products/${id}`
  );
  // console.log(data);
  return data;
};
export const Add = async function(item, token) {
  const { data } = await Axios.post(
    "https://e-commerce-2020.herokuapp.com/products/Add-product",
    item,
    {
      headers: {
        Authorization: token
      }
    }
  );
  // console.log(data);
  return data;
};
export const Update = async function(item, id, token) {
  const { data } = await Axios.patch(
    `https://e-commerce-2020.herokuapp.com/products/${id}`,
    item,
    {
      headers: {
        Authorization: token
      }
    }
  );
  return data;
  //console.log(students);
};

export const Delete = async function(id, token) {
  const { data } = await Axios.delete(
    `https://e-commerce-2020.herokuapp.com/products/${id}`,
    {
      headers: {
        Authorization: token
      }
    }
  );
};
