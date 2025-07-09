import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
    date: "2025-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR",
    date: "2025-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
    date: "2025-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with build-in SSR.",
    date: "2025-02-10",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
