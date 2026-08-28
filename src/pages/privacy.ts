export function renderPrivacyPage(): string {
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

        <a class="legal-page__play" href="https://fb.gg/play/1949163112664936" target="_blank" rel="noopener noreferrer">
          Play Quiz →
        </a>
      </header>

      <main class="legal-page__content">
        <a class="legal-page__back" href="/">← Back to Quiz Mestar</a>

        <div class="legal-page__intro">
          <span class="eyebrow">QUIZ MESTAR</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: August 28, 2026</p>
        </div>

        <div class="legal-page__body">

          <section>
            <h2>1. Introduction</h2>
            <p>
              Quiz Mestar is a quiz game that lets you test your knowledge,
              complete challenges, and review your previous quiz results.
              This Privacy Policy explains how information is handled when
              you use Quiz Mestar.
            </p>
          </section>

          <section>
            <h2>2. Information We Handle</h2>
            <p>
              Quiz Mestar currently stores quiz results locally on your
              device or browser. A stored quiz result may contain an
              internal result identifier, your Facebook Instant Games
              player identifier when the game is running through Facebook,
              the quiz category, your score, number of correct answers,
              number of questions, best streak, and the date and time the
              quiz was completed.
            </p>
            <p>
              Quiz Mestar uses this information to maintain your local quiz
              history and display your previous quiz performance.
            </p>
          </section>

          <section>
            <h2>3. Local Storage</h2>
            <p>
              Quiz Mestar currently uses browser local storage to retain
              quiz history. This information is stored on your device
              rather than being stored on a Quiz Mestar server.
            </p>
            <p>
              You can clear your stored quiz history using the
              <strong>Clear History</strong> function available in the game.
            </p>
          </section>

          <section>
            <h2>4. Facebook and Meta</h2>
            <p>
              Quiz Mestar is available through Facebook Instant Games.
              When the game runs through Facebook, it uses the Facebook
              Instant Games platform and its software development kit (SDK).
              The game requests the player identifier provided by the
              Facebook Instant Games platform so that gameplay results can
              be associated with the appropriate local player data.
            </p>
            <p>
              Facebook and Meta may independently collect and process
              information when you use their services, including information
              related to your Facebook account, platform activity, device,
              or advertising interactions. Such processing is controlled by
              Facebook and Meta and is subject to their applicable privacy
              policies and terms.
            </p>
            <p>
              Quiz Mestar does not operate or control Facebook's systems and
              cannot access or control information that Meta processes
              independently through its platform.
            </p>
          </section>

          <section>
            <h2>5. Advertising</h2>
            <p>
              Quiz Mestar may display advertising provided through the
              Facebook Instant Games advertising platform, including
              interstitial and rewarded advertisements.
            </p>
            <p>
              Advertising services may process information according to
              the policies and terms of the relevant advertising platform.
            </p>
          </section>

          <section>
            <h2>6. How We Use Information</h2>
            <p>
              Information stored by Quiz Mestar is used to provide gameplay
              functionality, including maintaining your local quiz history
              and displaying your previous quiz performance.
            </p>
          </section>

          <section>
            <h2>7. Data Sharing</h2>
            <p>
              Quiz Mestar does not currently operate a server-side account
              system for storing your quiz history. We do not currently
              sell your quiz history to third parties.
            </p>
            <p>
              Third-party services such as Facebook and advertising
              providers may process information as part of providing their
              platform and advertising services. Their processing is
              governed by their respective policies.
            </p>
          </section>

          <section>
            <h2>8. Data Retention</h2>
            <p>
              Quiz history stored locally remains on your device until it
              is cleared through the game's history controls or removed
              through your browser or device storage settings.
            </p>
          </section>

          <section>
            <h2>9. Data Deletion</h2>
            <p>
              You can delete the quiz history stored by Quiz Mestar using
              the Clear History function in the game.
            </p>
            <p>
              For information handled directly by Facebook or Meta, please
              use the privacy and data controls provided by Facebook.
            </p>
            <p>
              For additional questions about data handled by Quiz Mestar,
              visit our
              <a href="/data-deletion">Data Deletion</a> page.
            </p>
          </section>

          <section>
            <h2>10. Children's Privacy</h2>
            <p>
              Quiz Mestar is not intended to knowingly collect personal
              information directly from children. If you believe that
              information has been provided to Quiz Mestar in a manner that
              should not have occurred, please contact us so that we can
              review the situation.
            </p>
          </section>

          <section>
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy when Quiz Mestar's
              functionality, services, or data practices change. The
              updated version will be published on this page with a revised
              effective date.
            </p>
          </section>

          <section>
            <h2>12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how Quiz
              Mestar handles information, please contact us at
              <a href="mailto:support@quizmestar.com">support@quizmestar.com</a>.
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
