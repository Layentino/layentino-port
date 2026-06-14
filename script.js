:root {
  --orange: #FF6A1C;
  --yellow: #FFDA62;
  --peach: #FFAE56;
  --pink: #F5788B;
  --cream: #FFF8EB;
  --cream-2: #FFEFD8;
  --white: #FFFFFF;
  --text: #321A14;
  --muted: #6F4A3A;
  --line: rgba(255, 106, 28, 0.20);
  --shadow: 0 24px 70px rgba(255, 106, 28, 0.16);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  background:
    radial-gradient(circle at 10% 10%, rgba(255, 218, 98, 0.46), transparent 27rem),
    radial-gradient(circle at 86% 4%, rgba(245, 120, 139, 0.24), transparent 29rem),
    radial-gradient(circle at 58% 82%, rgba(255, 174, 86, 0.25), transparent 26rem),
    linear-gradient(135deg, var(--cream), #FFFDF6 52%, var(--cream-2));
  color: var(--text);
  line-height: 1.65;
  overflow-x: hidden;
}

a {
  color: inherit;
}

.noise-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  opacity: 0.04;
  background-image: repeating-radial-gradient(circle at 0 0, #FF6A1C 0 1px, transparent 1px 5px);
}

.cursor-light {
  position: fixed;
  width: 360px;
  height: 360px;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  background: radial-gradient(circle, rgba(255, 106, 28, 0.18), transparent 68%);
  pointer-events: none;
  z-index: 0;
  mix-blend-mode: multiply;
}

.page-grid {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 106, 28, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 106, 28, 0.055) 1px, transparent 1px);
  background-size: 58px 58px;
  mask-image: linear-gradient(to bottom, black, transparent 84%);
  pointer-events: none;
  z-index: -2;
}

.blob {
  position: fixed;
  border-radius: 999px;
  filter: blur(88px);
  pointer-events: none;
  z-index: -1;
}

.blob-one {
  width: 28rem;
  height: 28rem;
  left: -9rem;
  top: 8rem;
  background: rgba(255, 218, 98, 0.48);
  animation: blobMove 12s ease-in-out infinite;
}

.blob-two {
  width: 30rem;
  height: 30rem;
  right: -10rem;
  bottom: 2rem;
  background: rgba(245, 120, 139, 0.24);
  animation: blobMove 14s ease-in-out infinite reverse;
}

.blob-three {
  width: 18rem;
  height: 18rem;
  right: 22%;
  top: 38%;
  background: rgba(255, 174, 86, 0.30);
  animation: blobMove 10s ease-in-out infinite;
}

.orb {
  position: fixed;
  border: 1px solid rgba(255, 106, 28, 0.18);
  background: linear-gradient(135deg, rgba(255, 218, 98, 0.45), rgba(245, 120, 139, 0.16));
  pointer-events: none;
  z-index: -1;
  backdrop-filter: blur(10px);
}

.orb-one {
  width: 82px;
  height: 82px;
  top: 18%;
  left: 4%;
  border-radius: 26px;
  animation: drift 9s ease-in-out infinite;
}

.orb-two {
  width: 120px;
  height: 120px;
  right: 6%;
  top: 42%;
  border-radius: 999px;
  animation: drift 12s ease-in-out infinite reverse;
}

.orb-three {
  width: 72px;
  height: 72px;
  right: 22%;
  bottom: 10%;
  border-radius: 22px;
  transform: rotate(18deg);
  animation: drift 10s ease-in-out infinite;
}

.section-padding {
  padding: 92px 8%;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 76px;
  padding: 16px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 248, 235, 0.78);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
  text-decoration: none;
  letter-spacing: -0.02em;
}

.logo-mark {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: var(--text);
  background: linear-gradient(135deg, var(--yellow), var(--peach), var(--pink));
  box-shadow: 0 10px 30px rgba(255, 106, 28, 0.22);
  animation: pulseGlow 2.8s ease-in-out infinite;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav-links a {
  position: relative;
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  font-weight: 750;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--orange), var(--peach), var(--pink));
  transition: width 0.25s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.menu-btn {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.68);
  cursor: pointer;
}

