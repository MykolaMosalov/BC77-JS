const END_POINT = 'bc68-students';
axios.defaults.baseURL = 'https://64c770650a25021fde927baf.mockapi.io/';

//GET
export async function getStudents() {
  //   return fetch(`${BASE_URL}${END_POINT}`, options).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     return response.json();
  //   });
  const res = await axios.get(`${END_POINT}`);
  return res.data;
}
// getStudents().then(console.log);

async function getStudentById(id) {
  //   return fetch(`${BASE_URL}${END_POINT}/${id}`, options).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     return response.json();
  //   });
  const res = await axios.get(`${END_POINT}/${id}`);
  return res.data;
}

// getStudentById(2).then(console.log);

// POST
const student = {
  firstName: 'Sister',
  lastName: 'Miller',
  country: 'Ukraine',
  age: 35,
  city: 'Lviv',
};
export async function addStudent(student) {
  // return fetch(`${BASE_URL}${END_POINT}`, {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json',
  //   },
  //   body: JSON.stringify(student),
  // }).then((response) => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }
  //   return response.json();
  // });
  const res = await axios.post(`${END_POINT}`, student);
  return res.data;
}

// addStudent(student).then(console.log);

async function updateStudentById(id, student) {
  //   return fetch(`${BASE_URL}${END_POINT}/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(student),
  //   }).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     return response.json();
  //   });
  const res = await axios.put(`${END_POINT}/${id}`, student);
  return res.data;
}

// updateStudentById(1, { firstName: 'Mango' }).then(console.log);

// DELETE
export async function deleteStudentById(id) {
  //   return fetch(`${BASE_URL}${END_POINT}/${id}`, {
  //     method: "DELETE",
  //   }).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     return response.json();
  //   });
  const res = await axios.delete(`${END_POINT}/${id}`);
  return res.data;
}

// deleteStudentById(1).then(console.log);
