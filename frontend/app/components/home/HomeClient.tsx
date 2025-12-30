"use client";

import { motion } from "framer-motion";
import { ProfileHeader } from "./ProfileHeader";
import { Bio } from "./Bio";
import { SocialLinks } from "./SocialLinks";
import { Projects } from "./Projects";
import { LatestPosts } from "./LatestPosts";
import { BlogPost } from "@/lib/blog";
import { AnimatedBackground } from "../AnimatedBackground";

interface HomeClientProps {
  posts: BlogPost[];
}

export function HomeClient({ posts }: HomeClientProps) {
  return (
    <div className="min-h-screen max-h-screen relative transition-colors duration-300 p-6 sm:p-12 pt-20 overflow-y-auto font-sans">
      <AnimatedBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto py-12 sm:py-20"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Profile Info */}
          <div className="flex flex-col gap-8 items-center lg:items-start lg:w-1/2 lg:sticky lg:top-20 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <ProfileHeader />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Bio />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <SocialLinks />
            </motion.div>
          </div>

          {/* Right Column - Projects & Writings */}
          <div className="flex flex-col gap-16 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-full"
            >
              <Projects />
            </motion.div>

            {posts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-full"
              >
                <LatestPosts posts={posts} />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
