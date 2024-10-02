/*
Author: Ryan Angaangan
Student ID: 000783037
Date: October 1, 2024
Course: CPRG 210 - Web Application Development
Assignment: HTML, CSS, JavaScript
*/

// Create array with image file paths
const imgPath = [
    "./img/willemstad.jpg",
    "./img/london.jpg",
    "./img/tahiti.jpg",
    "./img/cancun.jpg",
    "./img/easter.jpg",
    "./img/stockholm.jpg"
];

// Create array with image descriptions
const imgDesc = [
    "Experience the vibrant sights of Curaçao's capital, rich with Dutch heritage!",
    "London, a city with a long and storied history!",
    "Take in the calm breezes on Tahiti's warm and sandy beaches!",
    "Enjoy some of Mexico's best beachside resorts in Cancún!",
    "See the mystifying sights first-hand on Easter Island!",
    "Sit back and relax while you enjoy a traditional Swedish sauna in Stockholm!"
];

// Create arrray with a link for each image
const imgLinks = [
    "https://www.curacao.com/en/",
    "https://www.visitlondon.com/",
    "https://www.tahiti.com/island/tahiti",
    "https://cancun.gob.mx/home",
    "https://www.chile.travel/en/where-to-go/macrozone/rapa-nui/",
    "https://www.visitstockholm.com/"
];

// Iterates through the imgPath array forr the length of the array 
for (let i = 0; i < imgPath.length; i++) {
    let path = imgPath[i];
    let desc = imgDesc[i];
    let link = imgLinks[i];
    // Declare parent window redirect function to be called later for popup redirects
    function redirectPage() {
        window.open(`${link}`, "_parent");
    }

    // Modifies each element on the main page with a "card-i" ID
    // Sets the image path to the value stored in the imgPath array
    document.getElementById("card-" + i)
        .setAttribute("style", `background-image: url(${path})`);

    // Add mouseover listeners for each image to display the description
    // Inserts the description into the corresponding div tag for each image description
    // When moused over from the value stored in the imgDesc array
    document.querySelector("#card-" + i)
        .addEventListener("mouseover", function() {
            document.getElementById(`card-${i}-desc`).innerHTML=`${desc}`;
    });

    // Add an onclick listener for each image
    document.querySelector("#card-" + i)
        .addEventListener("click", function() {

            //When the image is clicked a popup window will be opened with a timer of 5 seconds
            let popup = window.open("popup.html", "", "height=350, width=350");
            popup.setTimeout("window.close()", 5000);
            let mainTimer = setTimeout(redirectPage, 5000);
            // Waits for the popup window to be fully loaded so elements can be selected modified
            popup.onload = function() {
                let redirLink = this.document.getElementById("pop-link");
                let cancelRedir = this.document.getElementById("cancel-button"); 
                redirLink.setAttribute("href", `${link}`);

                // I tried getting the link to open in the parent window of the popup using the target attribute
                // But I couldn't get it to work
                // redirLink.setAttribute("target", "_parent");
                // Using an event listener to open the page in the main windowm, close the popup and clear the automatic redirect timer
                redirLink.addEventListener("click", function() {
                    redirectPage();
                    popup.close();
                    clearTimeout(mainTimer);
                });

                // Click event listener lets the user clear the 5 second timer to stop the automatic redirect
                cancelRedir.addEventListener("click", function() {
                    clearTimeout(mainTimer);
                });
            }
    });
};

