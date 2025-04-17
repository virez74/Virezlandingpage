import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-cyberpunk-bg neon-card rounded-xl shadow-neon p-6 flex flex-col border-2 border-cyberpunk-pink hover:border-cyberpunk-cyan transition-all duration-300 group relative overflow-hidden"
      whileHover={{ scale: 1.04 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={project.cover}
        alt={project.title}
        className="rounded-md mb-4 w-full h-44 object-cover border-2 border-cyberpunk-cyan shadow-neonCyan group-hover:shadow-neonPink transition-all duration-300"
      />
      <div className="flex-1">
        <h3 className="text-2xl font-cyber font-bold text-cyberpunk-yellow mb-2 uppercase tracking-wide drop-shadow-neon">
          {project.title}
        </h3>
        <span className="inline-block bg-cyberpunk-dark text-cyberpunk-cyan text-xs px-3 py-1 rounded-full mb-2 border border-cyberpunk-cyan font-cyber uppercase">
          {project.category}
        </span>
        <p className="text-cyberpunk-pink mb-3 text-sm font-cyber">
          {project.description}
        </p>
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block px-5 py-2 neon-btn rounded-full font-cyber text-base uppercase tracking-widest shadow-neon text-cyberpunk-bg border-2 border-cyberpunk-yellow hover:border-cyberpunk-pink transition-all duration-300"
      >
        View Site
      </a>
      {/* Neon animated border effect */}
      <div className="absolute inset-0 pointer-events-none border-2 border-cyberpunk-pink rounded-xl animate-pulse opacity-30 group-hover:opacity-60 transition-all duration-300" />
    </motion.div>
  );
}
