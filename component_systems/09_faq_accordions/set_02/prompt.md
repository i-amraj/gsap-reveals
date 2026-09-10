# AI Component Prompt: Searchable Live Filter FAQ Grid

```markdown
Implement the dedicated 'Searchable Live Filter FAQ Grid' component into the webpage layout.

Component Details:
- Pattern: Searchable Live Filter FAQ Grid
- Accent Color: #ec4899
- Description: Interactive FAQ system with real-time text input filter to find instant answers as you type.

HTML Structure:
<div class="searchable-faq-wrap">
          <div class="faq-search-box">
            <span>🔍</span>
            <input type="text" id="faqSearchInput" placeholder="Type a keyword (e.g. 'license', 'build', 'framework')...">
          </div>
          <div class="faq-list" id="faqList">
            <div class="faq-item" data-q="license commercial usage">
              <strong>Is there any license restriction?</strong>
              <p>No, all modules are completely open-source MIT licensed for commercial use.</p>
            </div>
            <div class="faq-item" data-q="build dependencies npm vite">
              <strong>Does it require Node.js or Vite?</strong>
              <p>Everything works out of the box with zero build dependencies using standard CDNs.</p>
            </div>
            <div class="faq-item" data-q="ai prompts chatgpt claude antigravity">
              <strong>How do AI prompts work?</strong>
              <p>Every set has a prompt.md that you can paste into Antigravity or Claude to generate variations.</p>
            </div>
          </div>
        </div>

Usage Guidelines:
- Retain the clean, standalone styling and mobile-responsive flexbox/grid layout.
- Pair with micro-interactions and high contrast against dark backdrops.
```
