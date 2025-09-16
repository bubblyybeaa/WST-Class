//smooth scroll
document.querySelectorAll('.topnav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


//scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });


//malupet na hover
const profileImg = document.querySelector(".about-content img");
profileImg.addEventListener("mouseover", () => {
  profileImg.style.transform = "scale(1.1)";
});
profileImg.addEventListener("mouseout", () => {
  profileImg.style.transform = "scale(1)";
});


//yung random facts ko
const facts = [
  "Supernatural fanfics started the omegaverse. Don't ask me why or how.",
  "It's been 10 years since Undertale was first released.",
  "I miss my husband (has literal thousands of them) <3",
  "I GOT TO SEE DEAR EVAN HANSEN LIVE!!",
  "I GOT TO SEE HAMILTON LIVE!!",
  "I GOT TO SEE SIX THE MUSICAL LIVE!!",
  "I GOT TO SEE MISS SAIGON LIVE!!",
  "I have nine cats.",
  "i'm in a cult...",
  "Patrick Wilson, from the Conjuring series, played Raoul in Phantom of the Opera.",
  "Oscar Isaac has three roles in the MCU (Apocalypse, Miguel O'Hara and Moon Knight).",
  "I had my braces since 9th grade and I still don't know when I'm getting these off.",
  "I'm bad at decorating my island in ACNH.",
  "What else do you want to know?",
  "I bet you won't spam this to see everything (pls don't)."
];

document.getElementById("factBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("randomFact").textContent = facts[randomIndex];
});


//greet
const greetingElement = document.getElementById("greeting");
greetingElement.textContent = "Welcome to the internet! - Bo Burnham";
