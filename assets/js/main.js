
/** { FOR HEADER ACTIVE } */

const header = document.querySelector("[data-header]");
const menuBtn = document.querySelector(".menu-btn");
const menuClsBtn = document.querySelector(".menu-close-btn");

menuBtn.addEventListener('click' , () => {
    header.classList.toggle('active')
})

menuClsBtn.addEventListener('click' , () => {
    header.classList.remove('active');
})



// FETCHING PIXELS API 

// KmynuSCpXQyFYUstnhoGyT6KS5C0TDFVCW5t03GNA0U

// API's
const accessKey = "KmynuSCpXQyFYUstnhoGyT6KS5C0TDFVCW5t03GNA0U" ;

const formElm = document.querySelector('form')
const inputElm = document.getElementById('search-input')
const searchResults = document.querySelector('.search-results')
const showMore = document.getElementById('show-more-button')

// for users input 
let inputData = "" ;
let page = 1 ;

// async function 
// ... (previous code)

async function searchImages() {
    inputData = inputElm.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json(); // converts into json format

        const results = data.results;

        if (page === 1) {
            searchResults.innerHTML = "";
        }

        // for separating the images in complex results
        results.map((result) => {
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add("search-result");

            const overlay = document.createElement('div')
            overlay.classList.add('overlay')

            const link = document.createElement('a')
            link.href = `https://www.pexels.com/search`
            link.innerHTML = `<ion-icon name="arrow-redo-outline">`


            imageWrapper.style.boxShadow = "none"

            const image = document.createElement('img');
            image.src = result.urls.small;
            image.alt = result.alt_description; // Use "alt" for image alternative text

            image.style.boxShadow = "none"
            image.style.borderRadius = "6px"

            const imageLink = document.createElement('a');
            imageLink.href = result.links.html; 
            imageLink.target = "_blank";

            const tetxBottom = document.createElement('div');
            tetxBottom.classList.add('text-content-btm');
            const newLink = document.createElement('a');
            newLink.innerHTML = `<a href="https://www.pexels.com/search" target="_blank"><ion-icon name="arrow-redo-outline"></ion-icon></a>
            <a href="https://www.pexels.com/search" target="_blank"><ion-icon name="arrow-redo-outline"></ion-icon></a>
             `

             image.addEventListener('click' , () => {
                overlay.style.visibility = "visible"
                overlay.style.opacity = 0.8 ;
                overlay.style.display = "flex"
                overlay.style.alignItems = "center"
                overlay.style.justifyContent = "center"
                
             })

             image.addEventListener('mouseleave' , () => {
                overlay.style.visibility = "hidden"
                overlay.style.opacity = 0
             })



            // const paragraph = document.createElement('p');
            // // Limit the description to a maximum of 20 characters
            // const description = result.name;
            // const limitedDescription = description ;
            // paragraph.textContent = limitedDescription;

            imageWrapper.appendChild(overlay)
            overlay.appendChild(link)

            imageWrapper.appendChild(image);
            // imageLink.appendChild(paragraph); // Append the paragraph to the link
            imageWrapper.appendChild(imageLink);
            // imageWrapper.appendChild(tetxBottom);
            // tetxBottom.appendChild(newDiv);
            // newDiv.appendChild(newLink)
            
            searchResults.appendChild(imageWrapper);




        });

        page++;
        if (page > 1) {
            showMore.style.display = "block";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// ... (remaining code)



formElm.addEventListener('submit' , (event) => {
    event.preventDefault()
    page = 1 
    // calling this function foe search
    searchImages()
})


showMore.addEventListener('click' , () => {

 // calling this function for show more button
    searchImages()
})

// FOR HEADER ACTIVE ON SCROLL 

const $header = document.querySelector("[data-header]");

window.addEventListener('scroll' , () => {
    if(window.scrollY > 20){
        $header.style.boxShadow = " rgba(0, 0, 0, 0.35) 0px 5px 15px"
    }
    else { 
        $header.style.boxShadow = "none"
    }
})