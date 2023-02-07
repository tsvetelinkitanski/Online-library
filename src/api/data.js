import * as api from "./api.js";
const endpoints = {
  allCatalogs: "/data/books?sortBy=_createdOn%20desc",
  details: "/data/books/",
  onDelete: "/data/books/",
  update: "/data/books/",
  create: "/data/books",
  myBook: (userId) =>
    `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};


export const delBook = (id, token) => {
  return fetch(`http://localhost:3030/data/books/${id}`, {
    method: 'delete',
    headers: {
      'X-Authorization': token
    }
  })
    .then(res => res.json())
};

export const addBookService = (data, token) => {
  return fetch('http://localhost:3030/data/books', {
    method: 'post',
    headers: {
      'X-Authorization': token
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
}

export const updateBook = (data, id, token) => {
  return fetch(`http://localhost:3030/data/books/${id}`, {
    method: 'put',
    headers: {
      'X-Authorization': token
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
}