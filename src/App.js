import './App.css';
import Navbar from './components/navbar/Navbar';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <section id="home" className="section home">
          <div className="home-bg-squares" aria-hidden="true">
            <span className="home-bg-square square1" />
            <span className="home-bg-square square2" />
            <span className="home-bg-square square3" />
            <span className="home-bg-square square4" />
            <span className="home-bg-square square5" />
            <span className="home-bg-square square6" />
            <span className="home-bg-square square7" />
            <span className="home-bg-square square8" />
            <span className="home-bg-square square9" />
            <span className="home-bg-square square10" />
            <span className="home-bg-square square11" />
            <span className="home-bg-square square12" />
            <span className="home-bg-square square13" />
            <span className="home-bg-square square14" />
          </div>
          <div className="hero-content">
            <StaticWindow>
              <div className="hero-copy-inner">
                <h1><HeroText text="Nicholas Holland" className="hero-title" /></h1>
                <p><HeroText text="Computer Engineer & Game Developer" className="hero-sub" /></p>
              </div>
            </StaticWindow>
            {/* Retro window (image) placed left of the hero text */}
            <RetroWindow />

          </div>
        </section>

        <section id="projects" className="section" data-banner="Projects">
          <div className="section-banner top">
            <div className="banner-track">
              <div className="banner-list">
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
              </div>
              <div className="banner-list">
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
              </div>
            </div>
          </div>
          <div className="section-inner">
            <div className="cards">
              <article className="card">
                <img src="/self_playing_flute_project_image.png" alt="self_playing_flute_project" />
                <h3>Self-Playing Flute</h3>
                <p>FILL IN LATER Uses: C++, microcontroller</p>
                <a className="btn" href="https://github.com/nicholas-holland-901/self_playing_flute" target="_blank" rel="noopener noreferrer">View Repo</a>
              </article>
              <article className="card">
                <img src="/snake_game_image_neural_network.png" alt="snake_game_brain_project" />
                <h3>Neural Network from Scratch</h3>
                <p>FILL IN LATER Uses: C, SDL3</p>
                <a className="btn" href="https://github.com/nicholas-holland-901/snake_game_brain" target="_blank" rel="noopener noreferrer">View Repo</a>
              </article>
              <article className="card">
                <img src="/rackgit_image.png" alt="rackgit_project" />
                <h3>Rackgit</h3>
                <p>FILL IN LATER Uses: Racket</p>
                <a className="btn" href="https://github.com/nicholas-holland-901/rackgit" target="_blank" rel="noopener noreferrer">View Repo</a>
              </article>
            </div>
          </div>
          <div className="section-banner bottom">
            <div className="banner-track">
              <div className="banner-list">
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
              </div>
              <div className="banner-list">
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
                <span className="banner-item">Projects</span>
              </div>
            </div>
          </div>
        </section>

        <section id="games" className="section" data-banner="Games">
          <div className="section-banner top">
            <div className="banner-track">
              <div className="banner-list">
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
              </div>
              <div className="banner-list">
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
              </div>
            </div>
          </div>
          <div className="section-inner">
            <div className="cards">
              <article className="card">
                <img src="/woodtrail_thumbnail.png" alt="woodtrail_game_thumbnail" />
                <h3>Woodtrail</h3>
                <p>A short low-poly horror game made in one week</p>
                <a className="btn" href="https://xxtinyturtxx.itch.io/woodtrail" target="_blank" rel="noopener noreferrer">View on itch.io</a>
              </article>
              <article className="card">
                <img src="/pollykitten_thumbnail.png" alt="pollykitten_game_thumbnail" />
                <h3>PollyKitten</h3>
                <p>A browser rhythm game made in one week</p>
                <a className="btn" href="https://xxtinyturtxx.itch.io/pollykitten" target="_blank" rel="noopener noreferrer">View on itch.io</a>
              </article>
            </div>
          </div>
          <div className="section-banner bottom">
            <div className="banner-track">
              <div className="banner-list">
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
              </div>
              <div className="banner-list">
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
                <span className="banner-item">Games</span>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section" data-banner="Education">
          <div className="section-banner top">
            <div className="banner-track">
              <div className="banner-list">
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
              </div>
              <div className="banner-list">
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
              </div>
            </div>
          </div>
          <div className="section-inner">
            <ul className="education-list">
              <strong>Northwestern University</strong>
              <li>
                <span>Bachelor of Science in Computer Engineering</span>
              </li>
            </ul>
          </div>
          <div className="section-banner bottom">
            <div className="banner-track">
              <div className="banner-list">
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
              </div>
              <div className="banner-list">
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
                <span className="banner-item">Education</span>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="section" data-banner="Resume">
          <div className="section-banner top">
            <div className="banner-track">
              <div className="banner-list">
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
              </div>
              <div className="banner-list">
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
              </div>
            </div>
          </div>
          <div className="section-inner">
            <a className="btn" href="/resume.pdf" download>Download Resume (PDF)</a>
            <div className="resume-highlights">
              <h3>temp</h3>
              <ul>
                <li>temp</li>
                <li>temp</li>
                <li>temp</li>
              </ul>
            </div>
          </div>
          <div className="section-banner bottom">
            <div className="banner-track">
              <div className="banner-list">
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
              </div>
              <div className="banner-list">
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
                <span className="banner-item">Resume</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// RetroWindow component placed at bottom of file for simplicity
