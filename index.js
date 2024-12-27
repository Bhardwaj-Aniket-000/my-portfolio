const showAboutPage = document.querySelector(".about");
const aboutBtn = document.querySelector(".aboutBtn ");
const aboutClosebtn = document.querySelector(".aboutClosebtn ");

aboutBtn.addEventListener("click", (e) => {
  showAboutPage.style.display = "block";
});
aboutClosebtn.addEventListener("click", (e) => {
  showAboutPage.style.display = "none";
});

const username = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const btn = document.getElementById("submit-btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    name: username.value,
    userEmail: email.value,
    userMessage: message.value,
  };
  fetch("http://newspulse-server.vercel.app/api/v3/portfoliofeeds", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
