$(document).ready(function () {

$("#about-card").on("click",function(){
    location.href="about.html"
})

$("#contact-card").on("click",function(){
    location.href="contact.html"
})

$("#resume-card").on("click",function(){
    location.href="resume.html"
})
$("#port-card").on("click",function(){
    location.href="portfolio.html"
})

});

function initMap() {
var coord = {lat: 40.057980, lng: -75.209226}
var map = new google.maps.Map(
document.getElementById('map'), {zoom: 10, center: coord});
var marker = new google.maps.Marker({position: coord, map: map});
}

