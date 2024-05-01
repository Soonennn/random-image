// Array of image URLs
var images = [
    "https://imgur.com/gallery/BCRoMl2",
    "https://imgur.com/gallery/8le0iFu",
    "https://imgur.com/gallery/Khk4pWh",
    // Add more image URLs as needed
];

function getRandomImage() {
    // Get a random index from the images array
    var randomIndex = Math.floor(Math.random() * images.length);
    
    // Get the image element by its ID
    var imageElement = document.getElementById("randomImage");
    
    // Set the src attribute of the image element to the randomly selected image
    imageElement.src = images[randomIndex];
}
