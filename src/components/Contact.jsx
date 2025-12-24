import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'
import '../styles/Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'shaarifkhan.aptech@gmail.com',
      href: 'mailto:your.shaarifkhan.aptech@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+92 3193056470',
      href: 'tel:+923193056470',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Pakistan, Karachi',
      href: '#',
    },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)

      setTimeout(() => setSubmitMessage(''), 3000)
    }, 1000)
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's create something amazing together</p>
          </div>
        </ScrollReveal>

        <div className="contact-content">
          <ScrollReveal>
            <motion.div
              className="contact-info-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-50px' }}
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="contact-info-card"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 30px rgba(0, 217, 255, 0.2)',
                  }}
                >
                  <motion.div
                    className="info-icon"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <info.icon size={28} />
                  </motion.div>
                  <h4>{info.label}</h4>
                  <p>{info.value}</p>
                </motion.a>
              ))}
            </motion.div>
          </ScrollReveal>

          <ScrollReveal>
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-input"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <FiSend size={20} />
              </motion.button>

              {submitMessage && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {submitMessage}
                </motion.div>
              )}
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
