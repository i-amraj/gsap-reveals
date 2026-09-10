// Bento Grid 06: Interactive Code Switcher & Matrix Terminal with GSAP
document.addEventListener("DOMContentLoaded", () => {
  const codeSnippet = document.getElementById("codeSnippet");
  const tabs = document.querySelectorAll(".tab");
  const copyBtn = document.getElementById("copyBtn");

  // Code templates with syntax tokens
  const codeTemplates = {
    ts: `<span class="kw">import</span> { <span class="fn">createClient</span> } <span class="kw">from</span> <span class="str">'@neural/sdk'</span>;

<span class="cmt">// Initialize authenticated client</span>
<span class="kw">const</span> client = <span class="fn">createClient</span>({
  apiKey: process.env.<span class="num">NEURAL_API_KEY</span>,
  latencyMode: <span class="str">'ultra-low'</span>
});

<span class="cmt">// Execute inference vector pipeline</span>
<span class="kw">const</span> response = <span class="kw">await</span> client.stream.<span class="fn">predict</span>({
  input: <span class="str">'Synthesize realtime 3D audio HRTF'</span>,
  temperature: <span class="num">0.2</span>
});`,

    python: `<span class="kw">from</span> neural_sdk <span class="kw">import</span> <span class="fn">NeuralClient</span>

<span class="cmt"># Initialize client session</span>
client = <span class="fn">NeuralClient</span>(
    api_key=<span class="str">"sk_live_9482710482"</span>,
    timeout_ms=<span class="num">150</span>
)

<span class="cmt"># Async streaming predictions</span>
<span class="kw">async with</span> client.stream.<span class="fn">connect</span>() <span class="kw">as</span> stream:
    result = <span class="kw">await</span> stream.<span class="fn">synthesize</span>(
        prompt=<span class="str">"Synthesize realtime 3D audio HRTF"</span>
    )
    print(f<span class="str">"Latency: {result.ttfb}ms"</span>)`,

    rust: `<span class="kw">use</span> neural_engine::{<span class="fn">Client</span>, <span class="fn">Config</span>};

<span class="kw">#[tokio::main]</span>
<span class="kw">async fn</span> <span class="fn">main</span>() -> <span class="fn">Result</span><(), Box<<span class="kw">dyn</span> std::error::Error>> {
    <span class="kw">let</span> client = Client::<span class="fn">connect</span>(Config::<span class="fn">default</span>()).<span class="kw">await</span>?;
    
    <span class="kw">let</span> res = client.<span class="fn">predict</span>(<span class="str">"Synthesize realtime 3D audio"</span>).<span class="kw">await</span>?;
    <span class="fn">println!</span>(<span class="str">"Vectors generated: {:?}"</span>, res.tokens);
    <span class="fn">Ok</span>(())
}`,

    curl: `<span class="cmt"># Raw HTTP/2 streaming endpoint</span>
curl -X POST https://api.neuralengine.io/v1/stream \\
  -H <span class="str">"Authorization: Bearer sk_live_9482..."</span> \\
  -H <span class="str">"Content-Type: application/json"</span> \\
  -d <span class="str">'{
    "model": "neural-v4-turbo",
    "prompt": "Synthesize realtime 3D audio HRTF",
    "stream": true
  }'</span>`
  };

  // Switch code animation
  function renderCode(lang) {
    const rawHTML = codeTemplates[lang];
    
    // Quick fade out
    gsap.to(codeSnippet, {
      opacity: 0,
      y: -10,
      duration: 0.15,
      ease: "power2.in",
      onComplete: () => {
        codeSnippet.innerHTML = rawHTML;

        // Slide up and reveal
        gsap.fromTo(codeSnippet, 
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
        );
      }
    });
  }

  // Initial render
  renderCode("ts");

  // Tab click listeners
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("active")) return;
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const lang = tab.getAttribute("data-lang");
      renderCode(lang);
    });
  });

  // Copy button interaction
  copyBtn.addEventListener("click", () => {
    const activeTab = document.querySelector(".tab.active").getAttribute("data-lang");
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = codeTemplates[activeTab];
    const textToCopy = tempDiv.textContent || tempDiv.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
      copyBtn.classList.add("copied");

      gsap.fromTo(copyBtn, 
        { scale: 0.95 },
        { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.4)" }
      );

      setTimeout(() => {
        copyBtn.classList.remove("copied");
      }, 2000);
    });
  });
});
