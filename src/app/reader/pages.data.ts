// reader/pages.data.ts

export interface ComicPage {
  title: string;
  render: (svg: SVGElement) => void;
}

export const PAGES: ComicPage[] = [
  {
    title: 'Page 1 — Title',
    render: (svg) => {
      svg.innerHTML = `
        <defs>
          <linearGradient id="bg1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0a0910"/>
            <stop offset="100%" stop-color="#0e0d0b"/>
          </linearGradient>
        </defs>
        <rect width="700" height="1050" fill="url(#bg1)"/>
        <!-- Full-bleed establishing shot -->
        <rect x="20" y="20" width="660" height="580" fill="#111" rx="2"/>
        <!-- Rain lines -->
        ${Array.from({length:50},(_,i)=>`<line x1="${50+i*13}" y1="${20+Math.random()*100}" x2="${44+i*13}" y2="${80+Math.random()*100}" stroke="#1e2030" stroke-width="0.8" opacity="${0.3+Math.random()*0.4}"/>`).join('')}
        <!-- City bg -->
        <rect x="20" y="20" width="660" height="580" fill="none"/>
        <rect x="20" y="200" width="100" height="400" fill="#0d0c0a"/>
        <rect x="35" y="170" width="70" height="430" fill="#111315"/>
        <rect x="130" y="250" width="80" height="350" fill="#0d0c0a"/>
        <rect x="145" y="220" width="50" height="380" fill="#121110"/>
        <rect x="220" y="180" width="120" height="420" fill="#0e0d0b"/>
        <rect x="240" y="155" width="80" height="445" fill="#111"/>
        <rect x="355" y="220" width="90" height="380" fill="#0d0c0a"/>
        <rect x="460" y="170" width="100" height="430" fill="#111315"/>
        <rect x="480" y="140" width="60" height="460" fill="#0e0d0b"/>
        <rect x="570" y="200" width="110" height="400" fill="#0d0c0a"/>
        <!-- Window lights scattered -->
        ${Array.from({length:30},(_,i)=>`<rect x="${30+Math.floor(i*21.5)}" y="${180+Math.floor(Math.random()*200)}" width="5" height="7" fill="${Math.random()>0.5?'#f0a500':'#c8372d'}" opacity="${0.3+Math.random()*0.5}"/>`).join('')}
        <!-- Moon -->
        <circle cx="560" cy="80" r="55" fill="#f0a500" opacity="0.7"/>
        <circle cx="582" cy="65" r="50" fill="#0a0910"/>
        <!-- Street / puddle reflection -->
        <rect x="20" y="560" width="660" height="40" fill="#0a0c10" opacity="0.8"/>
        <!-- Walking figure -->
        <ellipse cx="350" cy="530" rx="20" ry="22" fill="#090909"/>
        <rect x="335" y="510" width="30" height="45" fill="#0a0a0a" rx="2"/>
        <ellipse cx="350" cy="507" rx="18" ry="20" fill="#111"/>
        <path d="M330 520 Q325 545 327 560 L333 560 Q338 540 342 520Z" fill="#131211"/>
        <path d="M370 520 Q375 545 373 560 L367 560 Q362 540 358 520Z" fill="#131211"/>
        <!-- Title block -->
        <rect x="20" y="620" width="660" height="240" fill="#0e0d0b" rx="2"/>
        <line x1="20" y1="620" x2="680" y2="620" stroke="#c8372d" stroke-width="3"/>
        <text x="350" y="700" font-family="'Bebas Neue', Impact, sans-serif" font-size="88" fill="#f5f0e8" text-anchor="middle" letter-spacing="10">VOIDLINE</text>
        <text x="350" y="745" font-family="'Barlow Condensed', sans-serif" font-size="28" fill="#c8372d" text-anchor="middle" letter-spacing="8">THE DETECTIVE</text>
        <line x1="120" y1="760" x2="580" y2="760" stroke="rgba(245,240,232,0.15)" stroke-width="1"/>
        <text x="350" y="788" font-family="'Barlow Condensed', sans-serif" font-size="16" fill="rgba(245,240,232,0.4)" text-anchor="middle" letter-spacing="5">ISSUE #1 — INTO THE DARK</text>
        <!-- Bottom caption box -->
        <rect x="20" y="880" width="660" height="150" fill="#090909" rx="2"/>
        <rect x="40" y="900" width="4" height="110" fill="#c8372d"/>
        <text x="60" y="930" font-family="'Barlow', sans-serif" font-style="italic" font-size="18" fill="rgba(245,240,232,0.7)">Some cities eat their dead.</text>
        <text x="60" y="960" font-family="'Barlow', sans-serif" font-style="italic" font-size="18" fill="rgba(245,240,232,0.7)">This one eats its detectives.</text>
        <text x="60" y="1000" font-family="'Barlow Condensed', sans-serif" font-size="14" fill="rgba(245,240,232,0.35)" letter-spacing="2">CHAPTER ONE</text>
      `;
    }
  },
  {
    title: 'Page 2',
    render: (svg) => {
      svg.innerHTML = `
        <rect width="700" height="1050" fill="#f5f0e8"/>
        <!-- Panel 1: Top wide - street scene -->
        <rect x="20" y="20" width="660" height="250" fill="#1a1816" rx="1"/>
        <rect x="20" y="20" width="660" height="250" fill="none" stroke="#0e0d0b" stroke-width="3" rx="1"/>
        <!-- Rain in panel 1 -->
        ${Array.from({length:40},(_,i)=>`<line x1="${20+i*17}" y1="${20}" x2="${15+i*17}" y2="${60}" stroke="#2a2830" stroke-width="0.6" opacity="0.5"/>`).join('')}
        <rect x="20" y="180" width="660" height="90" fill="#111" opacity="0.9"/>
        <!-- Figure walking -->
        <ellipse cx="200" cy="190" rx="15" ry="16" fill="#090909"/>
        <rect x="188" y="175" width="24" height="35" fill="#0a0a0a" rx="1"/>
        <path d="M182 185 Q178 208 180 225 L186 225 Q190 208 194 185Z" fill="#131211"/>
        <path d="M218 185 Q222 208 220 225 L214 225 Q210 208 206 185Z" fill="#131211"/>
        <!-- Caption box in panel 1 -->
        <rect x="35" y="35" width="220" height="35" fill="rgba(200,55,45,0.9)" rx="1"/>
        <text x="45" y="57" font-family="'Barlow', sans-serif" font-style="italic" font-size="14" fill="white">It had been raining for three days.</text>
        <!-- Panel 2: Medium left -->
        <rect x="20" y="290" width="320" height="230" fill="#111" rx="1" stroke="#0e0d0b" stroke-width="3"/>
        <!-- Close-up face (abstract) -->
        <ellipse cx="180" cy="405" rx="70" ry="75" fill="#1e1c1a"/>
        <ellipse cx="155" cy="385" rx="12" ry="14" fill="#090909"/>
        <ellipse cx="205" cy="385" rx="12" ry="14" fill="#090909"/>
        <circle cx="157" cy="383" r="3" fill="#c8372d"/>
        <circle cx="207" cy="383" r="3" fill="#c8372d"/>
        <path d="M160 415 Q180 425 200 415" stroke="#090909" stroke-width="2.5" fill="none"/>
        <!-- Speech bubble -->
        <rect x="30" y="295" width="200" height="55" fill="#f5f0e8" rx="3" stroke="#0e0d0b" stroke-width="1.5"/>
        <polygon points="80,350 95,350 88,362" fill="#f5f0e8" stroke="#0e0d0b" stroke-width="1.5" stroke-linejoin="round"/>
        <text x="50" y="320" font-family="'Barlow', sans-serif" font-size="13" fill="#0e0d0b">The name was</text>
        <text x="50" y="338" font-family="'Barlow', sans-serif" font-size="13" fill="#0e0d0b">Mira Voss. Missing.</text>
        <!-- Panel 3: Medium right -->
        <rect x="360" y="290" width="320" height="230" fill="#14120f" rx="1" stroke="#0e0d0b" stroke-width="3"/>
        <!-- Photograph on desk -->
        <rect x="420" y="350" width="90" height="120" fill="#f0ece0" transform="rotate(-5, 465, 410)"/>
        <rect x="428" y="358" width="74" height="90" fill="#ccc" transform="rotate(-5, 465, 410)"/>
        <!-- Silhouette in photo -->
        <ellipse cx="465" cy="378" rx="18" ry="18" fill="#888" transform="rotate(-5, 465, 410)"/>
        <rect x="451" y="393" width="28" height="40" fill="#999" transform="rotate(-5, 465, 410)" rx="1"/>
        <!-- Desk items -->
        <rect x="380" y="480" width="280" height="8" fill="#0e0d0b" opacity="0.5" rx="1"/>
        <!-- SFX -->
        <text x="540" y="380" font-family="'Bebas Neue', Impact, sans-serif" font-size="28" fill="#c8372d" opacity="0.8" transform="rotate(10, 540, 370)">RING</text>
        <!-- Panel 4: Bottom wide -->
        <rect x="20" y="540" width="660" height="220" fill="#0d0c0a" rx="1" stroke="#0e0d0b" stroke-width="3"/>
        <!-- Phone close-up panel -->
        <rect x="260" y="555" width="80" height="140" rx="8" fill="#1a1816" stroke="#333" stroke-width="2"/>
        <rect x="268" y="565" width="64" height="100" fill="#151515" rx="4"/>
        <rect x="262" y="680" width="72" height="12" fill="#111" rx="6"/>
        <!-- Screen glow -->
        <rect x="270" y="568" width="60" height="96" fill="#1a2a1a" rx="3" opacity="0.7"/>
        <text x="300" y="600" font-family="'Barlow Condensed', sans-serif" font-size="9" fill="#5a9" text-anchor="middle">UNKNOWN</text>
        <text x="300" y="620" font-family="'Bebas Neue', Impact, sans-serif" font-size="22" fill="#7dc" text-anchor="middle" opacity="0.9">ACCEPT</text>
        <!-- Caption -->
        <rect x="35" y="560" width="200" height="32" fill="rgba(200,55,45,0.85)" rx="1"/>
        <text x="45" y="580" font-family="'Barlow', sans-serif" font-style="italic" font-size="13" fill="white">Then the phone rang.</text>
        <!-- Panel 5: Bottom caption strip -->
        <rect x="20" y="780" width="660" height="250" fill="#090909" rx="1" stroke="#0e0d0b" stroke-width="3"/>
        <rect x="40" y="800" width="3" height="210" fill="#c8372d"/>
        <text x="58" y="835" font-family="'Barlow', sans-serif" font-style="italic" font-size="17" fill="rgba(245,240,232,0.8)">Three days without work. Without sleep.</text>
        <text x="58" y="865" font-family="'Barlow', sans-serif" font-style="italic" font-size="17" fill="rgba(245,240,232,0.8)">And still the city wouldn't let me rest.</text>
        <text x="58" y="920" font-family="'Barlow', sans-serif" font-style="italic" font-size="16" fill="rgba(245,240,232,0.55)">[CAPTION PLACEHOLDER — Add inner monologue or narration here]</text>
        <text x="58" y="950" font-family="'Barlow', sans-serif" font-style="italic" font-size="16" fill="rgba(245,240,232,0.55)">[CAPTION PLACEHOLDER — Continue scene-setting text]</text>
        <text x="600" y="1015" font-family="'Barlow Condensed', sans-serif" font-size="14" fill="rgba(245,240,232,0.25)" letter-spacing="2">PAGE 2</text>
      `;
    }
  },
  {
    title: "Page 3",
    render: (svg) => {
      svg.innerHTML = `
        <rect width="700" height="1050" fill="#f0ece0"/>
        <!-- 6-panel grid -->
        <!-- Row 1 -->
        <rect x="20" y="20" width="210" height="200" fill="#1a1816" stroke="#0e0d0b" stroke-width="3" rx="1"/>
        <rect x="245" y="20" width="210" height="200" fill="#111" stroke="#0e0d0b" stroke-width="3" rx="1"/>
        <rect x="470" y="20" width="210" height="200" fill="#1a1816" stroke="#0e0d0b" stroke-width="3" rx="1"/>
        <!-- Row 2 -->
        <rect x="20" y="235" width="435" height="300" fill="#111" stroke="#0e0d0b" stroke-width="3" rx="1"/>
        <rect x="470" y="235" width="210" height="300" fill="#1a1816" stroke="#0e0d0b" stroke-width="3" rx="1"/>
        <!-- Row 3 -->
        <rect x="20" y="550" width="210" height="200" fill="#14120f" stroke="#0e0d0b" stroke-width="3" rx="1"/>
        <rect x="245" y="550" width="435" height="200" fill="#0e0d0b" stroke="#0e0d0b" stroke-width="3" rx="1"/>
        <!-- Speech bubbles -->
        <rect x="30" y="30" width="190" height="55" fill="#f5f0e8" stroke="#0e0d0b" stroke-width="1.5" rx="3"/>
        <polygon points="60,85 75,85 68,97" fill="#f5f0e8" stroke="#0e0d0b" stroke-width="1.5" stroke-linejoin="round"/>
        <text x="40" y="55" font-family="'Barlow', sans-serif" font-size="12" fill="#0e0d0b">Who gave you</text>
        <text x="40" y="73" font-family="'Barlow', sans-serif" font-size="12" fill="#0e0d0b">this number?</text>

        <rect x="255" y="30" width="190" height="55" fill="#f5f0e8" stroke="#0e0d0b" stroke-width="1.5" rx="3"/>
        <polygon points="310,85 325,85 318,97" fill="#f5f0e8" stroke="#0e0d0b" stroke-width="1.5" stroke-linejoin="round"/>
        <text x="265" y="55" font-family="'Barlow', sans-serif" font-size="12" fill="#0e0d0b">[DIALOGUE]</text>
        <text x="265" y="73" font-family="'Barlow', sans-serif" font-size="12" fill="#0e0d0b">[PLACEHOLDER]</text>

        <!-- Figure in panel 1 -->
        <ellipse cx="125" cy="160" rx="25" ry="26" fill="#2a2825"/>
        <rect x="107" y="140" width="36" height="50" fill="#222" rx="2"/>
        <!-- Figure in panel 2 -->
        <ellipse cx="350" cy="155" rx="20" ry="21" fill="#222"/>
        <rect x="335" y="136" width="30" height="48" fill="#1a1816" rx="1"/>

        <!-- Large panel elements -->
        <rect x="40" y="245" width="3" height="280" fill="#c8372d" opacity="0.6"/>
        <text x="58" y="290" font-family="'Barlow', sans-serif" font-style="italic" font-size="16" fill="rgba(245,240,232,0.7)">I was in my office when she called.</text>
        <text x="58" y="315" font-family="'Barlow', sans-serif" font-style="italic" font-size="16" fill="rgba(245,240,232,0.7)">[NARRATION PLACEHOLDER]</text>
        <!-- Office scene sketch -->
        <rect x="100" y="360" width="300" height="150" fill="#111" rx="2" opacity="0.5"/>
        <rect x="120" y="390" width="260" height="8" fill="#222"/>
        <rect x="120" y="408" width="200" height="8" fill="#222"/>
        <rect x="120" y="426" width="230" height="8" fill="#222"/>
        <ellipse cx="380" cy="430" rx="40" ry="40" fill="#1a1816"/>
        <ellipse cx="380" cy="425" rx="28" ry="32" fill="#2a2825"/>
        <circle cx="370" cy="418" r="7" fill="#0e0d0b"/>
        <circle cx="390" cy="418" r="7" fill="#0e0d0b"/>

        <!-- SFX in bottom right panel -->
        <text x="480" y="640" font-family="'Bebas Neue', Impact, sans-serif" font-size="52" fill="#c8372d" opacity="0.9" transform="rotate(-8,575,640)">KNOCK</text>
        <text x="530" y="690" font-family="'Bebas Neue', Impact, sans-serif" font-size="38" fill="#f0a500" opacity="0.8" transform="rotate(-8,575,690)">KNOCK</text>

        <!-- Bottom captions -->
        <rect x="255" y="560" width="3" height="180" fill="#c8372d" opacity="0.7"/>
        <text x="272" y="595" font-family="'Barlow', sans-serif" font-style="italic" font-size="16" fill="rgba(245,240,232,0.8)">Then someone knocked.</text>
        <text x="272" y="620" font-family="'Barlow', sans-serif" font-style="italic" font-size="15" fill="rgba(245,240,232,0.55)">[CAPTION: describe who enters or what follows]</text>
        <text x="272" y="645" font-family="'Barlow', sans-serif" font-style="italic" font-size="15" fill="rgba(245,240,232,0.55)">[CAPTION: inner monologue continues]</text>

        <!-- Bottom strip -->
        <rect x="20" y="765" width="660" height="265" fill="#090909" stroke="#0e0d0b" stroke-width="3" rx="1"/>
        <rect x="40" y="785" width="3" height="225" fill="#f0a500"/>
        <text x="58" y="825" font-family="'Barlow', sans-serif" font-style="italic" font-size="17" fill="rgba(245,240,232,0.8)">[CHAPTER CAPTION — key story beat]</text>
        <text x="58" y="858" font-family="'Barlow', sans-serif" font-style="italic" font-size="16" fill="rgba(245,240,232,0.55)">[SUBTITLE CAPTION PLACEHOLDER]</text>
        <text x="600" y="1015" font-family="'Barlow Condensed', sans-serif" font-size="14" fill="rgba(245,240,232,0.25)" letter-spacing="2">PAGE 3</text>
      `;
    }
  },
  // Page 4 — Splash / key moment
  {
    title: "Page 4 — Splash",
    render: (svg) => {
      svg.innerHTML = `
        <defs>
          <radialGradient id="splashGrad" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#1a1220"/>
            <stop offset="100%" stop-color="#0a0809"/>
          </radialGradient>
        </defs>
        <rect width="700" height="1050" fill="url(#splashGrad)"/>
        <!-- Full splash page - dramatic moment -->
        <rect x="20" y="20" width="660" height="800" fill="none" stroke="#c8372d" stroke-width="4" rx="1"/>

        <!-- Background: alley or corridor -->
        <!-- Floor perspective lines -->
        <line x1="350" y1="400" x2="0" y2="820" stroke="#1a1816" stroke-width="12"/>
        <line x1="350" y1="400" x2="700" y2="820" stroke="#1a1816" stroke-width="12"/>
        <line x1="350" y1="400" x2="0" y2="650" stroke="#151315" stroke-width="6"/>
        <line x1="350" y1="400" x2="700" y2="650" stroke="#151315" stroke-width="6"/>
        <line x1="350" y1="400" x2="140" y2="820" stroke="#111" stroke-width="3"/>
        <line x1="350" y1="400" x2="560" y2="820" stroke="#111" stroke-width="3"/>
        <!-- Walls -->
        <rect x="20" y="20" width="200" height="800" fill="#0e0d0b" opacity="0.7"/>
        <rect x="480" y="20" width="200" height="800" fill="#0e0d0b" opacity="0.7"/>

        <!-- Light cone from above -->
        <polygon points="350,30 200,820 500,820" fill="#f0a500" opacity="0.04"/>
        <polygon points="350,30 260,820 440,820" fill="#f0a500" opacity="0.05"/>
        <polygon points="350,30 310,820 390,820" fill="#f0a500" opacity="0.07"/>

        <!-- Central figure - hero pose (abstract) -->
        <!-- Shadow cast on floor -->
        <ellipse cx="350" cy="800" rx="80" ry="15" fill="#090909" opacity="0.8"/>
        <!-- Coat/figure body -->
        <path d="M290 750 Q280 680 285 620 Q295 570 350 555 Q405 570 415 620 Q420 680 410 750Z" fill="#151311"/>
        <path d="M285 620 Q268 610 260 590 Q262 560 280 555 Q293 560 295 575Z" fill="#111"/>
        <path d="M415 620 Q432 610 440 590 Q438 560 420 555 Q407 560 405 575Z" fill="#111"/>
        <!-- Head -->
        <ellipse cx="350" cy="538" rx="30" ry="34" fill="#1a1816"/>
        <!-- Hat brim -->
        <ellipse cx="350" cy="515" rx="45" ry="9" fill="#0e0d0b"/>
        <rect x="315" y="502" width="70" height="18" fill="#0e0d0b" rx="3"/>
        <!-- Face shadow -->
        <rect x="320" y="518" width="60" height="28" fill="#090909" opacity="0.8"/>
        <!-- Eyes - two points of light -->
        <circle cx="336" cy="530" r="3" fill="#c8372d" opacity="0.9"/>
        <circle cx="364" cy="530" r="3" fill="#c8372d" opacity="0.9"/>
        <!-- Legs -->
        <rect x="323" y="745" width="22" height="55" fill="#0e0d0b" rx="2"/>
        <rect x="355" y="745" width="22" height="55" fill="#0e0d0b" rx="2"/>
        <rect x="318" y="795" width="32" height="12" fill="#111" rx="2"/>
        <rect x="350" y="795" width="32" height="12" fill="#111" rx="2"/>

        <!-- Splatter / blood (noir) -->
        <circle cx="180" cy="300" r="3" fill="#c8372d" opacity="0.6"/>
        <circle cx="172" cy="292" r="2" fill="#c8372d" opacity="0.4"/>
        <circle cx="188" cy="308" r="4" fill="#c8372d" opacity="0.5"/>
        <circle cx="165" cy="310" r="2" fill="#c8372d" opacity="0.35"/>
        <circle cx="520" cy="250" r="5" fill="#c8372d" opacity="0.4"/>
        <circle cx="530" cy="260" r="2" fill="#c8372d" opacity="0.3"/>

        <!-- SFX top -->
        <text x="350" y="100" font-family="'Bebas Neue', Impact, sans-serif" font-size="80" fill="#f5f0e8" text-anchor="middle" letter-spacing="8" opacity="0.08">SILENCE</text>

        <!-- Caption box top left -->
        <rect x="30" y="35" width="3" height="80" fill="#c8372d"/>
        <text x="42" y="65" font-family="'Barlow', sans-serif" font-style="italic" font-size="18" fill="rgba(245,240,232,0.9)">I found her.</text>
        <text x="42" y="92" font-family="'Barlow', sans-serif" font-style="italic" font-size="16" fill="rgba(245,240,232,0.6)">[CAPTION PLACEHOLDER]</text>

        <!-- Bottom caption -->
        <rect x="20" y="840" width="660" height="190" fill="#090909" rx="1"/>
        <rect x="40" y="858" width="3" height="154" fill="#c8372d"/>
        <text x="58" y="895" font-family="'Barlow', sans-serif" font-style="italic" font-size="18" fill="rgba(245,240,232,0.85)">[DRAMATIC CAPTION — key revelation or turning point]</text>
        <text x="58" y="928" font-family="'Barlow', sans-serif" font-style="italic" font-size="17" fill="rgba(245,240,232,0.6)">[NARRATION PLACEHOLDER — inner monologue or scene description]</text>
        <text x="58" y="965" font-family="'Barlow', sans-serif" font-style="italic" font-size="16" fill="rgba(245,240,232,0.4)">[CONTINUATION OF NARRATION PLACEHOLDER]</text>
        <text x="600" y="1015" font-family="'Barlow Condensed', sans-serif" font-size="14" fill="rgba(245,240,232,0.25)" letter-spacing="2">PAGE 4</text>
      `;
    }
  },
  // Page 5 — End / cliffhanger
  {
    title: "Page 5 — End",
    render: (svg) => {
      svg.innerHTML = `
        <rect width="700" height="1050" fill="#f0ece0"/>
        <!-- 4-panel ending sequence -->
        <!-- Panel 1: top left -->
        <rect x="20" y="20" width="320" height="290" fill="#111" stroke="#0e0d0b" stroke-width="3" rx="1"/>
        <!-- Panel 2: top right -->
        <rect x="355" y="20" width="325" height="290" fill="#1a1816" stroke="#0e0d0b" stroke-width="3" rx="1"/>
        <!-- Panel 3: middle wide -->
        <rect x="20" y="325" width="660" height="220" fill="#0e0d0b" stroke="#0e0d0b" stroke-width="3" rx="1"/>
        <!-- Panel 4: bottom left -->
        <rect x="20" y="560" width="320" height="220" fill="#14120f" stroke="#0e0d0b" stroke-width="3" rx="1"/>
        <!-- Panel 5: bottom right — cliffhanger -->
        <rect x="355" y="560" width="325" height="220" fill="#090909" stroke="#c8372d" stroke-width="3" rx="1"/>

        <!-- Panel 1 contents: dialogue scene -->
        <rect x="35" y="30" width="190" height="55" fill="#f5f0e8" stroke="#0e0d0b" stroke-width="1.5" rx="3"/>
        <polygon points="80,85 95,85 88,97" fill="#f5f0e8" stroke="#0e0d0b" stroke-width="1.5" stroke-linejoin="round"/>
        <text x="45" y="55" font-family="'Barlow', sans-serif" font-size="13" fill="#0e0d0b">[DIALOGUE]</text>
        <text x="45" y="73" font-family="'Barlow', sans-serif" font-size="13" fill="#0e0d0b">[PLACEHOLDER TEXT]</text>
        <!-- Two-figure scene -->
        <ellipse cx="140" cy="240" rx="20" ry="22" fill="#1a1816"/>
        <rect x="125" y="225" width="30" height="50" fill="#111" rx="2"/>
        <ellipse cx="250" cy="240" rx="20" ry="22" fill="#222"/>
        <rect x="235" y="225" width="30" height="48" fill="#1a1816" rx="2"/>

        <!-- Panel 2 contents: close-up hands / item -->
        <rect x="380" y="100" width="120" height="160" fill="#1e1c18" rx="3" stroke="#333" stroke-width="1"/>
        <!-- Document / photo prop -->
        <rect x="390" y="110" width="100" height="130" fill="#f0ece0" rx="2"/>
        <rect x="398" y="120" width="60" height="8" fill="#ccc" rx="2"/>
        <rect x="398" y="134" width="75" height="6" fill="#ddd" rx="2"/>
        <rect x="398" y="146" width="50" height="6" fill="#ccc" rx="2"/>
        <rect x="398" y="165" width="80" height="40" fill="#bbb" rx="1"/>
        <!-- Hands holding document -->
        <rect x="375" y="220" width="30" height="50" fill="#b8a898" rx="4"/>
        <rect x="460" y="220" width="30" height="50" fill="#b8a898" rx="4"/>
        <rect x="365" y="30" width="180" height="40" fill="rgba(200,55,45,0.8)" rx="1"/>
        <text x="375" y="55" font-family="'Barlow', sans-serif" font-style="italic" font-size="13" fill="white">[CAPTION PLACEHOLDER]</text>

        <!-- Panel 3: action/chase wide panel -->
        <rect x="40" y="335" width="3" height="200" fill="#c8372d" opacity="0.8"/>
        <text x="58" y="380" font-family="'Barlow', sans-serif" font-style="italic" font-size="17" fill="rgba(245,240,232,0.85)">[WIDE ACTION PANEL — narration or inner monologue here]</text>
        <text x="58" y="410" font-family="'Barlow', sans-serif" font-style="italic" font-size="16" fill="rgba(245,240,232,0.55)">[DESCRIPTION OF KEY ACTION OR EVENT PLACEHOLDER]</text>
        <!-- Running figures (abstract) -->
        <ellipse cx="400" cy="460" rx="16" ry="17" fill="#1a1816"/>
        <path d="M386 448 Q380 465 378 485 L384 485 Q390 468 396 448Z" fill="#111"/>
        <path d="M414 448 Q422 460 418 485 L412 485 Q408 468 404 448Z" fill="#111"/>
        <ellipse cx="560" cy="455" rx="14" ry="15" fill="#2a2825"/>
        <path d="M548 444 Q542 461 540 480 L546 480 Q552 463 558 444Z" fill="#1a1816"/>
        <path d="M572 444 Q580 456 576 480 L570 480 Q566 463 562 444Z" fill="#1a1816"/>
        <text x="480" y="430" font-family="'Bebas Neue', Impact, sans-serif" font-size="36" fill="#c8372d" opacity="0.7" transform="rotate(-5,480,430)">RUN</text>

        <!-- Panel 4: resolution -->
        <rect x="35" y="570" width="190" height="50" fill="#f5f0e8" stroke="#0e0d0b" stroke-width="1.5" rx="3"/>
        <polygon points="80,620 95,620 88,632" fill="#f5f0e8" stroke="#0e0d0b" stroke-width="1.5" stroke-linejoin="round"/>
        <text x="45" y="593" font-family="'Barlow', sans-serif" font-size="12" fill="#0e0d0b">[DIALOGUE PLACEHOLDER]</text>
        <text x="45" y="613" font-family="'Barlow', sans-serif" font-size="12" fill="#0e0d0b">[CHARACTER LINE]</text>
        <!-- Figure by window -->
        <rect x="240" y="610" width="80" height="140" fill="#0a0c10" rx="2" opacity="0.6"/>
        <rect x="248" y="618" width="64" height="60" fill="#101520" rx="1"/>
        <ellipse cx="180" cy="720" rx="18" ry="19" fill="#1a1816"/>
        <rect x="166" y="705" width="28" height="42" fill="#111" rx="1"/>

        <!-- Panel 5: cliffhanger - red tint, dramatic -->
        <rect x="355" y="560" width="325" height="220" fill="#1a0808"/>
        <rect x="355" y="560" width="325" height="220" fill="none" stroke="#c8372d" stroke-width="3"/>
        <!-- Shadow figure doorway -->
        <rect x="485" y="565" width="70" height="210" fill="#0a0808" opacity="0.8"/>
        <!-- Silhouette in doorway -->
        <ellipse cx="520" cy="610" rx="22" ry="24" fill="#090505"/>
        <rect x="504" y="590" width="32" height="55" fill="#090505" rx="1"/>
        <path d="M496 600 Q490 622 492 636 L498 636 Q503 618 508 600Z" fill="#0a0808"/>
        <path d="M544 600 Q550 622 548 636 L542 636 Q537 618 532 600Z" fill="#0a0808"/>
        <!-- Red eye / glint -->
        <circle cx="512" cy="603" r="3" fill="#c8372d" opacity="0.9"/>
        <circle cx="528" cy="603" r="3" fill="#c8372d" opacity="0.9"/>
        <!-- Cliffhanger text -->
        <text x="520" y="720" font-family="'Bebas Neue', Impact, sans-serif" font-size="28" fill="#c8372d" text-anchor="middle" letter-spacing="4">TO BE</text>
        <text x="520" y="754" font-family="'Bebas Neue', Impact, sans-serif" font-size="28" fill="#f5f0e8" text-anchor="middle" letter-spacing="4">CONTINUED</text>
        <line x1="380" y1="765" x2="650" y2="765" stroke="#c8372d" stroke-width="1.5" opacity="0.5"/>

        <!-- Bottom end bar -->
        <rect x="20" y="800" width="660" height="230" fill="#090909" stroke="#0e0d0b" stroke-width="3" rx="1"/>
        <rect x="40" y="818" width="3" height="194" fill="#f0a500"/>
        <text x="58" y="858" font-family="'Barlow', sans-serif" font-style="italic" font-size="18" fill="rgba(245,240,232,0.85)">[FINAL CAPTION — closing narration or hook line]</text>
        <text x="58" y="892" font-family="'Barlow', sans-serif" font-style="italic" font-size="16" fill="rgba(245,240,232,0.5)">[ENDING MONOLOGUE PLACEHOLDER]</text>
        <text x="58" y="922" font-family="'Barlow', sans-serif" font-style="italic" font-size="15" fill="rgba(245,240,232,0.35)">[FINAL LINE PLACEHOLDER — leave reader wanting more]</text>
        <!-- Issue end marker -->
        <text x="350" y="985" font-family="'Bebas Neue', Impact, sans-serif" font-size="14" fill="rgba(245,240,232,0.2)" text-anchor="middle" letter-spacing="6">END OF ISSUE #1</text>
        <text x="600" y="1015" font-family="'Barlow Condensed', sans-serif" font-size="14" fill="rgba(245,240,232,0.25)" letter-spacing="2">PAGE 5</text>
      `;
    }
  }
];
