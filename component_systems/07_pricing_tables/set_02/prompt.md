# AI Component Prompt: Interactive Slider Seat Calculator

```markdown
Implement the dedicated 'Interactive Slider Seat Calculator' component into the webpage layout.

Component Details:
- Pattern: Interactive Slider Seat Calculator
- Accent Color: #818cf8
- Description: Real-time pricing calculator where dragging the seat slider dynamically recalculates the monthly invoice amount.

HTML Structure:
<div class="slider-calculator-card">
          <span class="calc-label">PAY-AS-YOU-GROW &bull; TEAM SEATS CALCULATOR</span>
          <h2>Select Team Capacity</h2>
          <p class="calc-desc">Scale seamlessly from a single solo creator to a global organization.</p>
          
          <div class="calc-slider-box">
            <div class="slider-labels">
              <span>Seats: <strong id="seatCount" style="color:#818cf8;">10</strong></span>
              <span id="discountTag" style="color:#22c55e;">15% Volume Discount</span>
            </div>
            <input type="range" id="seatSlider" min="1" max="100" value="10" class="custom-seat-slider">
          </div>

          <div class="calc-invoice-box">
            <div class="invoice-left">
              <span>ESTIMATED TOTAL</span>
              <div class="invoice-amount">$<span id="totalPrice">120</span><span class="cycle">/month</span></div>
            </div>
            <button class="calc-cta-btn">Start Instant Checkout &rarr;</button>
          </div>
        </div>

Usage Guidelines:
- Retain the clean, standalone styling and mobile-responsive flexbox/grid layout.
- Pair with micro-interactions and high contrast against dark backdrops.
```
