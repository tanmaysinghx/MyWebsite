//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Project Trainee",
    cardImage: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Logo_of_Titan_Company%2C_May_2018.svg/250px-Logo_of_Titan_Company%2C_May_2018.svg.png",
    place: "Titan Company Limited",
    time: "(June 2019 - July 2019)",
    desp: "<li>Creating Java Based ChatBot</li> <li>Creating Survey Website for Boutiques of Tanishq Jewellery.</li> "
  },
 
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");



const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="title">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="col-sm-6">
      <div class="card card2">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p>${time}</p>
        </div>
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2">${desp}</div>
        </ul>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
