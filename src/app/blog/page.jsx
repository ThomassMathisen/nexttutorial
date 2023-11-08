import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testID" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/18940197/pexels-photo-18940197/free-photo-of-albino-cockatiel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod
            sequi consequatur? Commodi ad fugit sequi enim, architecto
            reprehenderit quam odio, minus dolores, quaerat praesentium fugiat?
            Porro eligendi voluptates soluta?
          </p>
        </div>
      </Link>
      <Link href="" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/18940197/pexels-photo-18940197/free-photo-of-albino-cockatiel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod
            sequi consequatur? Commodi ad fugit sequi enim, architecto
            reprehenderit quam odio, minus dolores, quaerat praesentium fugiat?
            Porro eligendi voluptates soluta?
          </p>
        </div>
      </Link>
      <Link href="" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/18940197/pexels-photo-18940197/free-photo-of-albino-cockatiel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod
            sequi consequatur? Commodi ad fugit sequi enim, architecto
            reprehenderit quam odio, minus dolores, quaerat praesentium fugiat?
            Porro eligendi voluptates soluta?
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
