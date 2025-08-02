"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

 
const content = [
  {
    title: "Personalized Playlists",
    description:
      "Discover music tailored just for you. Our algorithm curates playlists based on your taste, listening habits, and moods. Let your music app evolve with your style.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVyc29uYWxpemVkJTIwUGxheWxpc3RzfGVufDB8fDB8fHww"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="real-time sync"
        />
      </div>
    ),
  },
  {
    title: "Real-Time Sync",
    description:
      "Switch between devices seamlessly. Start a song on your phone, continue on your laptop. Your music follows you everywhere in real time with no interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://plus.unsplash.com/premium_photo-1671995576248-57bf9036d326?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmVhbCUyMFRpbWUlMjBTeW5jJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="real-time sync"
        />
      </div>
    ),
  },
  {
    title: "Offline Listening",
    description:
      "No internet? No problem. Download your favorite tracks and listen offline anywhere, anytime. Perfect for travel, flights, or saving data.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src="https://images.unsplash.com/photo-1584582835835-c483999a7ae7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmbGluZSUyMGxpc3RlbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="real-time sync"
        />
      </div>
    ),
  },
  {
    title: "Collaborative Playlists",
    description:
      "Create shared playlists with friends or family. Everyone can add songs, making parties and road trips more fun and engaging.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="https://images.unsplash.com/photo-1530801588537-594a77d18206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENvbGxhYm9yYXRpdmUlMjBQbGF5bGlzdHN8ZW58MHx8MHx8fDA%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="real-time sync"
        />
      </div>
    ),
  },
  {
    title: "WHAT'S NEW?",
    description:
      "Get the free demo classes and deep dive into the latest features. Experience the future of music streaming with our innovative updates and enhancements.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        
      </div>
    ),
  },
];
const WhyChooseUs: React.FC = () => {
    return (
        <div >
            <StickyScroll content={content} />
        </div>
    );
};

export default WhyChooseUs;