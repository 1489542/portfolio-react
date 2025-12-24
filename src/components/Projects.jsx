import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'
import therapyImg from '../assets/therapy.png'
import sportsImg from '../assets/sports.png'
import medicareImg from '../assets/medicare.png'
import storeImg from '../assets/store.png'
import perfumeImg from '../assets/perfume.png'
import itImg from '../assets/it.png'
import '../styles/Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Zara Therapy Clinic',
      description: 'Award-winning therapy clinic website featuring expert doctors and therapists. Modern, responsive design with beautiful carousel showcase and professional layout for healthcare services.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: therapyImg,
      demoLink: 'https://frabjous-pothos-7f4d5f.netlify.app/',
      githubLink: 'https://github.com',
      color: '#FF6B6B',
    },
    {
      id: 2,
      title: 'Sports News Portal',
      description: 'Comprehensive sports news website covering Football, Athletics, Judo, Tennis, Volleyball, Swimming, Chess and Golf. Dynamic content management with category-based news organization.',
      tags: ['HTML', 'CSS', 'JavaScript', 'News CMS'],
      image: sportsImg,
      demoLink: 'https://taupe-brigadeiros-296c4b.netlify.app/',
      githubLink: 'https://github.com',
      color: '#4ECDC4',
    },
    {
      id: 3,
      title: 'MediCare Platform',
      description: 'Healthcare management platform with appointment scheduling, patient records, and medical services tracking. Streamlined interface for healthcare professionals and patients.',
      tags: ['React', 'Healthcare', 'Patient Management', 'Responsive'],
      image: medicareImg,
      demoLink: 'https://medi-care.ct.ws',
      githubLink: 'https://github.com',
      color: '#45B7D1',
    },
    {
      id: 4,
      title: 'TimeMark App',
      description: 'Time tracking and productivity tool designed for professionals. Features activity logging, time analytics, and project management capabilities for efficient workflow management.',
      tags: ['React', 'Time Tracking', 'Analytics', 'Productivity'],
      image: storeImg,
      demoLink: 'https://timemark.ct.ws',
      githubLink: 'https://github.com',
      color: '#96CEB4',
    },
    {
      id: 5,
      title: 'FriendX Fragrances',
      description: 'E-commerce platform for premium fragrances with product showcase, user reviews, and seamless checkout experience. Beautiful product gallery and detailed fragrance descriptions.',
      tags: ['E-Commerce', 'Product Catalog', 'Payment Integration', 'React'],
      image: perfumeImg,
      demoLink: 'https://friendxfragrances.com',
      githubLink: 'https://github.com',
      color: '#FFEAA7',
    },
    {
      id: 6,
      title: 'MSK IT Solutions',
      description: 'IT solutions and services showcase website. Professional portfolio presenting tech expertise, service offerings, and client solutions with modern design and interactive features.',
      tags: ['IT Services', 'Web Design', 'Corporate Website', 'Responsive'],
      image: itImg,
      demoLink: 'https://mskitsolutions.ct.ws',
      githubLink: 'https://github.com',
      color: '#DDA0DD',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Explore some of my best work</p>
          </div>
        </ScrollReveal>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <ScrollReveal key={project.id}>
              <motion.div
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 217, 255, 0.2)' }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-overlay" style={{ background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)` }}>
                    <div className="overlay-buttons">
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-btn demo-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink size={20} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        className="tag"
                        whileHover={{ scale: 1.1 }}
                        style={{ borderColor: project.color }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
