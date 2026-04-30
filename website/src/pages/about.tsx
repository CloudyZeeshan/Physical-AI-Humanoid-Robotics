import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function About() {
  return (
    <Layout title="About" description="About the Physical AI & Humanoid Robotics educational website.">
      <main className="container margin-vert--lg">
        <section>
          <p className="text--uppercase text--bold">About this website</p>
          <h1>Physical AI & Humanoid Robotics</h1>
          <p>
            This website is a professional educational resource for learners who want to understand how artificial intelligence powers
            robots in the physical world. We focus on foundational theory, practical robotics systems, humanoid design, ROS 2, simulation,
            and AI-driven decision making.
          </p>
        </section>

        <section className="margin-vert--lg">
          <h2>What you can learn here</h2>
          <ul>
            <li>How Physical AI differs from conventional software systems.</li>
            <li>How humanoid robots combine mechanics, sensors, and control.</li>
            <li>How ROS 2 enables scalable robot software architectures.</li>
            <li>How to leverage digital twins and simulation for safe robot development.</li>
            <li>How AI brain architecture organizes perception, planning, and action.</li>
          </ul>
        </section>

        <section className="margin-vert--lg">
          <h2>Mission and trust</h2>
          <p>
            Our mission is to present well-structured learning material for technical readers, students and robotics practitioners.
            We aim to keep content concise, accurate, and easy to navigate, with clear chapter pathways and practical blog articles.
          </p>
          <p>
            The website is not a certified training provider. It is designed to help you understand robotics concepts and make safer,
            more informed decisions when designing intelligent systems.
          </p>
        </section>

        <section className="margin-vert--lg">
          <h2>How this site is organized</h2>
          <p>
            The platform combines three main parts:
          </p>
          <ul>
            <li>
              <strong>Modules</strong> — in-depth chapter content for Physical AI and humanoid robotics fundamentals.
            </li>
            <li>
              <strong>Blog</strong> — original articles that explain emerging robotics trends, software architectures, and research concepts.
            </li>
            <li>
              <strong>Contact</strong> — a direct way to reach us for feedback or corrections.
            </li>
          </ul>
        </section>

        <section className="margin-vert--lg">
          <h2>Contact and support</h2>
          <p>
            If you have questions about the material, email us at{' '}
            <Link to="/contact">contact form</Link>.
          </p>
        </section>
      </main>
    </Layout>
  );
}
