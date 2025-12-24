import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import '../styles/About.css'

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'HTML', 'Tailwind CSS', 'JavaScript', 'Bootstrap'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB', 'Php', 'MySQL'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="about">
      <div className="about-container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Who I am and what I do</p>
          </div>
        </ScrollReveal>

        <div className="about-content">
          <ScrollReveal>
            <motion.div className="about-text">
              <p>
                I'm a passionate full-stack developer with a love for creating beautiful, functional web applications.
                With 5+ years of experience in web development, I've worked on projects ranging from startups to large enterprises.
              </p>
              <p>
                My approach combines clean code principles, user-centric design, and cutting-edge technologies to deliver
                solutions that not only work perfectly but also delight users with smooth animations and intuitive interfaces.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge
                with the developer community.
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="skills-section">
              <h3 className="skills-title">Skills & Technologies</h3>

              <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-50px' }}
              >
                {skills.map((skillGroup, index) => (
                  <motion.div key={index} className="skill-group" variants={itemVariants}>
                    <h4 className="skill-category">{skillGroup.category}</h4>
                    <div className="skill-items">
                      {skillGroup.items.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          className="skill-item"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: '0 5px 15px rgba(0, 217, 255, 0.3)',
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
