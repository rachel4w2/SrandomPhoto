const images = ["hoshi1.jpg", "hoshi2.jpg", "hoshi3.jpg", "hoshi4.jpg", "hoshi5.jpg", "hoshi6.JPG", "hoshi7.jpg", "hoshi8.jpg", "hoshi9.jpg",
"hoshi10.jpg", "hoshi11.jpg", "hoshi12.jpg", "hoshi13.jpg", "hoshi14.jpg", "hoshi15.JPG", "hoshi16.jpg", "hoshi17.jpg", "hoshi18.jpg", "hoshi19.jpg",
"hoshi20.jpg", "hoshi21.jpg", "hoshi22.jpg", "hoshi23.jpg", "hoshi24.jpg", "hoshi25.jpg", "hoshi26.jpg", "hoshi27.jpg", "hoshi28.jpg", "hoshi29.jpg",
"hoshi30.JPG", "hoshi31.jpg", "hoshi32.jpg", "hoshi33.jpg", "hoshi34.jpg", "hoshi35.jpg", "hoshi36.JPG", "hoshi37.jpg", "hoshi38.jpg", "hoshi39.jpg",
"hoshi40.jpg", "hoshi41.jpg", "hoshi42.jpg", "hoshi43.jpg", "hoshi44.jpg", "hoshi45.jpg", "hoshi46.jpg", "hoshi47.jpg", "hoshi48.jpg", "hoshi49.jpg",
"hoshi50.jpg", "hoshi51.jpg", "hoshi52.jpg", "hoshi53.jpg", "hoshi54.jpg", "hoshi55.jpg", "hoshi56.jpg", "hoshi57.jpg", "hoshi58.jpg", "hoshi59.JPG",
"hoshi60.jpg",
"wonwoo1.jpg", "wonwoo2.jpg", "wonwoo3.jpg", "wonwoo4.jpg", "wonwoo5.jpg", "wonwoo6.jpg", "wonwoo7.jpg", "wonwoo8.jpg", "wonwoo9.jpg",
"wonwoo10.jpg", "wonwoo11.jpg", "wonwoo12.jpg", "wonwoo13.jpg", "wonwoo14.jpg", "wonwoo15.jpg", "wonwoo16.jpg", "wonwoo17.jpg", "wonwoo18.jpg", "wonwoo19.jpg",
"wonwoo20.jpg", "wonwoo21.jpg", "wonwoo22.jpg", "wonwoo23.jpg", "wonwoo24.jpg", "wonwoo25.jpg", "wonwoo26.jpg", "wonwoo27.jpg", "wonwoo28.jpg", "wonwoo29.jpg",
"wonwoo30.jpg", "wonwoo31.jpg", "wonwoo32.jpg", "wonwoo33.jpg", "wonwoo34.jpg", "wonwoo35.jpg", "wonwoo36.jpg", "wonwoo37.jpg", "wonwoo38.jpg", "wonwoo39.jpg",
"joshua1.jpg", "joshua2.jpg", "joshua3.jpg", "joshua4.jpg", "joshua5.jpg"
];

const image = "random.png";

const photozone = document.querySelector("section");

function getPhoto() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const randomImage = document.createElement("img");
  randomImage.src = `${chosenImage}`;
  photozone.style.backgroundImage = `url(${randomImage.src})`;

  // const randomImage = document.createElement("img");
  // randomImage.src = `${image}`
  // photozone.style.backgroundImage = `url(${randomImage.src})`
}

getPhoto();
// let inT = setInterval(getPhoto, 10);

// let c = 0;

// photozone.addEventListener("click", function() {

//   if(c===0) {
//     clearInterval(inT);
//     c = 1;
//   } else if(c===1) {
//     getPhoto();
//     inT = setInterval(getPhoto, 10);
//     c = 0;
//   }

// });