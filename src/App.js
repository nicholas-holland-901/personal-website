import './styling/App.css';
import './styling/BackgroundParticles.scss';
import Navbar from './components/navbar/Navbar';
import React, { useState } from 'react';
import { CgBorderStyleSolid } from "react-icons/cg";
import { CgMinimize } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

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
            <div className="projects-bg-circles" aria-hidden="true">
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
              <span className="circle" />
            </div>
            <div className="cards">
              <article className="card">
                <h3>Self-Playing Flute</h3>
                <p>A flute that can play itself using servo motors and MIDI files</p>
                <ul className="card-list">
                  <li>Constructed a mount fitted for a standard concert C flute which uses servo motors capable of 34 different note/fingering combinations</li>
                  <li>Implemented file handling able to read Type 0 MIDI files and convert note data to readable format</li>
                  <li>Controlled 9 servo motors simultaneously by implementing PCA9685 PWM driver board with an Elegoo microcontroller</li>
                </ul>
                <div className="tag-holder">
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>C++</label>
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>Microcontroller</label>
                </div>
                <a className="btn" href="https://github.com/nicholas-holland-901/self_playing_flute" target="_blank" rel="noopener noreferrer">View Repo</a>
              </article>
              <article className="card">
                <h3>Neural Network from Scratch</h3>
                <p>A neural network written in C from scratch to play snake game</p>
                <ul className="card-list">
                  <li>Designed a feedforward neural network from scratch in C to play snake game</li>
                  <li>Applied backpropagation and reinforcement learning techniques in order to maximize performance</li>
                  <li>Created snake game in C using SDL3 library to display graphics and handle input</li>
                </ul>
                <div className="tag-holder">
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>C</label>
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>SDL3</label>
                </div>
                <a className="btn" href="https://github.com/nicholas-holland-901/snake_game_brain" target="_blank" rel="noopener noreferrer">View Repo</a>
              </article>
              {/* <article className="card">
                <h3>Rackgit</h3>
                <p>WORK IN PROGRESS</p>
                <div className="tag-holder">
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>Racket</label>
                </div>
                <a className="btn" href="#" target="_blank" rel="noopener noreferrer">View Repo</a>
              </article> */}
              <article className="card">
                <h3>Assembly Flappy Bird</h3>
                <p>A recreation of Flappy Bird written entirely in ARM32 assembly</p>
                <ul className="card-list">
                  <li>Implemented sprite rotation, collision detection, background scrolling, and gravity in ARM32 assembly</li>
                  <li>Made as the final project for Northwestern University's COMP_ENG 205: Fundamentals of Computer System Software</li>
                </ul>
                <div className="tag-holder">
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>ARM32</label>
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>Assembly</label>
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>CPUlater</label>
                </div>
                <a className="btn" href="https://youtu.be/Ai_8R0GnEHE" target="_blank" rel="noopener noreferrer">View Demo</a>
              </article>
            </div>
          </div>
          {/*<div className="section-banner bottom">
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
          </div> */}
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
                <div className="tag-holder">
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>C#</label>
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>Unity</label>
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>Blender</label>
                </div>
                <a className="btn" href="https://xxtinyturtxx.itch.io/woodtrail" target="_blank" rel="noopener noreferrer">View on itch.io</a>
              </article>
              <article className="card">
                <img src="/pollykitten_thumbnail.png" alt="pollykitten_game_thumbnail" />
                <h3>PollyKitten</h3>
                <p>A browser rhythm game made in one week</p>
                <div className="tag-holder">
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>GDScript</label>
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>Godot</label>
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>Aseprite</label>
                </div>
                <a className="btn" href="https://xxtinyturtxx.itch.io/pollykitten" target="_blank" rel="noopener noreferrer">View on itch.io</a>
              </article>
              <article className="card">
                <img src="/pygame_platformer_image.png" alt="python_platformer_game_screenshot"/>
                <h3>Cell-Est</h3>
                <p>A simple platformer game inspired by Celeste</p>
                <div className="tag-holder">
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>Python</label>
                  <label className="tag" style={{ color: '#FEFFE6', background: '#2660A4' }}>Pygame</label>
                </div>
                <a className="btn" href="https://github.com/nicholas-holland-901/cell_est_pygame_platformer" target="_blank" rel="noopener noreferrer">View Repo</a>
              </article>
            </div>
          </div>
          {/* <div className="section-banner bottom">
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
          </div> */}
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
          <div className="section-inner" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src="/nu_seal.png" alt="northwestern_university_seal" style={{ width: '150px', height: '150px' }} />
            <ul className="education-list">
              <strong>Northwestern University</strong>
              <li>
                <span>Bachelor of Science in Computer Engineering</span>
              </li>
              <li>
                <span>Sept. 2025-Present</span>
              </li>
              <li>
                <span>GPA: 4.0</span>
              </li>
            </ul>
          </div>
          {/* <div className="section-banner bottom">
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
          </div> */}
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
            <p>Coming soon</p>
            {/* <a className="resume-btn" href="#/resume.pdf" download>Download Resume (PDF)</a> */}
            <div className="resume-highlights">
              {/* <h3>temp</h3>
              <ul>
                <li>temp</li>
                <li>temp</li>
                <li>temp</li>
              </ul> */}
            </div>
          </div>
          {/* <div className="section-banner bottom">
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
          </div> */}
        </section>
      </main>
    </div>
  );
}

function RetroWindow() {
  const [visible, setVisible] = useState(true);
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);

  const winRef = React.useRef(null);
  const closeRef = React.useRef(null);


  // if (!visible) {
  //   return <div><button className="btn" onClick={handleRestore}>Open Window</button></div>;
  // }

  const classes = ['retro-window'];
  if (minimized) classes.push('minimized');
  if (maximized) classes.push('maximized');

  return (
    <div
      ref={winRef}
      className={classes.join(' ')}
    >
      <div
        className="retro-titlebar"
        style={{ touchAction: 'none' }}
      >
        <span className="title">professional_headshot.png</span>
        <div className="window-controls">
          <CgBorderStyleSolid />
          <CgMinimize />
          <CgClose />
        </div>
      </div>
      <div className="retro-content">
        <img className="hero-image" src="/bug_self.PNG" alt="Nicholas Holland" />
      </div>
    </div>
  );
}

function StaticWindow({ children }) {
  return (
    <div
      className="retro-window static"
    >
      <div className="retro-titlebar">
        <span className="title">about_me.txt</span>
        <div className="window-controls">
          <CgBorderStyleSolid />
          <CgMinimize />
          <CgClose />
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
