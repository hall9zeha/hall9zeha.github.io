import { projects}  from './dummySource.js';
let slideIndex = 1

function plusSlides(n) {
  showSlides(slideIndex += n);
  }
  function currentSlide(n) {
  showSlides(slideIndex = n);
}
  function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
  

const indicator = document.querySelector(".tabbar .indicator");

  function moveIndicator(el) {
    indicator.style.left  = el.offsetLeft + "px";
    indicator.style.width = el.clientWidth + "px";
  }

  const activeTab = document.querySelector(".tabbar li.active");
  if (activeTab) moveIndicator(activeTab);
  const tabs = document.querySelectorAll(".tabbar li")
  const projectsGrid = document.querySelector(".projects-grid");

    getProjects(projects);
    fetchCurrentYear();
    showSlides(slideIndex)
    
    tabs.forEach(tab=>{
            tab.addEventListener("click",function(){
                
                
                tabs.forEach(t=>t.classList.remove("active"))
                tab.classList.add("active")
                moveIndicator(tab)
                const category = tab.getAttribute("data-filter")

                const id=parseInt(tab.getAttribute("data-id"),0)
                const filtered = filterProjectsById(id)
                getProjects(filtered)

            })
        }

    )
    
    function filterProjectsById(id) {
    if (id === 0) {
      return projects;
    } else {
      return projects.filter(p => p.platform === id);
    }
    }
    function fetchCurrentYear(){
      const year = new Date().getFullYear();
      document.getElementById('year').textContent = year
    }
   
    function getProjects(projects){      
      
        projectsGrid.innerHTML="";
        projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        const techStackHTML = project.techStack.map(tech =>{        
        
          return `<a  class ="tech-button">
              <span class="tech-button-text">${tech.label}</span>
          </a>`
        }).join("");
       
        const actionsHTML = project.actions.map(action =>{
        
          let icon ="";
          switch(action.label.toLowerCase()){
            case "github":
              icon="code";
              break;
            case "play store":
            case "playstore":
            case "store":
              icon="shop"
              break;
            case "demo":
            case "deploy":
              icon="launch";
              break;
            default:
              icon="link";
          }
        
          return `<a href="${action.url}" class ="action-button" target="_blank">
              <span class="material-symbols-outlined">${icon}</span>
              <span class="action-button-text">${action.label}</span>
          </a>`
        }).join("");
        
         const isGif = project.screenshots[0].imageUrl.toLowerCase().endsWith(".gif");
        const imageClass = isGif ? "image-container-gif" : "image-container";

        card.innerHTML = `
           <div class="text-content">
                <h2>${project.name}</h2>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${techStackHTML}
                </div>
                <div class="actions-buttons">
                    ${actionsHTML}
                </div>
            </div>
            
            <div class="${imageClass}">
            ${setImagesOfProject(project)}           
            </div>`
        ;

          
        projectsGrid.appendChild(card);
        addEventListeners()
        
        
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    }

    function setImagesOfProject(project){
      // Si tenemos solo una imagen
      if(project.screenshots.length==1){
          return  `<img src="${project.screenshots[0].imageUrl}" alt="${project.screenshots[0].name}">`
      }
      // Si tenemos varias imágenes para un proyecto lo convertimos en un slideshow
      else if (project.screenshots.length >1){
             
        const images = project.screenshots.map(screen =>{
          return `<div class="mySlides fade">
             <img src="${screen.imageUrl}" alt="${screen.name}">
          </div>`
        }).join("");

        const prevAndNext = `
        <a class="prev" >&#10094;</a>
        <a class="next" >&#10095;</a> `
        
        const dots =  project.screenshots.map((screen, index) =>{
          return `<span class="dot"></span>`
        }).join("");

        const slideContainer = `<div class="slideshow-container">
        ${images}
        ${prevAndNext}
        <div style="text-align:center">
        ${dots}
        </div>
        </div>`;
        return slideContainer
        
      }
      
      return ""
      
    }
   function addEventListeners(){
      const prevButton = document.querySelectorAll('.prev');
    const nextButton = document.querySelectorAll('.next');
    
    prevButton.forEach(button => {
        button.addEventListener('click', () => plusSlides(-1));
    });

    nextButton.forEach(button => {
        button.addEventListener('click', () => plusSlides(1));
    });
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });
   }
  
 
});


