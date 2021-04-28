AOS.init();
// MOOCs Cards
const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Project: Creating Your First C++ Application",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/browse/data-science",
  },
  {
    title: "HTML and CSS",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/cryptography-for-beginners/",
  },
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "Introduction to Computer Vision ",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "Python GUI and Gaming 101 with Tkinter",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/bootstrap-4-tutorials/",
  },
  {
    title: "NodeJS, Express and MongoDB",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/server-side-nodejs",
  },
  {
    title: "Python Progrmming",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  },
  {
    title: "React JS",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  },
];

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage,moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 " data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body p-1">
                    <h6 class="mt-0 py-2 text-center font-weight-bold" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);