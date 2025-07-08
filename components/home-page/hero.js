import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/mbali.png"
          alt="An image showing Mbali"
          width={300}
          height={300}
        />
      </div>
      <h1>Hey, I'm Mbali</h1>
      <p>
        I am a full-stack developer with a passion for creating dynamic and
        responsive web applications. I love coding and enjoy learning new
        technologies.
      </p>
    </section>
  );
}
export default Hero;
