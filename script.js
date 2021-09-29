let homeSectionData = [
  {
    url: 'url("./assets/images/desktop-image-hero-1.jpg")',
    head1: "Discover innovative",
    head2: "ways to decorate",
  },
  {
    url: 'url("./assets/images/desktop-image-hero-2.jpg")',
    head1: "We are available",
    head2: "all across the globe",
  },
  {
    url: 'url("./assets/images/desktop-image-hero-3.jpg")',
    head1: "Manufactured with",
    head2: "the best materials",
  },
];

let nextIndex = 1;
let previousIndex = nextIndex - 1;
let arrows = document.getElementsByClassName("arrow");

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", function (e) {
    let arrowType = e.target.dataset.id;
    if (arrowType === "next") {
      updateDom(homeSectionData[nextIndex]);
      if (nextIndex === 2) {
        nextIndex = 0;
      } else {
        nextIndex++;
      }
    } else {
      updateDom(homeSectionData[previousIndex]);
      if (previousIndex === 0) {
        previousIndex = 2;
      } else {
        previousIndex--;
      }
    }
  });
}

function updateDom({ url, head1, head2 }) {
  document.querySelector(".home-section").style.backgroundImage = url;
  document.querySelector(".head1").innerHTML = head1;
  document.querySelector(".head2").innerHTML = head2;
}
