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
import LEDMatrixFront from "./styling/led_matrix_front.png";
import LEDMatrixBack from "./styling/led_matrix_back.png";
import BloomPulloverImage from "./styling/bloom_pullover.png"
import ArmWarmersImage from "./styling/arm_warmers.png"
import KnitFishImage from "./styling/knit_fish.png"
import StickerStar from './styling/stars.png';
import StickerOlives from './styling/olives.png';
import StickerClover from './styling/clover.png';
import StickerFish from './styling/fish_sticker.png';

const projects = [
  {
    id: 'self-playing-flute',
    title: 'Self-Playing Flute',
    summary: 'A flute that can play itself using servo motors and MIDI files',
    accent: 'radial-gradient(circle at 20% 20%, rgba(255, 214, 102, 0.65), transparent 42%), radial-gradient(circle at 80% 15%, rgba(130, 205, 255, 0.4), transparent 35%)',
    bullets: [
      'Constructed a mount fitted for a standard concert C flute which uses servo motors capable of 34 different note/fingering combinations',
      'Implemented file handling able to read Type 0 MIDI files and convert note data to readable format',
      'Controlled 9 servo motors simultaneously by implementing a PCA9685 PWM driver board with an Elegoo microcontroller'
    ],
    tags: ['C++', 'Microcontroller'],
    repoUrl: 'https://github.com/nicholas-holland-901/self_playing_flute',
    repoLabel: 'View Repo'
  },
  {
    id: 'neural-network-scratch',
    title: 'Neural Network from Scratch',
    summary: 'A neural network written in C from scratch to play snake game',
    accent: 'radial-gradient(circle at 15% 25%, rgba(255, 177, 90, 0.45), transparent 38%), radial-gradient(circle at 85% 75%, rgba(120, 217, 166, 0.35), transparent 42%)',
    bullets: [
      'Designed a feedforward neural network from scratch in C to play snake game',
      'Applied backpropagation and reinforcement learning techniques in order to maximize performance',
      'Created a snake game in C using the SDL3 library to display graphics and handle input'
    ],
    tags: ['C', 'SDL3'],
    repoUrl: 'https://github.com/nicholas-holland-901/snake_game_brain',
    repoLabel: 'View Repo'
  },
  {
    id: 'assembly-flappy-bird',
    title: 'Assembly Flappy Bird',
    summary: 'A recreation of Flappy Bird written entirely in ARM32 assembly',
    accent: 'radial-gradient(circle at 25% 20%, rgba(155, 114, 255, 0.38), transparent 40%), radial-gradient(circle at 75% 80%, rgba(255, 125, 125, 0.3), transparent 34%)',
    bullets: [
      'Implemented sprite rotation, collision detection, background scrolling, and gravity in ARM32 assembly',
      'Made as the final project for Northwestern University\'s COMP_ENG 205: Fundamentals of Computer System Software'
    ],
    tags: ['ARM32', 'Assembly', 'CPUlater'],
    demoUrl: 'https://youtu.be/Ai_8R0GnEHE',
    demoLabel: 'View Demo on YouTube'
  },
  {
    id: 'audio-visualizer',
    title: 'Physical Audio Visualizer',
    summary: 'A soldered 8x8 LED matrix that can display audio from a microphone',
    accent: 'radial-gradient(circle at 15% 80%, rgba(255, 166, 77, 0.42), transparent 36%), radial-gradient(circle at 80% 15%, rgba(111, 207, 255, 0.38), transparent 40%)',
    bullets: [
      'Built a compact audio-reactive display using an 8x8 LED matrix and microphone input',
      'Soldered the circuit and wired the LED matrix for reliable visual output'
    ],
    tags: ['Soldering', 'Circuit', 'ESP-32'],
    images: [
      { src: LEDMatrixFront, alt: 'Front of the audio visualizer circuit', width: '350px', height: '200px' },
      { src: LEDMatrixBack, alt: 'Back of the audio visualizer circuit', width: '350px', height: '200px' }
    ]
  },
  {
    id: 'rackgit',
    title: 'Rackgit (Github Clone)',
    summary: 'A small recreation of GitHub written entirely in the Lisp-like language Racket',
    accent: 'radial-gradient(circle at 20% 20%, rgba(112, 216, 153, 0.42), transparent 36%), radial-gradient(circle at 80% 70%, rgba(255, 205, 124, 0.35), transparent 34%)',
    bullets: [
      'Implemented the git file structure and repository interaction flow',
      'Built a lightweight command-line experience that mirrors core GitHub-style behavior'
    ],
    tags: ['Racket', 'Git'],
    repoUrl: 'https://github.com/nicholas-holland-901/rackgit',
    repoLabel: 'View Repo'
  }
];

