// Bento Grid 03: Dynamic Metrics Rollups & SVG Telemetry with GSAP
document.addEventListener("DOMContentLoaded", () => {
  const reqCounter = document.getElementById("reqCounter");
  const latencyCounter = document.getElementById("latencyCounter");
  const bandwidthCounter = document.getElementById("bandwidthCounter");
  const utilPercent = document.getElementById("utilPercent");
  const radialProgress = document.getElementById("radialProgress");
  const simulateBtn = document.getElementById("simulateBtn");
  const chartPath = document.getElementById("chartPath");
  const chartArea = document.getElementById("chartArea");
  const barFills = document.querySelectorAll(".bar-fill");

  // Generate dynamic SVG sparkline points
  function generateChartPath(points) {
    const width = 600;
    const height = 120;
    const step = width / (points.length - 1);
    
    let pathD = `M 0 ${height - points[0]}`;
    for (let i = 1; i < points.length; i++) {
      const prevX = (i - 1) * step;
      const prevY = height - points[i - 1];
      const curX = i * step;
      const curY = height - points[i];
      const midX = (prevX + curX) / 2;
      pathD += ` C ${midX} ${prevY}, ${midX} ${curY}, ${curX} ${curY}`;
    }

    const areaD = `${pathD} L ${width} ${height} L 0 ${height} Z`;
    return { pathD, areaD };
  }

  // Animation controller
  function runSimulation() {
    // 1. Counter Rollups
    const state = { reqs: 0, latency: 0, bandwidth: 0, util: 0 };

    gsap.to(state, {
      reqs: 84920,
      latency: 8.4,
      bandwidth: 840,
      util: 94,
      duration: 2.2,
      ease: "power2.out",
      onUpdate: () => {
        reqCounter.textContent = Math.floor(state.reqs).toLocaleString();
        latencyCounter.textContent = state.latency.toFixed(1);
        bandwidthCounter.textContent = Math.floor(state.bandwidth);
        utilPercent.textContent = `${Math.floor(state.util)}%`;
      }
    });

    // 2. Radial Gauge progress (circle length = 408)
    const targetOffset = 408 - (408 * 0.88); // 88%
    gsap.fromTo(radialProgress, 
      { strokeDashoffset: 408 }, 
      { strokeDashoffset: targetOffset, duration: 2, ease: "power2.out" }
    );

    // 3. Dynamic SVG Path animation
    const randomPoints = [20, 35, 45, 30, 65, 80, 55, 95, 85, 110];
    const { pathD, areaD } = generateChartPath(randomPoints);
    
    chartPath.setAttribute("d", pathD);
    chartArea.setAttribute("d", areaD);

    const length = chartPath.getTotalLength();
    gsap.fromTo(chartPath,
      { strokeDasharray: length, strokeDashoffset: length },
      { strokeDashoffset: 0, duration: 1.8, ease: "power2.out" }
    );

    gsap.fromTo(chartArea,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 0.3 }
    );

    // 4. Bar graph fills
    barFills.forEach((bar, idx) => {
      const targetHeight = bar.style.getPropertyValue("--val");
      bar.style.height = "0%";
      setTimeout(() => {
        bar.style.height = targetHeight;
      }, idx * 100 + 200);
    });
  }

  runSimulation();

  // Button interaction
  simulateBtn.addEventListener("click", () => {
    runSimulation();
  });

  // Background live micro-jitter to mimic live stream
  setInterval(() => {
    const current = parseInt(reqCounter.textContent.replace(/,/g, ""), 10) || 84920;
    const delta = Math.floor((Math.random() - 0.48) * 80);
    reqCounter.textContent = (current + delta).toLocaleString();
  }, 1200);
});
