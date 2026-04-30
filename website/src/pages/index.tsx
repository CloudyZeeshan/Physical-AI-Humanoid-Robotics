import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const topicCards = [
  {
    emoji: '🧠',
    title: 'Introduction to Physical AI',
    description: 'Understand agents that perceive, learn, and act in the physical world.',
    href: '/docs/chapter-1-introduction-to-physical-ai',
  },
  {
    emoji: '🤖',
    title: 'Humanoid Robotics Foundations',
    description: 'Explore sensors, actuators, kinematics, and control design for humanoid robots.',
    href: '/docs/chapter-2-basics-of-humanoid-robotics',
  },
  {
    emoji: '⚙️',
    title: 'ROS 2 Fundamentals',
    description: 'Learn the core concepts that power modern robot software and middleware.',
    href: '/docs/chapter-3-ros-2-fundamentals',
  },
  {
    emoji: '🌐',
    title: 'Digital Twin Simulation',
    description: 'Build virtual robot training pipelines with simulation and digital twin workflows.',
    href: '/docs/chapter-4-digital-twin-simulation',
  },
  {
    emoji: '👁️',
    title: 'Vision-Language-Action Systems',
    description: 'Connect perception, natural language, and action planning for real robots.',
    href: '/docs/chapter-5-vision-language-action-systems',
  },
  {
    emoji: '🎓',
    title: 'Capstone AI Robotics Pipeline',
    description: 'Integrate sensors, planning, perception, and learning into a full project.',
    href: '/docs/chapter-6-capstone-ai-robot-pipeline',
  },
];

const featuredPosts = [
  {
    title: 'What is Physical AI?',
    description: 'A foundational guide to intelligence at the edge of the physical world.',
    href: '/blog/what-is-physical-ai',
  },
  {
    title: 'How Humanoid Robots Work',
    description: 'A practical look at mechanics, control systems, and human-inspired design.',
    href: '/blog/how-humanoid-robots-work',
  },
  {
    title: 'What is ROS2?',
    description: 'Understand the software layer that connects robots, sensors, and AI.',
    href: '/blog/what-is-ros2',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Professional educational website for Physical AI and humanoid robotics.">
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Professional robotics education</p>
            <h1>Build smarter robots with Physical AI and humanoid systems.</h1>
            <p className={styles.heroSubtitle}>
              Discover structured learning paths, expert articles, and practical robotics modules for students,
              engineers, and robotics teams.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--secondary button--lg" to="/topics">
                Explore Topics
              </Link>
              <Link className="button button--outline button--lg" to="/blog">
                Read Articles
              </Link>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.featurePill}>Trusted learning path for modern robotics</div>
            <div className={styles.heroStats}>
              <div>
                <strong>6 modules</strong>
                <p>Core Physical AI curriculum</p>
              </div>
              <div>
                <strong>5 blog posts</strong>
                <p>Original robotics insights</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>Core curriculum</p>
              <h2>Modules built for real robotics learners</h2>
              <p>
                Follow a structured pathway through robot intelligence, humanoid systems, ROS 2, simulation,
                perception, and integrated AI pipelines.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {topicCards.map((topic) => (
                <article key={topic.title} className={styles.topicCard}>
                  <div className={styles.topicIcon}>{topic.emoji}</div>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                  <Link className={styles.cardLink} to={topic.href}>
                    Explore module →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>Latest insights</p>
              <h2>Original blog articles for Physical AI practice</h2>
              <p>
                Our learning platform also publishes research-forward commentary, architecture case studies, and
                robotics trends for 2030 and beyond.
              </p>
            </div>
            <div className={styles.blogGrid}>
              {featuredPosts.map((post) => (
                <article key={post.title} className={styles.blogCard}>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <Link className={styles.cardLink} to={post.href}>
                    Read article →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.trustGrid}>
              <article className={styles.trustCard}>
                <h2>About this website</h2>
                <p>
                  Physical AI & Humanoid Robotics is an educational website designed to help learners transition
                  from theory to applied robot systems. It combines chapter-based modules with curated blog content.
                </p>
                <p>
                  Every page is built to support clear learning goals, reliable navigation, and transparent information
                  about robot intelligence.
                </p>
              </article>
              <article className={styles.trustCard}>
                <h2>Disclaimer</h2>
                <p>
                  This website provides educational information only. It is not a substitute for professional
                  engineering advice or certified robotics training programs.
                </p>
                <p>
                  Use the content for research, study, and prototyping, and always validate real-world robot systems
                  with domain experts.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
