import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import React from "react";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
            sed eos voluptate doloremque dicta ipsa neque iusto, ab ipsum,
            obcaecati eius. Cum porro, fugiat sint exercitationem culpa tempore
            amet deserunt.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/10990271/pexels-photo-10990271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
            sed eos voluptate doloremque dicta ipsa neque iusto, ab ipsum,
            obcaecati eius. Cum porro, fugiat sint exercitationem culpa tempore
            amet deserunt.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/10990271/pexels-photo-10990271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
