# AI Component Prompt: 3-Tier SaaS Subscription Grid

```markdown
Implement the dedicated '3-Tier SaaS Subscription Grid' component into the webpage layout.

Component Details:
- Pattern: 3-Tier SaaS Subscription Grid
- Accent Color: #38bdf8
- Description: Classic 3-column SaaS pricing cards with Featured Popular Tier ribbon, feature ticks, and monthly/annual billing discount.

HTML Structure:
<div class="pricing-3tier-wrap">
          <div class="pricing-card">
            <span class="tier-name">STARTER</span>
            <div class="tier-price">$19<span>/mo</span></div>
            <p class="tier-sub">Essential toolkit for indie developers.</p>
            <ul class="tier-list">
              <li>✓ 10 Production Projects</li>
              <li>✓ 60FPS Hardware Animations</li>
              <li>✓ Standard Support</li>
            </ul>
            <button class="tier-btn">Get Started</button>
          </div>
          <div class="pricing-card popular" style="border-color:#38bdf8;">
            <div class="popular-ribbon" style="background:#38bdf8; color:#000;">MOST POPULAR</div>
            <span class="tier-name" style="color:#38bdf8;">PRO STUDIO</span>
            <div class="tier-price" style="color:#38bdf8;">$49<span>/mo</span></div>
            <p class="tier-sub">Complete creative freedom for agencies.</p>
            <ul class="tier-list">
              <li>✓ Unlimited Projects</li>
              <li>✓ Full 28 Component Ecosystem</li>
              <li>✓ 224 Color &amp; Text Systems</li>
              <li>✓ Priority Edge CDN &amp; 24/7 Slack</li>
            </ul>
            <button class="tier-btn active" style="background:#38bdf8; color:#000;">Upgrade to Pro &rarr;</button>
          </div>
          <div class="pricing-card">
            <span class="tier-name">ENTERPRISE</span>
            <div class="tier-price">$199<span>/mo</span></div>
            <p class="tier-sub">Custom security &amp; dedicated SLA.</p>
            <ul class="tier-list">
              <li>✓ Dedicated Support Engineer</li>
              <li>✓ Custom Contract &amp; Invoicing</li>
              <li>✓ 99.99% Uptime Guarantee</li>
            </ul>
            <button class="tier-btn">Contact Sales</button>
          </div>
        </div>

Usage Guidelines:
- Retain the clean, standalone styling and mobile-responsive flexbox/grid layout.
- Pair with micro-interactions and high contrast against dark backdrops.
```
