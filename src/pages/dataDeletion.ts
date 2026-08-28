export function renderDataDeletionPage(): string {
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
          <h1>Data Deletion</h1>
          <p>How to remove your Quiz Mestar data.</p>
        </div>

        <div class="legal-page__body">

          <section>
            <h2>1. Delete Your Quiz History</h2>
            <p>
              Quiz Mestar currently stores your quiz history locally on your
              device or browser. This may include your scores, number of
              correct answers, number of questions, category, and quiz date.
            </p>
            <p>
              To remove this information, open Quiz Mestar, go to
              <strong>Quiz History</strong>, and select
              <strong>Clear History</strong>.
            </p>
          </section>

          <section>
            <h2>2. Browser and Device Storage</h2>
            <p>
              Because quiz history is stored locally, you can also remove it
              by clearing the website or game data from your browser or
              device settings.
            </p>
            <p>
              Clearing this data may remove your locally stored quiz history
              and other locally stored game information.
            </p>
          </section>

          <section>
            <h2>3. Facebook and Meta Data</h2>
            <p>
              Quiz Mestar is available through Facebook Instant Games.
              Information that Facebook or Meta independently processes
              through its platform, account systems, or advertising services
              is not stored in Quiz Mestar's local quiz-history system.
            </p>
            <p>
              To manage or request deletion of information held by Facebook
              or Meta, please use the privacy and account controls provided
              by Facebook or Meta.
            </p>
          </section>

          <section>
            <h2>4. Need Help?</h2>
            <p>
              If you believe Quiz Mestar has information about you that
              cannot be removed using the controls described above, contact
              us and explain your request.
            </p>
            <p>
              Email:
              <a href="mailto:support@quizmestar.com">
                support@quizmestar.com
              </a>
            </p>
          </section>

          <section>
            <h2>5. Related Information</h2>
            <p>
              For more information about how Quiz Mestar handles information,
              please read our
              <a href="/privacy">Privacy Policy</a>.
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
