import './style.css';

const GAME_URL = 'https://fb.gg/play/1949163112664936';

const categories = [
  ['🌍', 'General Knowledge', 'Test your knowledge of the world around you.'],
  ['🔬', 'Science', 'Explore the world of science and discovery.'],
  ['🏛️', 'History', 'Travel through important moments in history.'],
  ['⚽', 'Sports', 'Challenge yourself across the world of sports.'],
  ['🎬', 'Entertainment', 'Movies, television, celebrities and more.'],
  ['🎵', 'Music', 'Test your knowledge of music and artists.'],
  ['💻', 'Technology', 'Computers, inventions and modern technology.'],
  ['🗺️', 'Geography', 'Countries, places, landmarks and the planet.'],
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="site">

    <header class="navbar">
      <a class="brand" href="/">
        <span class="brand__crown">♛</span>
        <span class="brand__name">
          <strong>QUIZ</strong>
          <span>MESTAR</span>
        </span>
      </a>

      <nav class="navbar__links">
        <a href="#features">Features</a>
        <a href="#categories">Categories</a>
        <a href="#how-it-works">How It Works</a>
      </nav>

      <a class="nav-button" href="${GAME_URL}" target="_blank" rel="noopener noreferrer">Play Now</a>
    </header>

    <main>

      <section class="hero" id="play">
        <div class="hero__glow hero__glow--one"></div>
        <div class="hero__glow hero__glow--two"></div>

        <div class="hero__content">
          <div class="hero__badge">
            <span>⚡</span>
            FAST. FUN. COMPETITIVE.
          </div>

          <div class="hero__logo">
            <span class="hero__crown">♛</span>
            <div class="hero__quiz">QUIZ</div>
            <div class="hero__mestar">MESTAR</div>
          </div>

          <h1>
            How much do
            <span>you really know?</span>
          </h1>

          <p>
            Test your knowledge, beat the timer, and prove
            you're the ultimate Quiz Mestar.
          </p>

          <div class="hero__actions">
            <a class="button button--primary" href="${GAME_URL}" target="_blank" rel="noopener noreferrer">
              Play Quiz
              <span>→</span>
            </a>

            <a class="button button--ghost" href="#how-it-works">
              How It Works
            </a>
          </div>

          <div class="hero__meta">
            <span>⚡ Fast-paced</span>
            <i></i>
            <span>🔥 Daily challenges</span>
            <i></i>
            <span>🏆 Compete</span>
          </div>
        </div>
      </section>

      <section class="section section--features" id="features">
        <div class="section-heading">
          <span class="eyebrow">WHY QUIZ MESTAR?</span>
          <h2>More than just a quiz.</h2>
          <p>
            Quick questions. Tough challenges. One goal —
            become the Mestar.
          </p>
        </div>

        <div class="feature-grid">
          <article class="feature-card">
            <div class="feature-card__icon">⚡</div>
            <h3>Fast-Paced</h3>
            <p>
              Think quickly and answer before the timer runs out.
            </p>
          </article>

          <article class="feature-card">
            <div class="feature-card__icon">🔥</div>
            <h3>Daily Challenge</h3>
            <p>
              Come back every day for a fresh challenge and test.
            </p>
          </article>

          <article class="feature-card">
            <div class="feature-card__icon">🏆</div>
            <h3>Build Your Streak</h3>
            <p>
              Keep playing, improve your score, and chase your best.
            </p>
          </article>
        </div>
      </section>

      <section class="section" id="categories">
        <div class="section-heading">
          <span class="eyebrow">CHOOSE YOUR CHALLENGE</span>
          <h2>Something for everyone.</h2>
          <p>
            Pick your category and put your knowledge to the test.
          </p>
        </div>

        <div class="category-grid">
          ${categories.map(([icon, name, description]) => `
            <article class="category-card">
              <div class="category-card__icon">${icon}</div>
              <div>
                <h3>${name}</h3>
                <p>${description}</p>
              </div>
              <span class="category-card__arrow">→</span>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="section how-it-works" id="how-it-works">
        <div class="section-heading">
          <span class="eyebrow">HOW IT WORKS</span>
          <h2>Three steps. One Mestar.</h2>
        </div>

        <div class="steps">
          <article class="step">
            <span class="step__number">01</span>
            <div class="step__icon">🎯</div>
            <h3>Choose</h3>
            <p>Pick a category and decide how many questions you want.</p>
          </article>

          <article class="step">
            <span class="step__number">02</span>
            <div class="step__icon">🧠</div>
            <h3>Answer</h3>
            <p>Use your knowledge and answer as quickly as you can.</p>
          </article>

          <article class="step">
            <span class="step__number">03</span>
            <div class="step__icon">👑</div>
            <h3>Become the Mestar</h3>
            <p>See your score, build your streak, and come back stronger.</p>
          </article>
        </div>
      </section>

      <section class="cta">
        <div class="cta__glow"></div>

        <span class="eyebrow">READY TO PLAY?</span>
        <h2>Think you have what it takes?</h2>
        <p>
          Step up, answer fast, and show everyone who the Mestar is.
        </p>

        <a class="button button--primary button--large" href="${GAME_URL}" target="_blank" rel="noopener noreferrer">
          Play Quiz
          <span>→</span>
        </a>
      </section>

    </main>

    <footer class="footer">
      <div class="footer__top">
        <a class="brand" href="/">
          <span class="brand__crown">♛</span>
          <span class="brand__name">
            <strong>QUIZ</strong>
            <span>MESTAR</span>
          </span>
        </a>

        <p>
          Test your knowledge. Beat the timer. Become the Mestar.
        </p>
      </div>

      <div class="footer__bottom">
        <span>© 2026 Quiz Mestar. All rights reserved.</span>

        <div class="footer__links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/data-deletion">Data Deletion</a>
        </div>
      </div>
    </footer>

  </div>
`;
