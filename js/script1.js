// This function changes the color of navigation bar elements on hover

function changeonhover(element) {
    element.style.background = "#282828";
    element.style.color = "#66FCF1";
}

// This function puts back the original color of navigation bar elements on mouse leaving it

function changeonleave(element) {
    if (element.className == "active")
    {
        element.style.background = "#F76C6C";
        element.style.color = "#00aa17";
    }
    else
    {
        element.style.background = "#1f5226";
        element.style.color = "#EDF5E1";
    }
}

// This function is used to display other image in changing image
function changeimage() {
    var x = document.getElementById('changingimage');
    var y = x.src;
    var z = document.getElementById('changingline')

    if ( y.includes('image1.jpg', 0))
    {
        x.src = "../img/image2.jpg"
        z.innerHTML = "Taj Mahal"
    }
    if ( y.includes('image2.jpg', 0))
    {
        x.src = "../img/image3.jpg"
        z.innerHTML = "Lotus Temple"
    }
    if ( y.includes('image3.jpg', 0))
    {
        x.src = "../img/image4.jpg"
        z.innerHTML = "Red Fort"
    }
    if ( y.includes('image4.jpg', 0))
    {
        x.src = "../img/image5.jpg"
        z.innerHTML = "Akshardam temple"
    }
    if ( y.includes('image5.jpg', 0))
    {
        x.src = "../img/image1.jpg"
        z.innerHTML = "India gate"
    }
}

var dict = {}; // Initialising a dictionary
var x = []; // Initialising an array

// Function that is performed after the form is submitted

function displayform() {
    var name = document.forms["myform"]["formname"].value;
    var skill = document.forms["myform"]["formskill"].value;
    var level = document.forms["myform"]["formlevel"].value;
    x = [name, skill, level];
    dict[name] = x;
    document.getElementById("formbody").innerHTML += "<tr><td>" + name + "</td><td>" + skill + "</td><td>" + level + "</td></tr>";
}

// This function clears the form after reading and gives an alert.

function readform() {
    displayform();
    document.getElementById("formname").value = "";
    document.getElementById("formskill").value = "";
    document.getElementById("formlevel").value = "";
    // alert("Thank you. Your feedback has been recorded and you can check it below in the form results section.");
    swal({
        title: "Thank You",
        text: "You form has been submitted. You can view it in the form results section below",
        icon: "success",
        button: "OK",
      });
    return false;
}

// Javascript function to stick the navigation bar to the top
// It adds the sticky class to navigation bar

window.onscroll = function() {myFunction()};
    
// Get the navmenu
var navmenu = document.getElementById("navmenu");
    
// Get the offset position of the navmenu
var sticky = navmenu.offsetTop;
    
// Add the sticky class to the navmenu when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navmenu.classList.add("sticky")
    } else {
        navmenu.classList.remove("sticky");
    }
}

// This function converts hamburger icon to times icon and shows menu content in small screens

function showmenu() {
    var x = document.getElementById("navmenu");
    x.className += " responsive";
}

// This function hides the menu content and shows hamburger icon and removes times icon
    
function hidemenu() {
    var x = document.getElementById("navmenu");
    if( x.className === "navigation responsive")
        x.className = "navigation";
    if( x.className === "navigation sticky responsive")
        x.className = "navigation sticky"
    if( x.className === "navigation responsive sticky")
        x.className = "navigation sticky"
}