import { motion } from 'framer-motion';
import { Rocket, Lightbulb, Brain, ChevronDown } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const pricingPlans = [
    {
      title: 'Discovery Call',
      duration: '30 minutes',
      price: '$5',
      features: ['Initial idea discussion', 'Quick feedback', 'Next steps planning'],
      gradient: 'from-blue-500 to-purple-500',
      calendlyUrl: 'https://calendly.com/mzaid-zhcet/discovery-call',
    },
    {
      title: 'Deep Dive',
      duration: '60 minutes',
      price: '$10',
      features: ['Detailed concept analysis', 'Market opportunity review', 'Action plan creation'],
      gradient: 'from-purple-500 to-pink-500',
      calendlyUrl: 'https://calendly.com/mzaid-zhcet/deep-dive',
    },
    {
      title: 'Strategy Session',
      duration: '90 minutes',
      price: '$20',
      features: ['Comprehensive strategy', 'Implementation roadmap', 'Resource planning'],
      gradient: 'from-pink-500 to-purple-500',
      calendlyUrl: 'https://calendly.com/mzaid-zhcet/strategy-session',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl relative z-20"
        >
          <div className="mb-8 relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 mx-auto relative"
            >
              <img
                src="/profile.jpeg"
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-white shadow-2xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50"
              />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Startup Ideas into Reality
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s collaborate to refine your vision and create something extraordinary
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-opacity-90 transition-colors shadow-lg"
          >
            <Rocket className="mr-2" size={20} />
            Get Started
          </motion.a>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 z-20"
        >
          <ChevronDown size={30} className="text-white" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Your Vision, My Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-xl"
              >
                <Brain className="text-purple-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Strategic Thinking</h3>
                <p className="text-gray-600">
                  Transform your innovative ideas into actionable strategies that drive success.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-xl"
              >
                <Lightbulb className="text-pink-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Innovation Focus</h3>
                <p className="text-gray-600">
                  Stay ahead of the curve with cutting-edge solutions and creative approaches.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              Affordable Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment in Your Success
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the consultation package that fits your needs. All sessions include a money-back guarantee.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${plan.gradient}`} />
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                  <p className="text-gray-500 mb-2">{plan.duration}</p>
                  <p className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${plan.gradient} mb-6`}>
                    {plan.price}
                  </p>
                  <p className="text-sm text-gray-500 mb-6">One-time payment</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <span className="mr-2 text-green-500">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={plan.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 px-4 text-white rounded-lg bg-gradient-to-r ${plan.gradient} hover:opacity-90 transition-opacity flex items-center justify-center space-x-2`}
                    >
                      <span>Book Now</span>
                      <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                    </motion.button>
                  </a>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    Secure payment via Calendly
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Need a custom package? <a href="#contact" className="text-purple-600 hover:text-purple-700 font-medium">Contact us</a>
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule a Consultation</h2>
            <p className="text-gray-600">Pick a time that works best for you</p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {/* Replace "YOUR_CALENDLY_URL" with your actual Calendly link */}
            <InlineWidget url="https://calendly.com/mzaid-zhcet" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 Startup Consultant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
