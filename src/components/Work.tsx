import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  imagePlaceholder: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  link,
  imagePlaceholder
}) => {
  return (
    <div className="glass-card group overflow-hidden relative">
      {/* Project Image/Placeholder */}
      <div className="w-full h-48 overflow-hidden">
        <div
          className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neon-purple/10 to-neon-blue/5 group-hover:scale-105 transition-transform duration-500"
          style={{ background: imagePlaceholder }}
        >
          {/* <span className="text-foreground/50 text-sm">Project Preview</span> */}
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-neon-purple transition-colors">
          {title}
        </h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-neon-purple/10 text-neon-purple"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Link */}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block text-sm text-neon-purple hover:text-neon-blue transition-colors"
        >
          View Project →
        </a>
      </div>
      
      {/* Glow Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
    </div>
  );
};

const Work = () => {
  const projects = [
    {
      title: "ProvansIQ",
      description: "An AI-powered predictive maintenance platform with anomaly detection, root cause scoring, AutoML, PDF reporting, and live dashboarding.",
      tags: ["React", "AI/ML", "Firestore", "Tailwind"],
      link: "https://predictasense.web.app/",
      imagePlaceholder: "linear-gradient(135deg, #5f3dc4 0%, #845ef7 100%)"
    },
    {
      title: "SushrutaDx",
      description: "Streamlit-based diabetes prediction app using explainable AI (SHAP) and medical risk factors. Deployed with real-time PDF report generation.",
      tags: ["Streamlit", "SHAP", "Healthcare", "AI"],
      link: "https://sushrutadx.streamlit.app/",
      imagePlaceholder: "linear-gradient(135deg, #0b7285 0%, #22b8cf 100%)"
    },
    {
      title: "Smart Forecast API",
      description: "A FastAPI-based forecasting microservice using Prophet for time-series predictions, Dockerized for scalable deployment.",
      tags: ["FastAPI", "Prophet", "Docker", "API"],
      link: "https://github.com/rajkumar160798/smart-forecast-deployment-api",
      imagePlaceholder: "linear-gradient(135deg, #364fc7 0%, #748ffc 100%)"
    },
    {
      title: "Predictive Maintenance & Automation",
      description: "A complete ML pipeline with anomaly detection, clustering, monitoring, alerting, and Airflow orchestration — built for smart factories.",
      tags: ["Python", "Airflow", "ML", "Monitoring"],
      link: "https://github.com/rajkumar160798/predictive-maintenance-and-smart-automation",
      imagePlaceholder: "linear-gradient(135deg, #2b8a3e 0%, #51cf66 100%)"
    }
  ];

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">My Work</span>
          </h2>
          <div className="h-1 w-12 bg-neon-purple mt-4"></div>
          <p className="text-lg text-foreground/70 mt-6 max-w-2xl">
            A selection of my AI-powered projects and developer tools built to solve real-world challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              imagePlaceholder={project.imagePlaceholder}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-foreground/70 mb-4">Want to see more of my work?</p>
          <a 
            href="https://github.com/rajkumar160798" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-outlined"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
