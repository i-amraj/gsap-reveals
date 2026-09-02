# Style 3.3: Infinite Marquee Ticker (`11_infinite_marquee_ticker`)

This module focuses on creating seamless, infinite loops of typography, often referred to as "Marquees" or "Tickers". 

A highly popular technique in modern web design, marquees create a sense of continuous motion and urgency. Rather than just looping CSS animations, we use GSAP to manipulate the `timeScale()` of the looping tween, allowing the marquee to react dynamically to user scroll velocity and scroll direction.

## 📦 Sub-Demos (Currently 4)

| # | Module Name | Description | Status |
|---|---|---|---|
| 01 | `basic_horizontal_marquee` | A standard, seamless infinite loop running left continuously. | ✅ |
| 02 | `velocity_speed_marquee` | The marquee speeds up exponentially when the user scrolls quickly. | ✅ |
| 03 | `scroll_direction_marquee` | The marquee reverses its looping direction depending on if the user is scrolling up or down. | ✅ |
| 04 | `vertical_infinite_marquee` | A marquee that loops vertically (Y-axis) rather than horizontally. | ✅ |

## 🚀 How to Use
Navigate into any sub-directory and open `index.html` in your browser. Each directory contains a `prompt.md` which you can use to generate this exact effect in any AI.

## 🧠 Core Concept: The `-50%` Loop
The easiest way to create a seamless GSAP marquee is to put **two identical copies** of your text inside a wide flex container. You then animate that container from `xPercent: 0` to `xPercent: -50`. Because the two halves are identical, the moment it hits `-50%`, it looks exactly like `0%`. We then use `repeat: -1` and `ease: "none"` to infinitely jump back to 0 and start over, creating a flawless, invisible seam.
