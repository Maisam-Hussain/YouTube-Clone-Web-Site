// Targetting navbarOne
var menuIcon = document.querySelector(".imgZero");

// Targetting navbarTwo & navbarThree
var navbarTwo = document.querySelector(".navbarTwo");
var navbarTwoSections2 = document.querySelectorAll(".navbarTwo-sections2");
var navbarThree = document.querySelector(".navbarThree");
var angleRight = document.querySelector(".angleRight");
var angleLeft = document.querySelector(".angleLeft");
// Next button scrolling in the navbarThree for recommended sections
function scrolll()
{
    var left = document.querySelector('.scrollNavbarThree');
    left.scrollBy(-350, 0);
}
function scrollr()
{
    var angleIcon = document.querySelector(".AngleIcon");
    angleIcon.classList.toggle("angleLeftVisible1");
    var right = document.querySelector('.scrollNavbarThree');
    right.scrollBy(350, 0);
}

//Targetting Container-Section
var container = document.querySelector(".container");
var videosList = document.querySelector(".videosList");
var vid1 = document.querySelectorAll(".vid1");
var list = document.querySelectorAll(".list");
var paraTitle = document.querySelectorAll(".paraTitle");
var channels = document.querySelectorAll(".channels");
var channelsLogo = document.querySelectorAll(".channelsLogo");
// Video Stats and About Video
var videoStats = document.querySelectorAll(".video-stats");
var videoStat = document.querySelectorAll(".video-stat");
var aboutVideo = document.querySelectorAll(".video-about");
var videoDescription = document.querySelectorAll(".vidDescription");
// Adding comment section
let commentSection = document.querySelectorAll(".comment-section");
var comment = document.querySelectorAll(".comment");
var comment2 = document.querySelectorAll(".comment2");
var comment3 = document.querySelectorAll(".comment3");


// Recommended Videos Stuff
var RecommendedVids = document.querySelectorAll(".RecommendedVids");
var recommendedVidTitle = document.querySelectorAll(".title");


// Adding eventListener to the Menu Button
menuIcon.addEventListener("click", function()
{
    navbarTwo.classList.toggle("small-navbarTwo");
    channels[0].classList.toggle("channelsZero");
    navbarTwoSections2.forEach(elem => elem.classList.toggle("navbarTwo-sections3"));
    container.classList.toggle("container-Extended");
    navbarThree.classList.toggle("navbarThree-Extended");
    videosList.classList.toggle("videosList-Extended");
    list.forEach(elem => elem.classList.toggle("list-Extended"));
    channelsLogo.forEach(elem => elem.style.visibility = "visible");
    channels[2].style.bottom = "41px";
});


// Adding click eventListener over each and every over onclicking video
for(let i=0; i < list.length; i++)
{
    list[i].addEventListener("click", function()
    {
        container.classList.remove("container");
        container.classList.add("container2");   
        navbarThree.classList.remove("navbarThree");
        navbarThree.classList.remove("navbarThree-Extended");
        navbarThree.classList.add("compressedNavbarThree");
        angleRight.classList.remove("angleRight");
        angleRight.classList.add("angleRightChanged")
        angleLeft.classList.remove("angleLeft");
        angleLeft.classList.add("angleLeftVisible");
        
        // Resetting menu Button for the clicked video
        menuIcon.addEventListener("click", function()
        {
            container.classList.remove("container-Extended");
            navbarTwo.classList.remove("small-navbarTwo");         
            navbarTwo.classList.toggle("navbarTwoHidden");
            navbarTwoSections2.forEach(elem => elem.classList.remove("navbarTwo-sections3"));
            navbarTwoSections2.forEach(elem => elem.classList.toggle("navbarTwo-sections3"));
            navbarThree.classList.remove("navbarThree-Extended");
            videosList.classList.remove("videosList-Extended");
            list.forEach(elem => elem.classList.remove("list-Extended"));
        });

        // replacing list with videoPlaying class
        list[i].classList.remove("list");
        list[i].classList.add("videoPlaying");
        // replacing vid1 with vid1Version2 class
        vid1[i].classList.remove("vid1");
        vid1[i].classList.add("vid1Version2");
        // adding video Title, channel names etc.
        paraTitle[i].classList.remove("paraTitle");
        paraTitle[i].classList.add("paraTitle2");
        // replacing title with title2 class
        recommendedVidTitle[i].classList.remove("title");
        recommendedVidTitle[i].classList.add("title2");
        // Making the hidden elements visible
        videoStats[i].style.visibility = "visible";
        videoStat[i].style.visibility = "visible";
        aboutVideo[i].style.visibility = "visible";
        commentSection[i].style.visibility="visible";
        comment[i].style.visibility = "visible";
        comment2[i].style.visibility = "visible";
        comment3[i].style.visibility = "visible";
        videoDescription[i].style.visibility = "visible";
        RecommendedVids[i].style.visibility = "visible";
        
        // For video Description's More button
        const moreBtns = document.querySelectorAll(".more-btn");
        moreBtns[i].addEventListener("click", function(e)
        {
            const vidDescription = e.currentTarget.parentElement;
            vidDescription.classList.toggle("showText");
        });        
    });  
}