import { getAllPosts } from "@/lib/blog";
import { HomeClient } from "./components/home/HomeClient";

export default function Home() {
  const posts = getAllPosts().slice(0, 2); // Get latest 2 posts

  return <HomeClient posts={posts} />;
}
