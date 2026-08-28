export function renderTermsPage(): string {
  return `
    <div class="legal-page">
      <header class="legal-page__header">
        <a class="brand" href="/">
          <span class="brand__crown">♛</span>
          <span class="brand__name">
            <strong>QUIZ</strong>
            <span>MESTAR</span>
          </span>
        </a>

        <a
          class="legal-page__play"
          href="https://fb.gg/play/1949163112664936"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Quiz →
        </a>
      </header>

      <main class="legal-page__content">
        <a class="legal-page__back" href="/">← Back to Quiz Mestar</a>

        <div class="legal-page__intro">
          <span class="eyebrow">QUIZ MESTAR</span>
          <h1>Terms &amp; Conditions</h1>
          <p>Last updated: August 28, 2026</p>
        </div>

        <div class="legal-page__body">

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or playing Quiz Mestar, you agree to these
              Terms &amp; Conditions. If you do not agree with these terms,
              please do not use the game.
            </p>
          </section>

          <section>
            <h2>2. About Quiz Mestar</h2>
            <p>
              Quiz Mestar is a knowledge-based quiz game that allows players
              to answer questions, complete challenges, review quiz results,
              and participate in gameplay features available through the
              game.
            </p>
          </section>

          <section>
            <h2>3. Use of the Game</h2>
            <p>
              You agree to use Quiz Mestar only for lawful purposes and in
              accordance with these Terms &amp; Conditions.
            </p>
            <p>
              You must not attempt to interfere with the operation of the
              game, circumvent technical restrictions, abuse game systems,
              or use the game in a way that could negatively affect other
              players or the service.
            </p>
          </section>

          <section>
            <h2>4. Quiz Content</h2>
            <p>
              Quiz questions and other game content are provided for
              entertainment and general knowledge purposes. We do not
              guarantee that every question, answer, or piece of information
              will always be error-free or complete.
            </p>
          </section>

          <section>
            <h2>5. Scores and Results</h2>
            <p>
              Quiz scores and results are intended to reflect gameplay
              performance within the game. Scores may depend on the
              questions presented, available game modes, timing, and other
              gameplay conditions.
            </p>
            <p>
              Quiz Mestar does not guarantee that scores or results will
              always be preserved, particularly where locally stored browser
              data is deleted or unavailable.
            </p>
          </section>

          <section>
            <h2>6. Daily Challenges</h2>
            <p>
              Daily challenges may be available as part of Quiz Mestar.
              Challenge availability, questions, scoring, and other
              conditions may change as the game is updated.
            </p>
          </section>

          <section>
            <h2>7. Advertising</h2>
            <p>
              Quiz Mestar may display advertisements, including interstitial
              and rewarded advertisements, through supported advertising
              platforms.
            </p>
            <p>
              Third-party advertising services may have their own terms and
              privacy policies. Quiz Mestar is not responsible for the
              independent operation of third-party advertising services.
            </p>
          </section>

          <section>
            <h2>8. Facebook Instant Games</h2>
            <p>
              Quiz Mestar may be played through Facebook Instant Games.
              Your use of Facebook and its platform is also subject to
              Facebook's and Meta's applicable terms and policies.
            </p>
            <p>
              Quiz Mestar is not responsible for changes, interruptions,
              restrictions, or availability issues caused by the Facebook
              platform.
            </p>
          </section>

          <section>
            <h2>9. Intellectual Property</h2>
            <p>
              Quiz Mestar and its original branding, software, design,
              content, and other materials are protected by applicable
              intellectual property laws.
            </p>
            <p>
              You may not copy, reproduce, modify, distribute, or exploit
              Quiz Mestar's proprietary materials without appropriate
              authorization, except where permitted by law.
            </p>
          </section>

          <section>
            <h2>10. Availability and Changes</h2>
            <p>
              We may modify, update, suspend, or discontinue parts of Quiz
              Mestar at any time. Features, categories, questions,
              advertisements, and other gameplay elements may change without
              prior notice.
            </p>
          </section>

          <section>
            <h2>11. Disclaimer</h2>
            <p>
              Quiz Mestar is provided on an "as available" basis. To the
              extent permitted by applicable law, we make no warranties
              regarding uninterrupted availability, accuracy, reliability,
              or suitability of the game for a particular purpose.
            </p>
          </section>

          <section>
            <h2>12. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, Quiz Mestar and its
              operators will not be liable for indirect, incidental,
              consequential, or other losses arising from your use of or
              inability to use the game.
            </p>
          </section>

          <section>
            <h2>13. Privacy</h2>
            <p>
              Your use of Quiz Mestar is also governed by our
              <a href="/privacy">Privacy Policy</a>, which explains how
              information is handled.
            </p>
          </section>

          <section>
            <h2>14. Changes to These Terms</h2>
            <p>
              We may update these Terms &amp; Conditions from time to time.
              Any updated version will be published on this page with a
              revised effective date. Your continued use of Quiz Mestar
              after an update means that you accept the revised terms,
              subject to applicable law.
            </p>
          </section>

          <section>
            <h2>15. Contact</h2>
            <p>
              If you have questions about these Terms &amp; Conditions,
              contact us at
              <a href="mailto:support@quizmestar.com">
                support@quizmestar.com
              </a>.
            </p>
          </section>

        </div>
      </main>

      <footer class="legal-page__footer">
        <span>© 2026 Quiz Mestar. All rights reserved.</span>

        <div>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms &amp; Conditions</a>
          <a href="/data-deletion">Data Deletion</a>
        </div>
      </footer>
    </div>
  `;
}