.menu-btn span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 5px auto;
  background: var(--text);
  border-radius: 99px;
}

.hero {
  min-height: calc(100vh - 76px);
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(320px, 0.88fr);
  gap: 56px;
  align-items: center;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 8% 5% auto auto;
  width: 220px;
  height: 220px;
  border-radius: 999px;
  border: 1px solid rgba(255, 106, 28, 0.16);
  background: linear-gradient(135deg, rgba(255, 218, 98, 0.42), transparent);
  animation: float 7s ease-in-out infinite;
  z-index: -1;
}

.hero-pill {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 9px 14px;
  border: 1px solid rgba(255, 106, 28, 0.20);
  border-radius: 999px;
  color: var(--muted);
  background: rgba(255, 255, 255, 0.70);
  font-size: 13px;
  font-weight: 850;
  margin-bottom: 18px;
  box-shadow: 0 10px 28px rgba(255, 106, 28, 0.08);
}

.hero-pill span,
.live-dot {
  width: 9px;
  height: 9px;
  border-radius: 99px;
  background: var(--orange);
  box-shadow: 0 0 18px rgba(255, 106, 28, 0.75);
}

.eyebrow {
  color: var(--orange);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 13px;
  font-weight: 900;
  margin-bottom: 12px;
}

.hero h1 {
  display: grid;
  font-size: clamp(48px, 8vw, 104px);
  line-height: 0.92;
  letter-spacing: -0.075em;
  margin-bottom: 26px;
}

.gradient-text {
  width: fit-content;
  background: linear-gradient(135deg, var(--orange), var(--peach), var(--pink), #B84860);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-size: 230% 230%;
  animation: gradientMove 5s ease-in-out infinite;
}

.hero-subtitle {
  max-width: 760px;
  color: var(--muted);
  font-size: clamp(18px, 2vw, 22px);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 900;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
  will-change: transform;
}

.btn-primary {
  color: var(--text);
  background: linear-gradient(135deg, var(--yellow), var(--peach), var(--pink));
  box-shadow: 0 16px 40px rgba(255, 106, 28, 0.20);
}

.btn-outline {
  color: var(--text);
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.72);
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.stat-card {
  min-width: 150px;
  padding: 18px 20px;
  border-radius: 22px;
}

.stat-card strong {
  display: block;
  font-size: 27px;
  line-height: 1;
}

.stat-card span {
  color: var(--muted);
  font-size: 13px;
}

.hero-panel,
.about-card,
.quick-info,
.project-showcase,
.timeline-content,
.achievement-card,
.rating-card,
.contact-box,
.stat-card {
  border: 1px solid var(--line);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.64)),
    linear-gradient(135deg, rgba(255, 218, 98, 0.22), rgba(245, 120, 139, 0.12));
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
}

.tilt-card {
  transform-style: preserve-3d;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.tilt-card:hover {
  border-color: rgba(255, 106, 28, 0.34);
  box-shadow: 0 30px 85px rgba(255, 106, 28, 0.18);
}

.hero-panel {
  padding: 28px;
  border-radius: 32px;
  position: relative;
  overflow: hidden;
}

.hero-panel::after {
  content: "";
  position: absolute;
  right: -80px;
  bottom: -80px;
  width: 190px;
  height: 190px;
  background: rgba(245, 120, 139, 0.22);
  border-radius: 999px;
  filter: blur(20px);
  animation: breathe 5s ease-in-out infinite;
}

.panel-header {
  display: flex;
  gap: 8px;
  margin-bottom: 26px;
}

.panel-header span {
  width: 12px;
  height: 12px;
  border-radius: 99px;
  background: var(--orange);
  animation: dotPulse 1.8s ease-in-out infinite;
}

.panel-header span:nth-child(2) {
  background: var(--peach);
  animation-delay: 0.15s;
}

.panel-header span:nth-child(3) {
  background: var(--pink);
  animation-delay: 0.3s;
}

.hero-panel h2 {
  margin-bottom: 18px;
  font-size: 25px;
}

.focus-list {
  display: grid;
  gap: 16px;
  position: relative;
  z-index: 1;
}

.focus-item {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 14px;
  align-items: start;
  padding: 16px;
  border-radius: 22px;
  background: rgba(255, 248, 235, 0.76);
  border: 1px solid rgba(255, 106, 28, 0.14);
  transition: transform 0.22s ease, background 0.22s ease;
}

.focus-item:hover {
  transform: translateX(8px);
  background: rgba(255, 218, 98, 0.35);
}

.focus-icon,
.rating-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  color: var(--text);
  font-size: 13px;
  font-weight: 950;
  background: linear-gradient(135deg, var(--yellow), var(--peach), var(--pink));
  box-shadow: inset 0 0 18px rgba(255, 255, 255, 0.25);
}

