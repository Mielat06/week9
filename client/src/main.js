console.log("Hello Geust!");
const myGeustForm = document.getElementById("guest-form");
// console.log(myGeustForm);

myGeustForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) { 
  event.preventDefault();

  const data = new FormData(myGeustForm);
  const formValues = Object.fromEntries(data);

  console.log(formValues);
fetch("http://localhost:8080/books", {

    method: "POST", 
    body: JSON.stringify(formValues), 
    headers: {
      "Content-Type": "application/json",
    }, 
  });
}