function RetroWindow() {
  const [visible, setVisible] = useState(true);
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [closeOffset, setCloseOffset] = useState({ x: 0, y: 0 });
  const [minOffset, setMinOffset] = useState({ x: 0, y: 0 });
  const [maxOffset, setMaxOffset] = useState({ x: 0, y: 0 });

  const winRef = React.useRef(null);
  const closeRef = React.useRef(null);
  const minRef = React.useRef(null);
  const maxRef = React.useRef(null);

  const handleRestore = () => {
    setVisible(true);
    setMinimized(false);
    setMaximized(false);
  };

  // evasive controls: push away when cursor gets near
  const handleEvasive = (e, ref, setOffsetFn) => {
    const el = ref.current;
    if (!el) return setOffsetFn({ x: 0, y: 0 });
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width/2;
    const cy = rect.top + rect.height/2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    const threshold = 70;
    if (dist < threshold) {
      const push = (threshold - dist) * 0.7;
      const nx = (dx / (dist || 1));
      const ny = (dy / (dist || 1));
      setOffsetFn({ x: -nx * push, y: -ny * push });
    } else {
      setOffsetFn({ x: 0, y: 0 });
    }
  };

  const onMouseMoveWindow = (e) => {
    handleEvasive(e, closeRef, setCloseOffset);
    handleEvasive(e, minRef, setMinOffset);
    handleEvasive(e, maxRef, setMaxOffset);
  };

  const onMouseLeaveWindow = () => {
    setCloseOffset({ x: 0, y: 0 });
    setMinOffset({ x: 0, y: 0 });
    setMaxOffset({ x: 0, y: 0 });
  };

  if (!visible) {
    return <div><button className="btn" onClick={handleRestore}>Open Window</button></div>;
  }

  const classes = ['retro-window'];
  if (minimized) classes.push('minimized');
  if (maximized) classes.push('maximized');

  return (
    <div
      ref={winRef}
      className={classes.join(' ')}
      onMouseMove={onMouseMoveWindow}
      onMouseLeave={onMouseLeaveWindow}
    >
      <div
        className="retro-titlebar"
        style={{ touchAction: 'none' }}
      >
        <span className="title">Last Photo Taken - v1.5</span>
        <div className="window-controls">
          <button ref={minRef} className="win-btn minimize" aria-label="Minimize" style={{ transform: `translate(${minOffset.x}px, ${minOffset.y}px)` }}>—</button>
          <button ref={maxRef} className="win-btn maximize" aria-label="Maximize" style={{ transform: `translate(${maxOffset.x}px, ${maxOffset.y}px)` }}>▢</button>
          <button
            ref={closeRef}
            className="win-btn close"
            aria-label="Close"
            style={{ transform: `translate(${closeOffset.x}px, ${closeOffset.y}px)` }}
          >✕</button>
        </div>
      </div>
      <div className="retro-content">
        <img className="hero-image" src="/bug_self.PNG" alt="Nicholas Holland" />
      </div>
    </div>
  );
}

