
import React from "react";

const About = () => {
  const skills = [
    "Angular", "React", "TypeScript", "JavaScript", "Spring Boot", "Java", "Python", "GCP", "BigQuery",
    "Airflow", "Firestore", "Docker", "Kubernetes", "REST APIs", "Microservices", "Firebase", "Tailwind CSS",
    "Data Engineering", "AI/ML", "FastAPI", "Node.js", "Next.js", "UI/UX Design", "Power BI"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="h-1 w-12 bg-neon-purple mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Hello! I'm Raj, a versatile full-stack developer and creative problem-solver with a strong experience in building scalable, user-centric digital products.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
             I also have a knack for data engineering and AI/ML, which I leverage to create intelligent applications that drive business value.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              With a passion for technology, I thrive on challenges that require innovative solutions and continuous learning.
            </p>           
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              My expertise spans across frontend frameworks like Angular and React, backend systems using Spring Boot and Python, and cloud platforms like Google Cloud Platform and Firebase.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I love blending technology and innovation to create impactful solutions—like <a href="https://predictasense.web.app/" target="_blank" rel="noopener noreferrer">ProvansIQ</a>, an AI-powered predictive maintenance platform, and <a href="https://sushrutadx.streamlit.app/" target="_blank" rel="noopener noreferrer">SushrutaDX</a>, a healthcare analytics tool.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Outside of coding, I enjoy writing technical blogs, contributing to open-source, and exploring ways to turn ideas into intelligent, real-world applications.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 text-gradient">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full neon-border text-foreground/80 bg-background hover:bg-neon-purple/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-gradient">Experience</h3>
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h4 className="font-bold">Software Developer</h4>
                  <p className="text-neon-purple">CVS HEALTH | GCP | AI | Angular + Spring Boot • 2023–Present</p>
                  <p className="text-foreground/70 mt-2">
                    Leading development of cloud-native, ML-integrated applications with real-time monitoring and interactive dashboards
                  </p>
                </div>
                <div className="glass-card p-6">
                  <h4 className="font-bold">Full Stack Developer</h4>
                  <p className="text-neon-purple">Barclays | React + Spring Boot • 2022–2023</p>
                  <p className="text-foreground/70 mt-2">
                    Built and deployed microservices, implemented secure authentication flows, and optimized application performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
