let hamburger = document.getElementsByClassName('hamburger');

document.querySelector('.hamburger').addEventListener("click", showToggle);

function showToggle() {
    let content = document.querySelector('.content');
    console.log(content);
    if (content.style.display === "flex") {
        content.style.display = "none";
    } else {
        content.style.display = "flex";
    }
  }
  var link_project = document.querySelector('#linkProject');
  if (link_project) {
    link_project.addEventListener("click", redirectProject);
  }

  function redirectProject() {
    window.open("https://github.com/Oussous-Abdelhadi");
  }


  // MODAL *******************************************************

//  BLOG
  var detailProject = document.querySelector('#detailBlog');
  detailProject.addEventListener("click", showModalBlog);
  
  function showModalBlog() {
    let modal = document.querySelector('.modalBlog');
    modal.style.display = "flex";
}

document.querySelector('#CloseBlogModal').addEventListener("click", closeModalBlog);
function closeModalBlog() {
  let modal = document.querySelector('.modalBlog');
  modal.style.display = "none";
}


//  NASA
var detailProject2 = document.querySelector('#detailAppNasa');
detailProject2.addEventListener("click", showAppNasa);

function showAppNasa() {
  let modal = document.querySelector('.modalAppNasa');
  modal.style.display = "flex";
}


  document.querySelector('#CloseAppNasaModal').addEventListener("click", closeModal);
  function closeModal() {
    let modal = document.querySelector('.modalAppNasa');
    modal.style.display = "none";
  }

//  SAINBIOSE

var detailProject3 = document.querySelector('#detailSainbiose');
detailProject3.addEventListener("click", showSainbiose);

function showSainbiose() {
  let modal = document.querySelector('.modalSainbiose');
  modal.style.display = "flex";
}


  document.querySelector('#CloseSainbioseModal').addEventListener("click", closeModalSainbiose);
  function closeModalSainbiose() {
    let modal = document.querySelector('.modalSainbiose');
    modal.style.display = "none";
  }