# 🤖 AI Master Prompt: Scramble Password Reveal (`scramble_password_reveal`)

> **Copy & paste this prompt into any AI agent (Antigravity, ChatGPT, Claude) to implement this exact animation on any website:**

```text
Create a Scramble Password Reveal effect (`scramble_password_reveal`) using GSAP 3.

Requirements:
1. Setup a UI that looks like an input box containing a `.password-text` element.
2. In JS, store the real password (`"OMEGA_DIRECTIVE_99X"`). Set the initial `.password-text` `innerText` to bullets (`"•••••••••••••••••••"`).
3. Add a "REVEAL" button.
4. On click, use a GSAP `{ progress: 0 }` proxy tween.
5. In `onUpdate`, progressively resolve the string from bullets to the real password. Unresolved characters should scramble through random characters (`!@#$%^&*()_+`) before locking into the real letters.
6. When clicked again (HIDE), run the tween in reverse, scrambling the text back into bullets.
7. Provide complete HTML5, CSS3, and JS files. Ensure the GSAP CDN is included.
```
