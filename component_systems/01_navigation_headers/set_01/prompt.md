# AI Component Prompt: Dynamic Island Capsule Nav

```markdown
Implement the dedicated 'Dynamic Island Capsule Nav' component into the webpage layout.

Component Details:
- Pattern: Dynamic Island Capsule Nav
- Accent Color: #38bdf8
- Description: Apple iPhone style floating Dynamic Island capsule that smoothly expands on hover or click into search and actions.

HTML Structure:
<div class="dynamic-island-nav" id="dynamicIsland">
          <div class="island-collapsed">
            <div class="island-brand">
              <span class="pulse-dot"></span>
              <span class="brand-text">NEXUS</span>
            </div>
            <div class="island-links">
              <a href="#">Showcase</a>
              <a href="#">Docs</a>
              <a href="#">Pricing</a>
            </div>
            <button class="island-action-btn" id="islandExpandBtn">✦ Search</button>
          </div>
          <div class="island-expanded" id="islandExpandedContent" style="display:none;">
            <div class="island-search-row">
              <span>🔍</span>
              <input type="text" placeholder="Search commands or documentation..." autofocus>
              <button class="island-close-btn" id="islandCloseBtn">&times;</button>
            </div>
            <div class="island-quick-chips">
              <span>Quick:</span>
              <a href="#">Components</a>
              <a href="#">Color Systems</a>
              <a href="#">Typography</a>
            </div>
          </div>
        </div>

Usage Guidelines:
- Retain the clean, standalone styling and mobile-responsive flexbox/grid layout.
- Pair with micro-interactions and high contrast against dark backdrops.
```
