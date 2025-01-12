document.addEventListener("DOMContentLoaded", () => {
  fetchComments();
});

const form = document.querySelector("#commentsForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    firstname: document.getElementById("firstname").value,
    comment: document.getElementById("comment").value,
    rating: document.getElementById("rating").value,
  };
  console.log(formData);

  function fetchComments() {
    fetch("http://localhost:5174/comments")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched comments:", data);
        const tableBody = document.querySelector("#commentsTableBody");
        tableBody.innerHTML = "";
        data.forEach((comment) => appendToTable(comment));
      })
      .catch((error) => console.log("Error fetching comments:", error));
  }

  fetch("http://localhost:5174/comments", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      console.log("Response Status:", response.status);
      if (response.ok) {
        console.log("Data sent");
        form.reset();
        fetchComments();
      }
    })
    .catch((error) => {
      console.error("Error posting comment:", error);
    });
});

function appendToTable(data) {
  console.log("Appending to table:", data);
  const tableBody = document.querySelector("#commentsTableBody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
      <td class="left">${data.firstname}</td>
      <td class="center">${data.comment}</td>
      <td class="right">${data.rating}</td>
    `;

  tableBody.appendChild(newRow);
}