function StaticWindow({ children }) {
  const [closeOffset, setCloseOffset] = useState({ x: 0, y: 0 });
  const [minOffset, setMinOffset] = useState({ x: 0, y: 0 });
  const [maxOffset, setMaxOffset] = useState({ x: 0, y: 0 });

  const closeRef = React.useRef(null);
  const minRef = React.useRef(null);
  const maxRef = React.useRef(null);

  const handleEvasive = (e, ref, setOffsetFn) => {
    const el = ref.current;
    if (!el) return setOffsetFn({ x: 0, y: 0 });
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    const threshold = 70;
    if (dist < threshold) {
      const push = (threshold - dist) * 0.7;
      const nx = dx / (dist || 1);
      const ny = dy / (dist || 1);
      setOffsetFn({ x: -nx * push, y: -ny * push });
    } else {
      setOffsetFn({ x: 0, y: 0 });
    }
  };

  const onMouseMoveWindow = (e) => {
    handleEvasive(e, closeRef, setCloseOffset);
    handleEvasive(e, minRef, setMinOffset);
    handleEvasive(e, maxRef, setMaxOffset);
  };

  const onMouseLeaveWindow = () => {
    setCloseOffset({ x: 0, y: 0 });
    setMinOffset({ x: 0, y: 0 });
    setMaxOffset({ x: 0, y: 0 });
  };

  return (
    <div
      className="retro-window static"
      onMouseMove={onMouseMoveWindow}
      onMouseLeave={onMouseLeaveWindow}
    >
      <div className="retro-titlebar">
        <span className="title">About Me - v1.9</span>
        <div className="window-controls">
          <button ref={minRef} className="win-btn minimize" aria-hidden style={{ transform: `translate(${minOffset.x}px, ${minOffset.y}px)` }}>—</button>
          <button ref={maxRef} className="win-btn maximize" aria-hidden style={{ transform: `translate(${maxOffset.x}px, ${maxOffset.y}px)` }}>▢</button>
          <button ref={closeRef} className="win-btn close" aria-hidden style={{ transform: `translate(${closeOffset.x}px, ${closeOffset.y}px)` }}>✕</button>
        </div>
      </div>
      <div className="retro-content">
        {children}
      </div>
    </div>
  );
}

function HeroText({ text, className }) {
  const chars = Array.from(text);
  const [offsets, setOffsets] = React.useState(() => chars.map(() => ({ x: 0, y: 0 })));
  const ref = React.useRef(null);

  const onMouseMove = (e) => {
    const letters = ref.current?.querySelectorAll('.letter');
    if (!letters) return;
    const threshold = 80;
    const newOffsets = [];
    letters.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < threshold) {
        const push = (threshold - dist) * 0.6;
        const nx = dx / (dist || 1);
        const ny = dy / (dist || 1);
        newOffsets[i] = { x: -nx * push, y: -ny * push };
      } else {
        newOffsets[i] = { x: 0, y: 0 };
      }
    });
    setOffsets(newOffsets);
  };

  const onMouseLeave = () => setOffsets(chars.map(() => ({ x: 0, y: 0 })));

  return (
    <span className={className} ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {chars.map((ch, i) => {
        const displayChar = ch === ' ' ? '\u00A0' : ch;
        return (
          <span
            key={i}
            className="letter"
            style={{ transform: `translate(${offsets[i]?.x || 0}px, ${offsets[i]?.y || 0}px)`, display: 'inline-block' }}
          >
            {displayChar}
          </span>
        );
      })}
    </span>
  );
}

export default App;
