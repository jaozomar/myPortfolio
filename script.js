document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".projects figure");
    let i = 0;

    function showFirstProject() {
        if(projects.length > 0) {
            projects[0].classList.add("active");
        }
    }

    showFirstProject();
    const myNav = document.querySelector('.myNav');
    const mobileMenu = document.querySelector('#mobile');
    const menu = document.querySelector('.navMenu');

    // Make sure the consts exist
    if(myNav && mobileMenu && menu) {
        mobileMenu.addEventListener('click', function() { 
            myNav.classList.toggle('goDark');
            menu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

        function displayProject(i) {
            // Remove any displayed images
            projects.forEach(x => {x.classList.remove("active");});
        
            // Add image only for the current i
            projects[i].classList.add("active");
        }
        
        window.otherProject = function() {
            console.log("This is i right at click: "+i);
            i++;

            // if i is too large, reset to 0
            if(i >= projects.length) {
                i=0;
            }
            console.log("This is i after click: "+i);
            displayProject(i);
        }
    
    const overlays = document.querySelectorAll('.overlay');
    for(let j=0; j<overlays.length; j++) {
        overlays[j].addEventListener('click', function() { 
            overlays[j].classList.toggle('active');
        });
    }
});


