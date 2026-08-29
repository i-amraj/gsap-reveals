# 🤖 AI Master Prompt: Video Autoplay Stacking (`video_autoplay_stacking`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Video Autoplay Stacking Cards effect (`video_autoplay_stacking`) using GSAP 3 and ScrollTrigger.

Requirements:
1. Create a vertical scrolling container with 3 pinned cards.
2. Inside each card, embed an HTML5 `<video>` element (use a placeholder video URL or a loop).
3. The video must ONLY play when that specific card is the active (topmost, fully visible) pinned card.
4. When a new card scrolls up and covers it, use `ScrollTrigger` callbacks (`onEnter`, `onLeave`, etc.) to automatically `pause()` the old video and `play()` the new video.
5. Provide complete HTML5, CSS3, and JS files.
```
