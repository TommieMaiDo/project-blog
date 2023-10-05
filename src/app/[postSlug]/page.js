import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "@/constants";
import COMPONENT_MAP from "@/helpers/mdx-components";

export async function generateMetadata({ params }) {
  const postSlug = await loadBlogPost(params.postSlug);

  return {
    title: `${postSlug.frontmatter.title} • ${BLOG_TITLE}`,
    description: postSlug.frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const postSlug = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={postSlug.frontmatter.title}
        publishedOn={postSlug.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={postSlug.content} components={COMPONENT_MAP} />
      </div>
    </article>
  );
}

export default BlogPost;
