'use client';
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { title } from "process";
 
const UpcomingWebniars: React.FC = () => {
    // Example static data for upcoming webinars
    const webinars = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    date: "2024-07-10",
    time: "5:00 PM",
    description: "An introduction to building web apps with Next.js.",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    date: "2024-07-15",
    time: "7:00 PM",
    description: "Deep dive into advanced React component patterns.",
  },
  {
    id: 3,
    title: "Building a Music Player with React",
    date: "2024-07-20",
    time: "6:30 PM",
    description: "Learn how to create a fully functional music player UI using React.",
  },
  {
    id: 4,
    title: "Integrating Spotify & Apple Music APIs",
    date: "2024-07-25",
    time: "8:00 PM",
    description: "Explore music streaming APIs to fetch tracks, albums, and playlists.",
  },
  {
    id: 5,
    title: "Audio Visualization with Web Audio API",
    date: "2024-07-30",
    time: "5:30 PM",
    description: "Bring your music app to life with animated audio visualizations.",
  },
  {
    id: 6,
    title: "User Authentication in Music Platforms",
    date: "2024-08-05",
    time: "7:00 PM",
    description: "Implement secure sign-up, login, and session handling in your app.",
  },
  {
    id: 7,
    title: "Deploying Your Music App to Vercel",
    date: "2024-08-10",
    time: "6:00 PM",
    description: "Step-by-step guide to deploying full-stack music apps with Vercel.",
  },
];


    return (
        <div className="p-12 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className=" text-teal-600 font-semibold tracking-wide uppercase text-5xl">
                    FEATURED WEBINARS
                </h2>
                <p className="mt-10  text-2xl font-bold text-center text-white">Enhance Your Musical Journey</p>
            </div>
            <div className="mt-10">
                <HoverEffect items={webinars.map(webinar=>(
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: `/webinars/${webinar.id}`,
                    }
                ))} />
            </div>
            <div className="mt-10 text-center">
            <Link href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
            View All webinars
            </Link>
            </div>
          </div>
        </div>
    );
};

export default UpcomingWebniars;