import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import BlogHero from "@/components/BlogHero";
import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";


async function BlogPost({ params }) {
  const postSlug = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={postSlug.frontmatter.title}
        publishedOn={postSlug.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={postSlug.content} />
      </div>
    </article>
  );
}

export default BlogPost;
