// Transition 01: Grid Card to Fullscreen Hero with GSAP Flip
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(Flip);

  const cards = document.querySelectorAll(".project-card");
  const caseStudyView = document.getElementById("caseStudyView");
  const heroSlot = document.getElementById("heroSlot");
  const backBtn = document.getElementById("backBtn");
  const studyBody = document.getElementById("studyBody");
  const studyClient = document.getElementById("studyClient");
  const studyTitle = document.getElementById("studyTitle");
  const studyLead = document.getElementById("studyLead");

  let activeCard = null;
  let activeMedia = null;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      activeCard = card;
      activeMedia = card.querySelector(".card-media");

      const title = card.querySelector("h3").textContent;
      const client = card.querySelector(".client-tag").textContent;
      const desc = card.querySelector("p").textContent;

      studyTitle.textContent = title;
      studyClient.textContent = client;
      studyLead.textContent = desc;

      // 1. Capture initial geometry of card-media
      const state = Flip.getState(activeMedia);

      // 2. Open overlay & move DOM node into destination slot
      caseStudyView.style.display = "block";
      caseStudyView.style.opacity = "1";
      heroSlot.appendChild(activeMedia);

      // 3. Animate shared element transition seamlessly
      Flip.from(state, {
        duration: 0.65,
        ease: "power3.inOut",
        onComplete: () => {
          // Fade in narrative copy
          gsap.fromTo(studyBody.children, 
            { y: 25, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: "power2.out" }
          );
        }
      });

      gsap.set(studyBody.children, { opacity: 0 });
    });
  });

  // Back button returns shared media back to grid card
  backBtn.addEventListener("click", () => {
    if (!activeCard || !activeMedia) return;

    // Fade out narrative copy first
    gsap.to(studyBody.children, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        // 1. Capture state in hero slot
        const state = Flip.getState(activeMedia);

        // 2. Reparent media back to its parent card
        activeCard.prepend(activeMedia);

        // 3. Flip back to original grid position
        Flip.from(state, {
          duration: 0.55,
          ease: "power3.inOut",
          onComplete: () => {
            caseStudyView.style.display = "none";
            caseStudyView.style.opacity = "0";
            activeCard = null;
            activeMedia = null;
          }
        });
      }
    });
  });
});
