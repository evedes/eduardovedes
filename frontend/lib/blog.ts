import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  readingTime: string;
  tags?: string[];
  image?: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      // Extract image from content (look for first image in markdown)
      const imageMatch = content.match(/!\[.*?\]\((.*?)\)/);
      const image = imageMatch ? imageMatch[1] : undefined;

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        description: data.description || "",
        content,
        readingTime: readingTime(content).text,
        tags: data.tags || [],
        image,
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Extract image from content (look for first image in markdown)
    const imageMatch = content.match(/!\[.*?\]\((.*?)\)/);
    const image = imageMatch ? imageMatch[1] : undefined;

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      content,
      readingTime: readingTime(content).text,
      tags: data.tags || [],
      image,
    };
  } catch {
    return null;
  }
}
