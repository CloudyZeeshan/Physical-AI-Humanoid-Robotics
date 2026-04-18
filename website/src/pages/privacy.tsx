import Layout from '@theme/Layout';

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Privacy policy for the Physical AI & Humanoid Robotics educational website.">
      <main className="container margin-vert--lg">
        <section>
          <p className="text--uppercase text--bold">Privacy Policy</p>
          <h1>Privacy policy for Physical AI & Humanoid Robotics</h1>
          <p>
            This privacy policy describes how we collect, use, protect, and disclose information for visitors of this educational website.
          </p>
        </section>

        <section className="margin-vert--lg">
          <h2>Information we collect</h2>
          <p>
            We do not collect personal data automatically. The only personal information we may receive is the information that you
            submit directly through the contact form or by email, such as your name and email address.
          </p>
        </section>

        <section className="margin-vert--lg">
          <h2>Use of information</h2>
          <p>
            We use collected information solely to respond to questions, improve website content, and provide guidance about robotics
            learning resources. We do not sell or share personal data with third parties for marketing purposes.
          </p>
        </section>

        <section className="margin-vert--lg">
          <h2>Cookies and analytics</h2>
          <p>
            The website may use standard browser cookies and third-party analytics tools to measure traffic and improve the user
            experience. Cookies are used for performance and usability only.
          </p>
        </section>

        <section className="margin-vert--lg">
          <h2>Third-party links</h2>
          <p>
            This website may contain links to external resources, such as GitHub and blog articles. We are not responsible for the
            privacy practices or content of third-party websites.
          </p>
        </section>

        <section className="margin-vert--lg">
          <h2>Security</h2>
          <p>
            We implement reasonable security practices to protect information entered through our contact form. However, no method
            of transmission over the internet is completely secure.
          </p>
        </section>

        <section className="margin-vert--lg">
          <h2>Children</h2>
          <p>
            This website is not intended for children under 13. We do not knowingly collect information from minors.
          </p>
        </section>

        <section className="margin-vert--lg">
          <h2>Changes to this policy</h2>
          <p>
            We may update this privacy policy to reflect changes in legal requirements or website functionality. The date of the most
            recent update is reflected here.
          </p>
        </section>

        <section className="margin-vert--lg">
          <h2>Contact</h2>
          <p>
            If you have questions about this policy, email us at{' '}
            <a href="mailto:support@physicalai-robotics.com">support@physicalai-robotics.com</a>.
          </p>
        </section>
      </main>
    </Layout>
  );
}