.focus-item h3 {
  font-size: 17px;
  margin-bottom: 4px;
}

.focus-item p {
  color: var(--muted);
  font-size: 14px;
}

.live-card {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 18px;
  padding: 14px;
  border-radius: 18px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 850;
  border: 1px solid rgba(255, 106, 28, 0.14);
  background: rgba(255, 248, 235, 0.76);
}

.section-heading {
  max-width: 850px;
  margin-bottom: 30px;
}

.section-heading h2 {
  font-size: clamp(34px, 5vw, 60px);
  line-height: 1.02;
  letter-spacing: -0.05em;
}

.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(290px, 0.7fr);
  gap: 22px;
}

.about-card,
.quick-info {
  border-radius: 30px;
  padding: 28px;
}

.about-card p {
  color: var(--muted);
  font-size: 17px;
}

.about-card p + p {
  margin-top: 18px;
}

.quick-info {
  display: grid;
  gap: 16px;
}

.quick-info div {
  padding-bottom: 16px;
  border-bottom: 1px solid var(--line);
}

.quick-info div:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.quick-info span {
  display: block;
  color: var(--orange);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 900;
  margin-bottom: 6px;
}

.quick-info strong {
  font-size: 18px;
}

.project-showcase {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(290px, 0.6fr);
  gap: 24px;
  padding: 28px;
  border-radius: 36px;
  position: relative;
  overflow: hidden;
}

.project-showcase::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent, rgba(255, 218, 98, 0.34), transparent);
  transform: translateX(-100%);
  animation: shine 6s ease-in-out infinite;
}

.project-badge {
  width: fit-content;
  padding: 8px 12px;
  margin-bottom: 18px;
  color: var(--text);
  font-weight: 950;
  font-size: 13px;
  border-radius: 99px;
  background: linear-gradient(135deg, var(--yellow), var(--peach), var(--pink));
}

.project-main h3 {
  font-size: clamp(28px, 4vw, 48px);
  line-height: 1.05;
  letter-spacing: -0.045em;
  margin-bottom: 18px;
}

.project-main > p {
  color: var(--muted);
  max-width: 830px;
  font-size: 17px;
}

.project-points {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 26px;
}

.project-points div,
.project-side {
  background: rgba(255, 248, 235, 0.76);
  border: 1px solid rgba(255, 106, 28, 0.14);
  border-radius: 22px;
  padding: 18px;
}

.mini-card {
  transition: transform 0.22s ease, background 0.22s ease;
}

.mini-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 218, 98, 0.35);
}

.project-points h4,
.project-side h4 {
  margin-bottom: 8px;
  color: var(--orange);
}

.project-points p,
.project-side li {
  color: var(--muted);
  font-size: 14px;
}

.project-side ul {
  list-style: none;
  display: grid;
  gap: 12px;
  margin-top: 14px;
}

.project-side li {
  position: relative;
  padding-left: 20px;
}

.project-side li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  border-radius: 99px;
  background: var(--orange);
  box-shadow: 0 0 16px rgba(255, 106, 28, 0.48);
}

.timeline {
  position: relative;
  display: grid;
  gap: 22px;
  max-width: 1040px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 13px;
  top: 14px;
  bottom: 14px;
  width: 2px;
  background: linear-gradient(var(--orange), rgba(255, 174, 86, 0.18));
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 20px;
}

.timeline-dot {
  width: 28px;
  height: 28px;
  border-radius: 99px;
  background: linear-gradient(135deg, var(--yellow), var(--peach), var(--pink));
  box-shadow: 0 0 0 8px rgba(255, 106, 28, 0.12);
  position: relative;
  z-index: 1;
  animation: pulseDot 2.8s ease-in-out infinite;
}

