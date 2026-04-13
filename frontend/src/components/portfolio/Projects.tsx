import { motion } from 'framer-motion';

export function Projects() {
  const projects = [
    {
      title: 'Customer Churn Prediction',
      description: 'Developed an ML system to predict customer churn using structured data. Built end-to-end ML pipelines and achieved 87–92% accuracy across models.',
      technologies: 'Python, XGBoost, Random Forest, Artificial Neural Networks',
    },
    {
      title: 'Project Management Portal',
      description: 'Designed a full-stack web application to manage projects with role-based access. Implemented authentication using JWT and created protected routes.',
      technologies: 'React.js, Node.js, Express.js, MongoDB',
    },
    {
      title: 'Airbnb Backend Clone',
      description: 'Built a backend system replicating Airbnb functionality with REST APIs for listings, users, and bookings. Integrated MapTiler and Cloudinary.',
      technologies: 'Node.js, Express.js, MongoDB, Render',
    },
  ];

  return (
    <section id="projects" className="py-12 px-4 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-default"
            >
              <h3 className="font-medium text-white text-lg">{project.title}</h3>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{project.description}</p>
              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">Technologies: {project.technologies}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
