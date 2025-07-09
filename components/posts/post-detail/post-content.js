import Postheader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with Next.js",
  image: "getting-started-nextjs.png",
  content: "# This is a first",
  date: "2025-02-10",
};
function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <Postheader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}
export default PostContent;
