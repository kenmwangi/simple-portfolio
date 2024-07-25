import { DATA } from "@/data/resume";
import { getBlogPosts } from "@/lib/blog";
import { POSTS } from "@/lib/constants";

export default async function sitemap() {
    let blogs = getBlogPosts().map((post) => ({
        url: `${DATA.url}/blog/${post.metadata.category}/${post.slug}`,
        lastModified: post.metadata.publishedAt
    }));

    let routes = POSTS.map((post) => ({
        url: `${DATA.url}${post.href}`,
        lastModified: new Date().toISOString().split('T')[0]
    }));

    return [...blogs, ...routes]
}