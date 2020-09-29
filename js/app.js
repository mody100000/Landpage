// adding the nav elements to the navabr
const elements = ["1", "2", "3", "4"];
const nav_elements = document.getElementById("nav_elements"); //to get the ul element which will contain the li elements of the navbar
elements.forEach((element) => {
  let nav_item = `<li><a href=${
    "#section" + element
  }>section ${element}</a></li>`;
  nav_elements.innerHTML += nav_item;
});
// to remove active class from all links in the navbar
function clearActive() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    //to remove the active class from all anchors
    anchor.classList.remove("active");
  });
}

//implement smooth scrolling
function anchorLink(e) {
  const distanceFromTopScreen = (el) =>
    Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  const targetID = this.getAttribute("href"); //to get the id of the section we are scrolling to
  const targetAnchor = document.querySelector(targetID); //to get the section we are scrolling to
  if (!targetAnchor) return; //if there is no target for an anchor then get out from the function
  const distance = distanceFromTopScreen(targetAnchor); //to know how far the target from the top screen using the above function

  window.scrollBy({ top: distance, left: 0, behavior: "smooth" }); //to scrool from the top screen to the target section smoothly
  clearActive();
  this.classList.add("active"); //to add the active class to the clicked anchor
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]'); //to get all the anchors that have href attribute

linksToAnchors.forEach((each) => (each.onclick = anchorLink));

// repeat the icons in section 3
const section3 = document.getElementById("section3");
const icons = `
<div class="raw">
<div class="col-6">
  <i class="fab fa-android"></i>
  <h5>Section</h5>
  <hr />
  <p>Lorem ipsum dolor sit amet.</p>
</div>
<div class="col-6">
  <i class="fa fa-anchor"></i>
  <h5>Section</h5>
  <hr />
  <p>Lorem ipsum dolor sit amet.</p>
</div>
</div>
`;
for (let i = 0; i < 3; i++) {
  section3.innerHTML += icons;
}

// to know which section the user is viewing and make the link which targets to this section active
const links = document.querySelectorAll('a[href^="#"]'); //get all the navbar links
const sections = document.querySelectorAll(".section"); //get the 4 sections

function changeLinkState() {
  let index = sections.length;
  while (--index && window.scrollY + 50 <= sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);
// ////////////////////////////////////////////////////
