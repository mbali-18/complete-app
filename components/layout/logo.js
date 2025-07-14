import classes from "./logo.module.css";
function Logo() {
  return <div className={classes.logo}>Mbali's Next Blog</div>;
}
export default Logo;

// This component is used in the main navigation and displays the logo of the blog.
// It is styled with CSS modules to apply specific styles defined in logo.module.css.
// The logo text is "Mbali's Next Blog", which is a placeholder for the actual blog name.
// The component can be imported and used in other parts of the application, such as the
// main navigation header, to provide a consistent branding across the site.
