
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
        {tags.map((tag, index) => (
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
      title: "Creating Immersive 3D Experiences with Three.js and React",
      excerpt: "Learn how to integrate Three.js with React to create stunning 3D web experiences...",
      date: "April 2, 2025",
      readTime: "8 min",
      tags: ["Three.js", "React", "Tutorial"],
      link: "#"
    },
    {
      title: "The Future of Web Animation: GSAP vs. Framer Motion",
      excerpt: "A detailed comparison of the most popular animation libraries for modern web...",
      date: "March 15, 2025",
      readTime: "6 min",
      tags: ["Animation", "Web Dev"],
      link: "#"
    },
    {
      title: "Neon Design Trend: Creating Cyberpunk Aesthetics on the Web",
      excerpt: "Explore how to implement the popular neon design trend in your web projects...",
      date: "February 28, 2025",
      readTime: "5 min",
      tags: ["UI/UX", "Design Trends"],
      link: "#"
    },
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
            Thoughts, tutorials, and insights about creative development and design.
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
          <a href="#" className="button-outlined">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
