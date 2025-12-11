import { projects}  from './dummySource.js';

const slideIndices = [];

function setSlideIndexForProject(projectIndex, newIndex) {
    slideIndices[projectIndex] = newIndex;
}
function getSlideIndexForProject(projectIndex) {
    if (slideIndices[projectIndex] === undefined) {
        // Si no hay un índice almacenado, se inicializa en 0
        slideIndices[projectIndex] = 0;
    }
    return slideIndices[projectIndex];
}

function plusSlides(n, projectIndex) {
   
    let slideIndex = getSlideIndexForProject(projectIndex);
    
    slideIndex += n;    
    console.log(" after plus slide index", slideIndex)
    showSlides(slideIndex, projectIndex);
  }
  function currentSlide(n, projectIndex) {
  
    showSlides(n, projectIndex);
}
  function showSlides(n, projectIndex) {
 
  let i;
    const slides = document.querySelectorAll(`.project-card[data-project-index="${projectIndex}"] .slideshow-container  .mySlides`);
    const dots = document.querySelectorAll(`.project-card[data-project-index="${projectIndex}"] .slideshow-container  .dot`);

     if(slides.length>1){
    // Obtener el índice actual del proyecto
    let slideIndex = getSlideIndexForProject(projectIndex);

    if (n > slides.length-1) { slideIndex = 0; }
    else if (n < 0) { slideIndex = slides.length-1; }
    else{slideIndex = n} 
    // Actualizar el índice de la diapositiva para este proyecto
    setSlideIndexForProject(projectIndex, slideIndex);

    // Ocultar todas las imágenes
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Desactivar todos los puntos
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Mostrar la imagen activa
    slides[slideIndex].style.display = "block";

    // Activar el punto correspondiente
    dots[slideIndex].classList.add("active");
  }
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
    slideIndices.forEach((value,index)=>{

        showSlides(value, index)
    })   
    tabs.forEach(tab=>{
            tab.addEventListener("click",function(){
                
                
                tabs.forEach(t=>t.classList.remove("active"))
                tab.classList.add("active")
                moveIndicator(tab)
                const category = tab.getAttribute("data-filter")

                const id=parseInt(tab.getAttribute("data-id"),0)
                const filtered = filterProjectsById(id)
                getProjects(filtered)
                 slideIndices.forEach((value,index)=>{
                      showSlides(value, index)
                })   

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
        projects.forEach((project, projectIndex) => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.setAttribute('data-project-index', projectIndex);       
        
        
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
            ${setImagesOfProject(project,projectIndex)}           
            </div>`
        ;

          
        projectsGrid.appendChild(card);
       if(project.screenshots.length > 1) {
          const imageContainers = document.querySelectorAll('.image-container, .image-container-gif');;
          console.log("slide containers count", project.screenshots.length)
           imageContainers.forEach((container, index) => {
                addEventListeners(container);
          });        
        }   
        
    });
   
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    }

    function setImagesOfProject(project, projectIndex){
      // Si tenemos solo una imagen
      if(project.screenshots.length==1){
          return  `<img src="${project.screenshots[0].imageUrl}" alt="${project.screenshots[0].name}">`
      }
      // Si tenemos varias imágenes para un proyecto lo convertimos en un slideshow
      else if (project.screenshots.length >1){
        const firstImageIndex =0
        setSlideIndexForProject(projectIndex, firstImageIndex)
        
        const images = project.screenshots.map(screen =>{
          return `<div class="mySlides fade">
             <img src="${screen.imageUrl}" alt="${screen.name}">
          </div>`
        }).join("");

        const prevAndNext = `
        <a class="prev" data-project-index="${projectIndex}" >&#10094;</a>
        <a class="next" data-project-index="${projectIndex}">&#10095;</a> `
        
        const dots =  project.screenshots.map((screen, index) =>{
          return `<span class="dot" data-project-index="${projectIndex}"></span>`
        }).join("");

        const slideContainer = `<div class="slideshow-container"  data-project-index="${projectIndex}">
        ${images}
        ${prevAndNext}
        <div class="dot-container" style="text-align:center">
        ${dots}
        </div>
        </div>`;
        return slideContainer
        
      }
    
      return ""
      
    }
   
  function addEventListeners(container) {
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');
    if (prevButton) {
        prevButton.removeEventListener('click', handlePrevClick);
        prevButton.addEventListener('click', handlePrevClick);
    }

    if (nextButton) {
        nextButton.removeEventListener('click', handleNextClick);
        nextButton.addEventListener('click', handleNextClick);
    }

    // Dots
    const dots = container.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.removeEventListener('click', handleDotClick);
        dot.addEventListener('click', (event) => handleDotClick(event, i));
    });
}

function handlePrevClick(event) {
    const projectIndex = event.target.getAttribute('data-project-index');
    plusSlides(-1, projectIndex);
}


function handleNextClick(event) {
    const projectIndex = event.target.getAttribute('data-project-index');
    plusSlides(1, projectIndex);
}

function handleDotClick(event, dotIndex) {
    const projectIndex = event.target.getAttribute('data-project-index');
    currentSlide(dotIndex, projectIndex);
    console.log("current dot index ->", dotIndex);
}
 
});


