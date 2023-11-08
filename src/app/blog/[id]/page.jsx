import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ad
            laudantium aspernatur quam suscipit, enim aperiam sit voluptas eius
            perspiciatis repellat nulla reiciendis. Magni eveniet nostrum
            tenetur beatae incidunt atque.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/14021938/pexels-photo-14021938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/18046372/pexels-photo-18046372/free-photo-of-person-walking-on-road-in-desert-leading-towards-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in
          commodi assumenda reprehenderit, dicta omnis. Dignissimos, facere
          reiciendis qui sint asperiores obcaecati neque distinctio quibusdam
          quos, fugiat, ad libero ipsam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam in commodi assumenda reprehenderit, dicta
          omnis. Dignissimos, facere reiciendis qui sint asperiores obcaecati
          neque distinctio quibusdam quos, fugiat, ad libero ipsam! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quibusdam in commodi
          assumenda reprehenderit, dicta omnis. Dignissimos, facere reiciendis
          qui sint asperiores obcaecati neque distinctio quibusdam quos, fugiat,
          ad libero ipsam! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quibusdam in commodi assumenda reprehenderit, dicta omnis.
          Dignissimos, facere reiciendis qui sint asperiores obcaecati neque
          distinctio quibusdam quos, fugiat, ad libero ipsam!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