.timeline-content {
  border-radius: 28px;
  padding: 22px;
}

.timeline-content span {
  color: var(--orange);
  font-size: 13px;
  font-weight: 950;
  letter-spacing: 0.1em;
}

.timeline-content h3 {
  margin: 5px 0 8px;
  font-size: 20px;
}

.timeline-content p {
  color: var(--muted);
}

.achievement-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

.achievement-card {
  border-radius: 30px;
  padding: 26px;
}

.achievement-card span {
  display: inline-grid;
  place-items: center;
  width: 46px;
  height: 46px;
  margin-bottom: 18px;
  color: var(--text);
  font-weight: 950;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--yellow), var(--peach), var(--pink));
}

.achievement-card h3 {
  margin-bottom: 12px;
  font-size: 21px;
}

.achievement-card p {
  color: var(--muted);
}

.rating-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.rating-card {
  position: relative;
  overflow: hidden;
  border-radius: 34px;
  padding: 28px;
}

.rating-card::before {
  content: "";
  position: absolute;
  width: 220px;
  height: 220px;
  right: -120px;
  top: -120px;
  border-radius: 999px;
  background: rgba(245, 120, 139, 0.18);
  filter: blur(20px);
}

.rating-card-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  position: relative;
}

.rating-card-header p {
  color: var(--orange);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 12px;
  font-weight: 900;
}

.rating-card-header h3 {
  font-size: 24px;
  letter-spacing: -0.03em;
}

.rating-list {
  position: relative;
  display: grid;
  gap: 18px;
}

.rating-row {
  padding: 16px;
  border-radius: 22px;
  border: 1px solid rgba(255, 106, 28, 0.15);
  background: rgba(255, 248, 235, 0.76);
  transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease;
}

.rating-row:hover {
  transform: translateX(7px);
  border-color: rgba(255, 106, 28, 0.32);
  background: rgba(255, 218, 98, 0.32);
}

.rating-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 6px;
}

.skill-name {
  font-weight: 850;
}

.score {
  color: var(--orange);
  font-weight: 850;
  font-size: 13px;
}

.rating-stars {
  display: flex;
  gap: 5px;
  line-height: 1;
  margin-bottom: 10px;
}

.star {
  font-size: 19px;
  letter-spacing: 1px;
}

.star.full {
  color: var(--orange);
  text-shadow: 0 0 12px rgba(255, 106, 28, 0.24);
}

.star.half {
  background: linear-gradient(90deg, var(--orange) 50%, rgba(255, 106, 28, 0.20) 50%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.star.empty {
  color: rgba(255, 106, 28, 0.20);
}

.skill-bar {
  height: 7px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255, 106, 28, 0.12);
}

.skill-bar span {
  display: block;
  height: 100%;
  width: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--orange), var(--peach), var(--yellow), var(--pink));
  box-shadow: 0 0 18px rgba(255, 106, 28, 0.28);
  transition: width 1.2s ease;
}

.rating-row.visible .skill-bar span {
  width: var(--value);
}

.contact {
  padding-bottom: 110px;
}

.contact-box {
  position: relative;
  overflow: hidden;
  max-width: 940px;
  margin: 0 auto;
  padding: 44px;
  border-radius: 36px;
  text-align: center;
}

.contact-box::before {
  content: "";
  position: absolute;
  width: 260px;
  height: 260px;
  left: 50%;
  top: -180px;
  transform: translateX(-50%);
  border-radius: 999px;
  background: rgba(255, 218, 98, 0.38);
  filter: blur(35px);
  animation: breathe 5s ease-in-out infinite;
}

.contact-box h2 {
  position: relative;
  font-size: clamp(34px, 5vw, 60px);
  line-height: 1;
  letter-spacing: -0.05em;
  margin-bottom: 22px;
}

.contact-links {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 10px;
}

.contact-links a {
  padding: 12px 15px;
  border-radius: 999px;
  text-decoration: none;
  color: var(--text);
  font-weight: 900;
  background: linear-gradient(135deg, var(--yellow), var(--peach), var(--pink));
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.contact-links a:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(255, 106, 28, 0.20);
}

