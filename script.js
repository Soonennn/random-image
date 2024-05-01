// Array of image URLs
var images = [
    "https://unsplash.com/photos/a-group-of-rocks-sitting-on-top-of-a-desert-Mu39DUwHhP4",
    "https://unsplash.com/photos/a-large-mirror-sitting-in-the-middle-of-a-body-of-water-VyY_mNqjgEY",
    "https://unsplash.com/photos/a-statue-of-a-person-holding-a-torch-0ipT8jBI9iU",
    // Add more image URLs as needed
];

// Get a random index from the images array
var randomIndex = Math.floor(Math.random() * images.length);

// Get the image element by its ID
var imageElement = document.getElementById("randomImage");

// Set the src attribute of the image element to the randomly selected image
imageElement.src = images[randomIndex];
