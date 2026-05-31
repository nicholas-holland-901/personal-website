import './styling/App.css';
import './styling/BackgroundParticles.scss';
import Navbar from './components/navbar/Navbar';
import React from 'react';
import { CgBorderStyleSolid } from "react-icons/cg";
import { CgMinimize } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import WoodtrailThumbnail from "./styling/woodtrail_thumbnail.png"
import PollyKittenThumbnail from "./styling/pollykitten_thumbnail.png"
import CellEstThumbnail from "./styling/pygame_platformer_image.png"
import NUSeal from "./styling/nu_seal.png"
import HeadshotEyesOpen from "./styling/bug_self.PNG";
import HeadshotEyesClosed from "./styling/bug_self_eyes_closed.PNG";

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
              <article id="project" className="card">

              <button data-modal-target="#modal1" className="card-button-hidden">  
                <h3>Self-Playing Flute</h3>
                <p>A flute that can play itself using servo motors and MIDI files</p>
                {/* <ul className="card-list">
                  <li>Constructed a mount fitted for a standard concert C flute which uses servo motors capable of 34 different note/fingering combinations</li>
                  <li>Implemented file handling able to read Type 0 MIDI files and convert note data to readable format</li>
                  <li>Controlled 9 servo motors simultaneously by implementing PCA9685 PWM driver board with an Elegoo microcontroller</li>
                </ul> */}
                <div className="tag-holder">
                  <label className="tag">C++</label>
                  <label className="tag">Microcontroller</label>
                </div>
                <a className="btn">View More</a>
              </button>

              </article>
              <article id="project" className="card">

              <button data-modal-target="#modal2"  className="card-button-hidden">
                <h3>Neural Network from Scratch</h3>
                <p>A neural network written in C from scratch to play snake game</p>
                <div className="tag-holder">
                  <label className="tag">C</label>
                  <label className="tag">SDL3</label>
                </div>
                <a className="btn">View More</a>
              </button>
              
              </article>
              <article id="project" className="card">


              <button data-modal-target="#modal3"  className="card-button-hidden">
                <h3>Assembly Flappy Bird</h3>
                <p>A recreation of Flappy Bird written entirely in ARM32 assembly</p>
                <div className="tag-holder">
                  <label className="tag">ARM32</label>
                  <label className="tag">Assembly</label>
                  <label className="tag">CPUlater</label>
                </div>
                <a className="btn">View More</a>
              </button>
              
              </article>
              {/* <article id="project" className="card">

              <button data-modal-target="#modal4"  className="card-button-hidden">
                <h3>Physical Audio Visualizer</h3>
                <p>A soldered 8x8 LED matrix that can display audio from a microphone</p>
                <div className="tag-holder">
                  <label className="tag">Soldering</label>
                  <label className="tag">Circuit</label>
                  <label className="tag">ESP-32</label>
                </div>
                <a className="btn">View More</a>
              </button>

              </article>
              <article id="project" className="card">

              <button data-modal-target="#modal5"  className="card-button-hidden">
                <h3>Rackgit (Github Clone)</h3>
                <p>A small recreation of GitHub written entirely in the Lisp-like language Racket</p>
                <div className="tag-holder">
                  <label className="tag">Racket</label>
                  <label className="tag">Git</label>
                </div>
                <a className="btn" href="#" target="_blank" rel="noopener noreferrer">View More</a>
              </button>
              
              </article> */}
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
              <article id="game" className="card">
                <img src={ WoodtrailThumbnail } alt="woodtrail_game_thumbnail" />
                <h3>Woodtrail</h3>
                <p>A short low-poly horror game made in one week</p>
                <div className="tag-holder">
                  <label className="tag">C#</label>
                  <label className="tag">Unity</label>
                  <label className="tag">Blender</label>
                </div>
                <a className="btn" href="https://xxtinyturtxx.itch.io/woodtrail" target="_blank" rel="noopener noreferrer">View on itch.io</a>
              </article>
              <article id="game" className="card">
                <img src={ PollyKittenThumbnail } alt="pollykitten_game_thumbnail" />
                <h3>PollyKitten</h3>
                <p>A browser rhythm game made in one week</p>
                <div className="tag-holder">
                  <label className="tag">GDScript</label>
                  <label className="tag">Godot</label>
                  <label className="tag">Aseprite</label>
                </div>
                <a className="btn" href="https://xxtinyturtxx.itch.io/pollykitten" target="_blank" rel="noopener noreferrer">View on itch.io</a>
              </article>
              <article id="game" className="card">
                <img src={ CellEstThumbnail } alt="python_platformer_game_screenshot"/>
                <h3>Cell-Est</h3>
                <p>A simple platformer game inspired by Celeste</p>
                <div className="tag-holder">
                  <label className="tag">Python</label>
                  <label className="tag">Pygame</label>
                </div>
                <a className="btn" href="https://github.com/nicholas-holland-901/cell_est_pygame_platformer" target="_blank" rel="noopener noreferrer">View Repo</a>
              </article>
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
          <div className="split-section-holder">
            <div className="split-section-inner-education">
              <img src={ NUSeal } alt="northwestern_university_seal" style={{ width: '150px', height: '150px' }} />
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
            <div className="divider">
            </div>
            <div className="split-section-inner-resume">


              <p>Coming Soon</p>


            </div>
          </div>

        </section>
        <section id="knitting" className="section" data-banner="Knitting">
          <div className="section-banner top">
            <div className="banner-track">
              <div className="banner-list">
                <span className="banner-item">Knitting</span>
                <span className="banner-item">Knitting</span>
                <span className="banner-item">Knitting</span>
                <span className="banner-item">Knitting</span>
                <span className="banner-item">Knitting</span>
              </div>
              <div className="banner-list">
                <span className="banner-item">Knitting</span>
                <span className="banner-item">Knitting</span>
                <span className="banner-item">Knitting</span>
                <span className="banner-item">Knitting</span>
                <span className="banner-item">Knitting</span>
              </div>
            </div>
          </div>
          <div className="section-inner">
            <div className="cards">
              <article id="knitting" className="card">
                <img src={ WoodtrailThumbnail } alt="woodtrail_game_thumbnail" />
                <h3>Bloom Pullover</h3>
                <p>Pattern by woolbirdx</p>
                <div className="tag-holder">
                  <label className="tag">Knit</label>
                  <label className="tag">Colorwork</label>
                  <label className="tag">In the Round</label>
                </div>
                <a className="btn" href="https://www.etsy.com/listing/1868399215/english-knitting-pattern-bloom-pullover?ref=shop_home_feat_2&sr_prefetch=1&pf_from=shop_home&bes=1&sts=1&dd=1&logging_key=925dbeb0e9ac01fa866d1c4f7e51c24407de1c52%3A1868399215" target="_blank" rel="noopener noreferrer">View Pattern on Etsy</a>
              </article>
              <article id="knitting" className="card">
                <img src={ PollyKittenThumbnail } alt="pollykitten_game_thumbnail" />
                <h3>Arm Warmers</h3>
                <p>Pattern by Louise Bollanos</p>
                <div className="tag-holder">
                  <label className="tag">Knit</label>
                  <label className="tag">Flat</label>
                </div>
                <a className="btn" href="https://www.handylittleme.com/fingerless-mittens-pattern/" target="_blank" rel="noopener noreferrer">View Pattern Source</a>
              </article>
              <article id="knitting" className="card">
                <img src={ CellEstThumbnail } alt="python_platformer_game_screenshot"/>
                <h3>Fish</h3>
                <p>Pattern by Tatyana Grigoryan</p>
                <div className="tag-holder">
                  <label className="tag">Knit</label>
                  <label className="tag">Flat</label>
                </div>
                <a className="btn" href="https://www.ravelry.com/patterns/library/anchovy-addict" target="_blank" rel="noopener noreferrer">View Pattern on Ravelry</a>
              </article>
            </div>
          </div>
        </section>

        <div id="modal1" class="modal-overlay">
          <div class="modal-content">
          <div className="modal-titlebar">
            <CgClose />
          </div>
            <span class="close-btn" data-close>&times;</span>
            <h2>Self-Playing Flute</h2>
            <p>A flute that can play itself using servo motors and MIDI files</p>
            <ul className="card-list">
                  <li>Constructed a mount fitted for a standard concert C flute which uses servo motors capable of 34 different note/fingering combinations</li>
                  <li>Implemented file handling able to read Type 0 MIDI files and convert note data to readable format</li>
                  <li>Controlled 9 servo motors simultaneously by implementing PCA9685 PWM driver board with an Elegoo microcontroller</li>
            </ul>
            <div className="tag-holder">
              <label className="tag">C++</label>
              <label className="tag">Microcontroller</label>
            </div>
            <a className="btn" href="https://github.com/nicholas-holland-901/self_playing_flute" target="_blank" rel="noopener noreferrer">View Repo</a>
          </div>
        </div>

        <div id="modal2" class="modal-overlay">
          <div class="modal-content">
          <div className="modal-titlebar">
            <CgClose />
          </div>
            <span class="close-btn" data-close>&times;</span>
            <h2>Neural Network from Scratch</h2>
            <p>A neural network written in C from scratch to play snake game</p>
            <ul className="card-list">
              <li>Designed a feedforward neural network from scratch in C to play snake game</li>
              <li>Applied backpropagation and reinforcement learning techniques in order to maximize performance</li>
              <li>Created snake game in C using SDL3 library to display graphics and handle input</li>
            </ul>
            <div className="tag-holder">
              <label className="tag">C</label>
              <label className="tag">SDL3</label>
            </div>
            <a className="btn" href="https://github.com/nicholas-holland-901/snake_game_brain" target="_blank" rel="noopener noreferrer">View Repo</a>
          </div>
        </div>

        <div id="modal3" class="modal-overlay">
          <div class="modal-content">
          <div className="modal-titlebar">
            <CgClose />
          </div>
            <span class="close-btn" data-close>&times;</span>
            <h2>Assembly Flappy Bird</h2>
            <p>A recreation of Flappy Bird written entirely in ARM32 assembly</p>
            <ul className="card-list">
              <li>Implemented sprite rotation, collision detection, background scrolling, and gravity in ARM32 assembly</li>
              <li>Made as the final project for Northwestern University's COMP_ENG 205: Fundamentals of Computer System Software</li>
            </ul>
            <div className="tag-holder">
              <label className="tag">ARM32</label>
              <label className="tag">Assembly</label>
              <label className="tag">CPUlater</label>
            </div>
            <a className="btn" href="https://youtu.be/Ai_8R0GnEHE" target="_blank" rel="noopener noreferrer">View Demo on Youtube</a>
          </div>
        </div>

        <div id="modal4" class="modal-overlay">
          <div class="modal-content">
          <div className="modal-titlebar">
            <CgClose />
          </div>
            <span class="close-btn" data-close>&times;</span>
            <h2>Physical Audio Visualizer</h2>
            <p>A soldered 8x8 LED matrix that can display audio from a microphone</p>
            <ul className="card-list">
              <li>TEMP</li>
              <li>TEMP</li>
            </ul>
            <div className="tag-holder">
              <label className="tag">Soldering</label>
              <label className="tag">Circuit</label>
              <label className="tag">ESP-32</label>
            </div>
            <a className="btn" href="#" target="_blank" rel="noopener noreferrer">View Repo</a>
          </div>
        </div>

        <div id="modal5" class="modal-overlay">
          <div class="modal-content">
          <div className="modal-titlebar">
            <CgClose />
          </div>
            <span class="close-btn" data-close>&times;</span>
            <h2>Rackgit (Github Clone)</h2>
            <p>A small recreation of GitHub written entirely in the Lisp-like language Racket</p>
            <ul className="card-list">
                  <li>TEMP</li>
                  <li>TEMP</li>
                  <li>TEMP</li>
            </ul>
            <div className="tag-holder">
              <label className="tag">C++</label>
              <label className="tag">Microcontroller</label>
            </div>
            <a className="btn" href="https://github.com/nicholas-holland-901/rackgit" target="_blank" rel="noopener noreferrer">View Repo</a>
          </div>
        </div>

      </main>
    </div>
  );
}


function RetroWindow() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className="retro-window">
      <div className="retro-titlebar">
        <span className="title">professional_headshot.png</span>
        <div className="window-controls">
          <CgBorderStyleSolid />
          <CgMinimize />
          <CgClose />
        </div>
      </div>

      <div className="retro-content">
        <img className="hero-image" src={hovered ? HeadshotEyesClosed : HeadshotEyesOpen} alt="Headshot" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}/>
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


document.addEventListener('click', (event) => {
  const openBtn = event.target.closest('[data-modal-target]');

  if (openBtn) {
    const modal = document.querySelector(
      openBtn.getAttribute('data-modal-target')
    );
    if (modal) modal.style.display = 'block';
    return;
  }

  const closeBtn = event.target.closest('[data-close]');

  if (closeBtn) {
    const overlay = closeBtn.closest('.modal-overlay');
    if (overlay) overlay.style.display = 'none';
    return;
  }

  if (event.target.classList.contains('modal-overlay')) {
    event.target.style.display = 'none';
  }
});



export default App;
