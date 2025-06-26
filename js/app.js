import { projects}  from './dummySource.js';

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

    getProjects(projects)
    
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

   
    function getProjects(projects){      
      
        projectsGrid.innerHTML="";
        projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
       
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
          </a>
        `}).join("");
        
         const isGif = project.imageUrl.toLowerCase().endsWith(".gif");
        const imageClass = isGif ? "image-container-gif" : "image-container";

        card.innerHTML = `
           <div class="text-content">
                <h2>${project.name}</h2>
                <p>${project.description}</p>
                <div class="actions-buttons">
                    ${actionsHTML}
                </div>
            </div>
            
            <div class="${imageClass}">
            <img src="${project.imageUrl}" alt="${project.name}">
            </div>
        `;


        projectsGrid.appendChild(card);

    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    }
   
});

