/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "Java ChatBot",
    cardImage: "https://miro.medium.com/max/800/1*4QemAP2IzD_8ct2f3kySvg.jpeg",
    description:
      "A basic chatbot using Java.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Python Snake Game",
    cardImage: "https://i.stack.imgur.com/sBEuN.png",
    description:
      "A snake game using Python Language.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Amazon Clone",
    cardImage: "data:image/jpeg;base64,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",
    description:
      "A Full Stack Amazon Clone using React JS Framework and Material-UI",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Real Time Chat App",
    cardImage: "data:image/jpeg;base64,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",
    description:
      "Using React Js, Node Js and Firebase. / Ongoing Project.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Netflix Clone",
    cardImage: "",
    description:
      "Ongoing Project using MERN Development.",
    Previewlink: "",
    Githublink: "",
  },
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
            <h1 class="title"><a href="#">${title}</a></h1>
            <p class="text">${description}</p>
            <ul class="menu-content">
              <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
              <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