footer {
  padding: 24px 8%;
  text-align: center;
  color: var(--muted);
  border-top: 1px solid var(--line);
  background: rgba(255, 248, 235, 0.72);
}

.reveal {
  opacity: 0;
  transition: opacity 0.85s ease, transform 0.85s ease, filter 0.85s ease;
  filter: blur(8px);
}

.reveal.visible {
  opacity: 1;
  transform: translate(0, 0) scale(1);
  filter: blur(0);
}

.reveal-up {
  transform: translateY(34px);
}

.reveal-left {
  transform: translateX(-42px);
}

.reveal-right {
  transform: translateX(42px);
}

.reveal-scale {
  transform: scale(0.94);
}

.delay-1 {
  transition-delay: 0.12s;
}

.delay-2 {
  transition-delay: 0.22s;
}

.delay-3 {
  transition-delay: 0.32s;
}

.delay-4 {
  transition-delay: 0.42s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-18px) rotate(8deg);
  }
}

@keyframes drift {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(16px, -20px, 0) rotate(10deg);
  }
}

@keyframes blobMove {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(24px, -20px, 0) scale(1.08);
  }
}

@keyframes breathe {
  0%, 100% {
    opacity: 0.35;
    transform: scale(1);
  }
  50% {
    opacity: 0.75;
    transform: scale(1.18);
  }
}

@keyframes dotPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.65;
  }
  50% {
    transform: scale(1.25);
    opacity: 1;
  }
}

@keyframes pulseDot {
  0%, 100% {
    box-shadow: 0 0 0 8px rgba(255, 106, 28, 0.12);
  }
  50% {
    box-shadow: 0 0 0 13px rgba(255, 106, 28, 0.04);
  }
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 10px 30px rgba(255, 106, 28, 0.20);
  }
  50% {
    box-shadow: 0 10px 42px rgba(245, 120, 139, 0.26);
  }
}

@keyframes gradientMove {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes shine {
  0%, 55% {
    transform: translateX(-110%);
  }
  100% {
    transform: translateX(110%);
  }
}

@media (max-width: 1050px) {
  .hero,
  .about-grid,
  .project-showcase,
  .rating-layout {
    grid-template-columns: 1fr;
  }

  .project-points {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 820px) {
  .cursor-light {
    display: none;
  }

  .section-padding {
    padding: 72px 6%;
  }

  .menu-btn {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 76px;
    left: 6%;
    right: 6%;
    display: none;
    flex-direction: column;
    padding: 18px;
    border: 1px solid var(--line);
    border-radius: 22px;
    background: rgba(255, 248, 235, 0.96);
    box-shadow: var(--shadow);
  }

  .nav-links.open {
    display: flex;
  }

  .hero {
    gap: 34px;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: 1fr;
  }

  .achievement-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .hero h1 {
    letter-spacing: -0.055em;
  }

  .focus-item {
    grid-template-columns: 1fr;
  }

  .contact-box {
    padding: 30px 22px;
  }

  .rating-card {
    padding: 22px;
  }

  .rating-top {
    align-items: flex-start;
    flex-direction: column;
    gap: 2px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
    filter: none;
  }

  .skill-bar span {
    width: var(--value);
  }
}


/* Contact icon buttons */
.contact-links-icon {
  gap: 16px;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 18px;
}

.contact-icon {
  width: 24px;
  height: 24px;
  display: inline-grid;
  place-items: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
}

.contact-icon svg {
  width: 17px;
  height: 17px;
  display: block;
  fill: currentColor;
}

.contact-button:hover .contact-icon {
  transform: rotate(-6deg) scale(1.08);
}

.contact-icon {
  transition: transform 0.22s ease;
}

/* SVG icons inside focus-icon and rating-icon */
.focus-icon svg,
.rating-icon svg {
  width: 26px;
  height: 26px;
  display: block;
  fill: none;
  stroke: var(--text);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Override fill for icons that use fill */
.focus-icon svg[fill="currentColor"] {
  fill: var(--text);
  stroke: none;
}