function App() {
  const [activeModal, setActiveModal] = React.useState(null);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveModal(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openModal = (projectId) => setActiveModal(projectId);
  const closeModal = () => setActiveModal(null);
  const activeProject = projects.find((project) => project.id === activeModal) || null;

  return (
    <div className="App">
      <Navbar />

      <main>
        <section id="home" className="section home">
          <div className="decorative-layer home-decorations" aria-hidden="true">
            <img className="sticker sticker-left" src={StickerStar} alt="" />
            <img className="sticker sticker-right" src={StickerOlives} alt="" />
          </div>
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
                <h1>
                  <HeroText text="Nicholas Holland" className="hero-title" />
                </h1>
                <p>
                  <HeroText text="Computer Engineer & Game Developer" className="hero-sub" />
                </p>
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
            <div className="projects-decorations" aria-hidden="true">
              <img className="sticker sticker-left" src={StickerOlives} alt="" />
              <img className="sticker sticker-right" src={StickerStar} alt="" />
              <img className="sticker sticker-bottom" src={StickerClover} alt="" />
              <img className="sticker sticker-bottom-right" src={StickerFish} alt="" />
            </div>
            <div id="text" className="cards">
              {projects.map((project) => (
                <article id="project" className="card" key={project.id}>
                  <button
                    type="button"
                    className="card-button-hidden"
                    style={{ '--card-accent': project.accent }}
                    onClick={() => openModal(project.id)}
                  >
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="tag-holder">
                      {project.tags.map((tag) => (
                        <label className="tag" key={tag}>{tag}</label>
                      ))}
                    </div>
                    <span className="btn">View More</span>
                  </button>
                </article>
              ))}
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
            <div className="decorative-layer games-decorations" aria-hidden="true">
              <img className="sticker sticker-left" src={StickerFish} alt="" />
              <img className="sticker sticker-right" src={StickerStar} alt="" />
            </div>
            <div id="image" className="cards">
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

        {/* <section id="resume" className="section" data-banner="Resume">
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
                  <span>GPA: 3.96</span>
                </li>
              </ul>
            </div>
            <div className="divider">
            </div>
            <div className="split-section-inner-resume">


              <p>Coming Soon</p>


            </div>
          </div>

        </section> */}
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
            <div className="decorative-layer knitting-decorations" aria-hidden="true">
              <img className="sticker sticker-left" src={StickerOlives} alt="" />
              <img className="sticker sticker-right" src={StickerClover} alt="" />
            </div>
            <div id="image" className="cards">
              <article id="knitting" className="card">
                <img src={ BloomPulloverImage } alt="woodtrail_game_thumbnail" />
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
                <img src={ ArmWarmersImage } alt="pollykitten_game_thumbnail" />
                <h3>Arm Warmers</h3>
                <p>Pattern by Louise Bollanos</p>
                <div className="tag-holder">
                  <label className="tag">Knit</label>
                  <label className="tag">Flat</label>
                </div>
                <a className="btn" href="https://www.handylittleme.com/fingerless-mittens-pattern/" target="_blank" rel="noopener noreferrer">View Pattern Source</a>
              </article>
              <article id="knitting" className="card">
                <img src={ KnitFishImage } alt="python_platformer_game_screenshot"/>
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

        <div className={`modal-overlay ${activeProject ? 'is-open' : ''}`} onClick={closeModal}>
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby={activeProject ? `modal-title-${activeProject.id}` : undefined}
            onClick={(event) => event.stopPropagation()}
          >
            {activeProject && (
              <>
                <div className="modal-titlebar">
                  <button type="button" className="modal-close-button" onClick={closeModal} aria-label={`Close ${activeProject.title} details`}>
                    <CgClose />
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-header">
                    <h2 id={`modal-title-${activeProject.id}`}>{activeProject.title}</h2>
                    <p>{activeProject.summary}</p>
                  </div>

                  {activeProject.images && (
                    <div className="modal-media">
                      {activeProject.images.map((image) => (
                        <img key={image.alt} src={image.src} alt={image.alt} style={{ width: image.width, height: image.height }} />
                      ))}
                    </div>
                  )}

                  <ul className="modal-highlights">
                    {activeProject.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="tag-holder">
                    {activeProject.tags.map((tag) => (
                      <label className="tag" key={tag}>{tag}</label>
                    ))}
                  </div>

                  <div className="modal-actions">
                    {activeProject.repoUrl && (
                      <a className="btn modal-action-btn" href={activeProject.repoUrl} target="_blank" rel="noopener noreferrer">
                        {activeProject.repoLabel || 'View Repo'}
                      </a>
                    )}
                    {activeProject.demoUrl && (
                      <a className="btn modal-action-btn" href={activeProject.demoUrl} target="_blank" rel="noopener noreferrer">
                        {activeProject.demoLabel || 'View Demo'}
                      </a>
                    )}
                  </div>
                </div>
              </>
            )}
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
  const words = text.split(' ');
  const [offsets, setOffsets] = React.useState(() => words.map(() => ({ x: 0, y: 0 })));
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

  const onMouseLeave = () => setOffsets(words.map(() => ({ x: 0, y: 0 })));

  return (
    <span className={className} ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {words.map((word, wordIndex) => (
        <React.Fragment key={`${word}-${wordIndex}`}>
          <span
            className="letter"
            style={{ transform: `translate(${offsets[wordIndex]?.x || 0}px, ${offsets[wordIndex]?.y || 0}px)`, display: 'inline-block' }}
          >
            {word}
          </span>
          {wordIndex < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </span>
  );
}


export default App;
