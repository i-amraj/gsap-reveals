# AI Component Prompt: AI Developer Platform Hero with Code Terminal

```markdown
Implement the dedicated 'AI Developer Platform Hero with Code Terminal' component into the webpage layout.

Component Details:
- Pattern: AI Developer Platform Hero with Code Terminal
- Accent Color: #10b981
- Description: Developer-first hero with copyable curl command and interactive real-time API response stream.

HTML Structure:
<div class="hero-dev-wrap">
          <div class="dev-tag">⚡ NEXT-GEN QUANTUM API</div>
          <h1 class="dev-title">Deploy AI Models in <span style="color:#10b981;">&lt; 50ms &gt;</span></h1>
          <p class="dev-desc">Single unified REST &amp; WebSocket endpoint with automatic fallback, zero cold starts, and global routing.</p>
          
          <div class="dev-terminal-card">
            <div class="term-bar">
              <div class="term-dots"><span></span><span></span><span></span></div>
              <span class="term-file">curl -X POST https://api.nexus.io/v1/generate</span>
              <button class="term-copy-btn" id="termCopyBtn">Copy</button>
            </div>
            <pre class="term-code"><code><span style="color:#64748b;"># Run high-throughput inference</span>
curl https://api.nexus.io/v1/chat \
  -H <span style="color:#10b981;">"Authorization: Bearer $NEXUS_KEY"</span> \
  -d <span style="color:#f59e0b;">'{ "model": "quantum-pro-3", "stream": true }'</span></code></pre>
          </div>
        </div>

Usage Guidelines:
- Retain the clean, standalone styling and mobile-responsive flexbox/grid layout.
- Pair with micro-interactions and high contrast against dark backdrops.
```
