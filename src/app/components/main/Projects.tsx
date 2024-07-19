import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        <ProjectCard
          src="/Geminii_SS.png"
          title="Generative AI Gemini"
          description="Generative Gemini is an Clone for Google Own Generative Model and replicating the core functionality of the Gemini protocol using ReactJS"
        />
        <ProjectCard
          src="/Detectify2.png"
          title="Detectify-AI"
          description="Created an AI-driven object detection web app using Next.js 14, Tailwind CSS, TensorFlow, and React. Utilized cutting-edge machine learning to enable real-time object recognition in a user-friendly interface."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="🚀 Divyansh Srivastava's Portfolio"
          description="Embark on a cosmic journey through my featured projects, where each project card is set against a breathtaking space-themed background. Experience the magic of the universe with smooth animations and transitions powered by Framer Motion."
        />
        <ProjectCard
          src="/REactyoutube4.png"
          title="ReactTube Youtube"
          description="ReactYouTube is a YouTube clone built with React.js, Redux, Tailwind CSS, and the YouTube API. Video Playback: Seamless video streaming with React state management and Redux. Search and Browse: Integration with the YouTube API for trending videos, search, and category browsing."
        />
        <ProjectCard
          src="/Ochi5.png"
          title="Ochi Framer"
          description="A Ochi website made with React JS And TailWindCSS. Also used locomotive for smooth scrolling and framer motion for animations."
        />
        <ProjectCard
          src="/NIke6.png"
          title="NIKE."
          description="Nike's tech stack features Tailwind CSS for efficient and consistent UI design, coupled with JavaScript for dynamic interactivity. This blend ensures a visually striking and user-friendly online experience, reflecting Nike's commitment to staying at the forefront of digital innovation."
        />
        <ProjectCard
          src="/Atlassbazaar6.png"
          title="AtlasBazaar-E-commerce"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/Razorpay.png"
          title="Razorpay-Clone"
          description="A website made using Tailwind Css For sleek UI. Replicated Razorpay core functionalities for seamless business transactions."
        />
        <ProjectCard
          src="/Portfolio.png"
          title="JS Portfolio"
          description="Welcome to my portfolio website, crafted with pure JavaScript! Dive into my world of web development, where functionality meets creativity."
        />
      
       
      </div>
    </div>
  );
};

export default Projects;