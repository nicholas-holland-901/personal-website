import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <section id="home" className="section home">
          <div className="hero-content">
            <h1>Welcome to my site</h1>
            <p>Creator. Developer. Designer.</p>
            <img className="hero-image" src="https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1" alt="hero" />
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-inner">
            <h2>Projects</h2>
            <div className="cards">
              <article className="card">
                <img src="https://picsum.photos/seed/p1/600/300" alt="project 1" />
                <h3>Project One</h3>
                <p>Short description of project one. Tools: React, Node.</p>
                <a className="btn" href="#">View</a>
              </article>
              <article className="card">
                <img src="https://picsum.photos/seed/p2/600/300" alt="project 2" />
                <h3>Project Two</h3>
                <p>Short description of project two. Tools: Python, Flask.</p>
                <a className="btn" href="#">View</a>
              </article>
              <article className="card">
                <img src="https://picsum.photos/seed/p3/600/300" alt="project 3" />
                <h3>Project Three</h3>
                <p>Short description of project three. Tools: Unity, C#.</p>
                <a className="btn" href="#">View</a>
              </article>
            </div>
          </div>
        </section>

        <section id="games" className="section">
          <div className="section-inner">
            <h2>Games</h2>
            <div className="cards">
              <article className="card">
                <img src="https://picsum.photos/seed/g1/600/300" alt="game 1" />
                <h3>Game Alpha</h3>
                <p>A small puzzle game built with Unity.</p>
                <a className="btn" href="#">Play</a>
              </article>
              <article className="card">
                <img src="https://picsum.photos/seed/g2/600/300" alt="game 2" />
                <h3>Game Beta</h3>
                <p>Browser-based mini-game using canvas.</p>
                <a className="btn" href="#">Play</a>
              </article>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-inner">
            <h2>Education</h2>
            <ul className="education-list">
              <li>
                <strong>BSc Computer Science</strong>
                <span> — University Name (2016–2020)</span>
              </li>
              <li>
                <strong>Online Courses</strong>
                <span> — Various (React, Unity)</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="resume" className="section">
          <div className="section-inner">
            <h2>Resume</h2>
            <p>Download a PDF version of my resume or view the highlights below.</p>
            <a className="btn" href="/resume.pdf" download>Download Resume (PDF)</a>
            <div className="resume-highlights">
              <h3>Highlights</h3>
              <ul>
                <li>5+ years software development</li>
                <li>Worked on full-stack web apps and indie games</li>
                <li>Open-source contributor</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
