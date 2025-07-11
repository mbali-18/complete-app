import ReactMarkdown from "react-markdown";

import Postheader from "./post-header";
import classes from "./post-content.module.css";

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/props/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <Postheader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
export default PostContent;
