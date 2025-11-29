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
    <div className="min-h-screen relative transition-colors duration-300 p-6 sm:p-12 overflow-x-hidden font-sans">
      <AnimatedBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto flex flex-col gap-20 items-center py-12 sm:py-20"
      >
        <div className="flex flex-col gap-8 items-center w-full">
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
            className="w-full flex justify-center"
          >
            <Bio />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full flex justify-center"
        >
          <Projects />
        </motion.div>

        {posts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-full flex justify-center"
          >
            <LatestPosts posts={posts} />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <SocialLinks />
        </motion.div>
      </motion.div>
    </div>
  );
}
