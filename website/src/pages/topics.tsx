import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const modules = [
  {
    title: 'Introduction to Physical AI',
    description:
      'Learn why intelligence in robots is different from cloud software, and how perception, motion, and learning come together in physical systems.',
    href: '/docs/chapter-1-introduction-to-physical-ai',
  },
  {
    title: 'Basics of Humanoid Robotics',
    description:
      'Study humanoid mechanisms, balance strategies, sensor integration, and the motion control systems needed to build robots that move like people.',
    href: '/docs/chapter-2-basics-of-humanoid-robotics',
  },
  {
    title: 'ROS 2 Fundamentals',
    description:
      'Master ROS 2 concepts such as nodes, topics, services, actions, and parameter-driven robot system design.',
    href: '/docs/chapter-3-ros-2-fundamentals',
  },
  {
    title: 'Digital Twin Simulation',
    description:
      'Explore simulation workflows for robotics development, including digital twins, Gazebo, and the benefits of virtual testing.',
    href: '/docs/chapter-4-digital-twin-simulation',
  },
  {
    title: 'Vision-Language-Action Systems',
    description:
      'Understand how robot perception and natural language can be combined to create adaptive, task-driven robots.',
    href: '/docs/chapter-5-vision-language-action-systems',
  },
  {
    title: 'Capstone AI Robotics Pipeline',
    description:
      'Apply all major concepts in a capstone pathway that integrates sensing, planning, AI, and control for a complete robot solution.',
    href: '/docs/chapter-6-capstone-ai-robot-pipeline',
  },
];

export default function Topics() {
  return (
    <Layout title="Topics" description="Explore modules and topics for Physical AI and humanoid robotics.">
      <main className="container margin-vert--lg">
        <section>
          <p className="text--uppercase text--bold">Topics</p>
          <h1>Learning modules for Physical AI</h1>
          <p>
            The topics page is your navigation hub to the full curriculum. Each module builds on the previous one and is designed
            to help you think like a robotics engineer.
          </p>
        </section>

        <section className="margin-vert--lg">
          <div className="row">
            {modules.map((item) => (
              <div key={item.title} className="col col--6 margin-bottom--lg">
                <div className="card padding--lg">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <Link to={item.href}>Read module →</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="margin-vert--lg">
          <h2>Why the modules are structured this way</h2>
          <p>
            Each chapter is built to move from concept to practice: first understanding what Physical AI means, then seeing how
            humanoid robots are designed, followed by the software and simulation tools needed to bring them to life.
          </p>
        </section>
      </main>
    </Layout>
  );
}
