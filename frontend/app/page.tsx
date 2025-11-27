import { getAllPosts } from "@/lib/blog";
import { HomeClient } from "./components/home/HomeClient";

export default function Home() {
  const posts = getAllPosts().slice(0, 3); // Get latest 3 posts

  return <HomeClient posts={posts} />;
}
