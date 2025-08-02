"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
        quote:
            "This app completely changed how I discover music. The personalized playlists are always on point — it's like it knows my mood before I do.",
        name: "Alex Johnson",
        title: "Music Enthusiast",
    },
    {
        quote:
            "The real-time sync is insane. I can start a track on my phone and finish it on my laptop with zero interruption. Love it!",
        name: "Riya Sen",
        title: "UI/UX Designer",
    },
    {
        quote:
            "Offline mode is a lifesaver during flights and travel. I just download my playlists and enjoy non-stop music without worrying about data.",
        name: "Carlos Rivera",
        title: "Travel Blogger",
    },
    {
        quote:
            "The collaborative playlist feature makes parties so much more fun. Everyone gets to add their favorites — it’s a game changer!",
        name: "Emily Nguyen",
        title: "Event Organizer",
    },
    {
        quote:
            "Simple, fast, and beautifully designed. This is the music experience I’ve been waiting for.",
        name: "Dev Patel",
        title: "Frontend Developer",
    },
];

const MusicSchoolTestimonials: React.FC = () => {
    return (
        <div className="h-[50rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center overflow-hidden">
            <div className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}>


                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
                <h2 className="text-3xl font-bold text-center  z-10 my-50 mb-10">Hear our Harmony: Voices of Success</h2>

                <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">

                    <div className="w-full max-w-6xl">
                        <InfiniteMovingCards
                            items={testimonials}
                            direction="right"
                            speed="fast"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MusicSchoolTestimonials;