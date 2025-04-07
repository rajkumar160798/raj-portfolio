import React from "react";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  date,
  readTime,
  tags,
  link
}) => {
  return (
    <div className="glass-card group p-6 hover:border-neon-purple/30 transition-colors">
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="text-xs px-2 py-0.5 rounded-full bg-neon-purple/10 text-neon-purple"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-neon-purple transition-colors">
        {title}
      </h3>

      <p className="text-foreground/70 mb-4">{excerpt}</p>

      <div className="flex justify-between items-center text-sm text-foreground/50">
        <span>{date}</span>
        <span>{readTime} read</span>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm text-neon-purple hover:text-neon-blue transition-colors"
      >
        Read more →
      </a>
    </div>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      title: "How AI Detects Failures Before They Happen: A Predictive Maintenance Tutorial",
      excerpt: "Explore how machine learning and Airflow can work together to detect equipment anomalies before breakdowns occur.",
      date: "March 26, 2025",
      readTime: "7 min",
      tags: ["AI", "Predictive Maintenance", "Airflow"],
      link: "https://medium.com/@myakalarajkumar1998/how-ai-detects-failures-before-they-happen-a-predictive-maintenance-tutorial-657b4ccaaaf0"
    },
    {
      title: "Forecasting Equipment Failures Using Facebook Prophet",
      excerpt: "Learn to apply time-series forecasting with Prophet to predict critical machine breakdowns and prevent downtime.",
      date: "March 19, 2025",
      readTime: "6 min",
      tags: ["Forecasting", "Prophet", "Machine Learning"],
      link: "https://medium.com/@myakalarajkumar1998/forecasting-equipment-failures-using-facebook-prophet-89a2a2548103"
    },
    {
      title: "Deploying AI Forecast Models with FastAPI and Docker",
      excerpt: "A step-by-step guide to building and deploying your AI forecasting models using FastAPI, Docker, and REST APIs.",
      date: "March 11, 2025",
      readTime: "8 min",
      tags: ["FastAPI", "Docker", "Model Deployment"],
      link: "https://medium.com/@myakalarajkumar1998/deploying-ai-forecast-models-with-fastapi-and-docker-4e00673ce77f"
    },
    {
      title: "Scaling AI Monitoring: Cloud Logging and Multi-Channel Forecast Alerts",
      excerpt: "Take your AI monitoring to the next level with real-time logging, Slack/Email alerts, and smarter observability tools.",
      date: "March 3, 2025",
      readTime: "7 min",
      tags: ["Monitoring", "Slack Alerts", "Cloud Logging"],
      link: "https://medium.com/@myakalarajkumar1998/scaling-ai-monitoring-cloud-logging-and-multi-channel-forecast-alerts-a069fb746f09"
    },
    {
      title: "SushrutaDx: From Ancient Wisdom to AI Precision for Diabetes Risk Prediction",
      excerpt: "Introducing a healthcare AI tool that blends medical data insights with explainable ML to assess diabetes risk.",
      date: "April 5, 2025",
      readTime: "9 min",
      tags: ["Healthcare", "AI", "SHAP", "Streamlit"],
      link: "https://medium.com/@myakalarajkumar1998/sushrutadx-from-ancient-wisdom-to-ai-precision-for-diabetes-risk-prediction-2c3e10e4ae37"
    }
  ];

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Blog</span>
          </h2>
          <div className="h-1 w-12 bg-neon-purple mt-4"></div>
          <p className="text-lg text-foreground/70 mt-6 max-w-2xl">
            Case studies, tutorials, and engineering logs from my journey across AI, forecasting, and creative development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              tags={post.tags}
              link={post.link}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://medium.com/@myakalarajkumar1998"
            target="_blank"
            rel="noopener noreferrer"
            className="button-outlined"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
