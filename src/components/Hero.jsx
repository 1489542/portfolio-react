import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import profilePic from '../assets/me.png'
import '../styles/Hero.css'

export default function Hero({ scrollY }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const socials = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:shaarifkhan.aptech@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="greeting">
            <span className="wave">👋</span> Hey, I'm Shaarif Khan
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Full Stack Developer & <span className="gradient-text">Creative Coder</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-description">
            Crafting beautiful, responsive web experiences with modern technologies.
            Transforming ideas into reality, one line of code at a time.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons">
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <FiArrowRight size={20} />
            </motion.button>

            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, borderColor: '#00d9ff' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="social-links">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          animate={{ y: scrollY * 0.5 }}
          transition={{ type: 'tween' }}
        >
          <div className="profile-container">
            <img src={profilePic} alt="Shaarif Khan" className="profile-image" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}
