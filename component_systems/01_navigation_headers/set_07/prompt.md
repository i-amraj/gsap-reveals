# AI Component Prompt: Slide-Out Mobile Drawer Nav

```markdown
Implement the dedicated 'Slide-Out Mobile Drawer Nav' component into the webpage layout.

Component Details:
- Pattern: Slide-Out Mobile Drawer Nav
- Accent Color: #10b981
- Description: Responsive mobile navigation bar with animated hamburger button and side slide-out offcanvas drawer menu.

HTML Structure:
<div class="mobile-nav-bar">
          <div class="mobile-brand">
            <span class="brand-badge-circle">M</span>
            <span>MOMENTUM</span>
          </div>
          <button class="hamburger-btn" id="mobileDrawerTrigger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div class="offcanvas-drawer" id="mobileDrawer">
          <div class="drawer-header">
            <strong>MENU</strong>
            <button class="drawer-close" id="mobileDrawerClose">&times;</button>
          </div>
          <nav class="drawer-nav-list">
            <a href="#">🏠 Overview</a>
            <a href="#">⚡ Animations Suite</a>
            <a href="#">🎨 Color Systems</a>
            <a href="#">✍️ Typography Systems</a>
            <a href="#">🌌 Backgrounds</a>
            <a href="#">🧩 Components</a>
          </nav>
          <div class="drawer-footer">
            <button class="comp-btn-primary" style="background:#10b981; color:#000; width:100%;">Get Started</button>
          </div>
        </div>

Usage Guidelines:
- Retain the clean, standalone styling and mobile-responsive flexbox/grid layout.
- Pair with micro-interactions and high contrast against dark backdrops.
```
