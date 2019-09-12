


// here we need to get all four

var topnav_home = document.getElementById("Home");
var topnav_contact = document.getElementById("Contact");
var topnav_about = document.getElementById("About");
var topnav_login = document.getElementById("Login");

var topnav_array = [];
// now we need put them in to array
topnav_array.push(topnav_home);
topnav_array.push(topnav_contact);
topnav_array.push(topnav_about);
topnav_array.push(topnav_login);

//topnav_home.style.backgroundColor = "green";

var home_content =  document.getElementById("home_content");
var contact_content = document.getElementById("contact_content");
var about_content = document.getElementById("about_content");
var login_content = document.getElementById("login_content");



var Body = document.getElementsByTagName("body");

// Body.onresize = function () {
//
//     var w = window.outerWidth;
//     if(w <= 600){
//
//         Shrink();
//
//     }
//
// }

function Change_All_Topnav(){
    var i;
    for( i = 0 ;  i< topnav_array.length; i++ ){
        topnav_array[i].style.backgroundColor = "#808080";
    }

    var tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    topnav_home.style.backgroundColor = "#33cc33";
}

function Change_Click_To_Green( topnav_variable ){
    Change_All_Topnav();
    Shrink();
    topnav_variable.style.color = "white";
    topnav_variable.style.backgroundColor = "green";

    //Pair_Bar[topnav_variable].display = "block";
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        //topnav_login.style.cssFloat = "none";
    } else {
        x.className = "topnav";
        //topnav_login.style.cssFloat = "right";
    }
}

function Shrink(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav responsive") {
        x.className = "topnav";
        //topnav_login.style.cssFloat = "right";
    }
}



topnav_home.onclick = function () {
    Change_Click_To_Green( topnav_home );

    home_content.style.display = "block";
    home_content.style.visibility = "visible";
};
topnav_contact.onclick = function () {
    Change_Click_To_Green( topnav_contact );

    contact_content.style.display = "block";
    contact_content.style.visibility = "visible";

};

topnav_about.onclick = function () {
    Change_Click_To_Green( topnav_about );

    about_content.style.display = "block";
    about_content.style.visibility = "visible";

};

topnav_login.onclick = function () {
    Change_Click_To_Green( topnav_login );

    login_content.style.display = "block";
    login_content.style.visibility = "visible";
};




// now we make the one we click brcome green





