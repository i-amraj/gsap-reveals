gsap.registerPlugin(CustomEase);

// We define a custom ease curve
CustomEase.create("myBounce", "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 0.362,1 0.37,0.985 0.414,0.873 0.455,0.811 0.51,0.726 0.573,0.753 0.586,0.762 0.662,0.812 0.719,0.981 0.726,1 0.734,0.981 0.754,0.916 0.778,0.9 0.812,0.877 0.852,0.879 0.866,0.887 0.91,0.909 0.941,0.987 0.946,1 0.95,0.987 0.966,0.975 0.972,0.973 0.986,0.969 0.994,1 1,1");

function playAnim() {
  const tl = gsap.timeline();
  
  // Reset
  gsap.set(".ball", { x: 0, y: 0 });
  gsap.set("#curve", { strokeDashoffset: 1000 });
  
  // Draw the line at a linear pace
  tl.to("#curve", { strokeDashoffset: 0, duration: 2, ease: "none" }, 0)
  
  // Move the ball X linearly
  .to(".ball", { x: 400, duration: 2, ease: "none" }, 0)
  
  // Move the ball Y using the CustomEase (mapped to height 400px)
  // Negative Y moves it up in CSS
  .to(".ball", { y: -400, duration: 2, ease: "myBounce" }, 0);
}

document.getElementById("play-btn").addEventListener("click", playAnim);
