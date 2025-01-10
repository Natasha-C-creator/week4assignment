const form = document.querySelector("commentsForm");

commentsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(commentsForm);
  console.log(formData);
  const jsObjectPlease = Object.fromEntries(formData);
  console.log(jsObjectPlease);
  fetch("http://localhost:5174/visitorcomments", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ jsObjectPlease }),
  });
  function clearInputField() {
    document.getElementById("myForm").reset();
  }
  
});

//! when you finish, you should replace it with your RENDER server url

// fetch("server url", {
//   method: "GET",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({ formValues }),
// });

//The same way as we fetch the POST route, we also need to fetch the GET route, so we can display the data from the database on the DOM
