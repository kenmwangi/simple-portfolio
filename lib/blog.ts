import fs from "fs";
import path from "path";
import matter from "gray-matter";

// get all the mdx files from the directory
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}
// Read data from those files
function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}
// Present the mdx data and metadata
function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    let { data: metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "app", "blog", "contents"));
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}m ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = `Today`;
  }

  let fullDate = targetDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

// import fs from "fs";
// import matter from "gray-matter";
// import path from "path";
// import rehypePrettyCode from "rehype-pretty-code";
// import rehypeStringify from "rehype-stringify";
// import remarkParse from "remark-parse";
// import remarkRehype from "remark-rehype";
// import { unified } from "unified";

// type Metadata = {
//     title: string
//     publishedAt: string
//     summary: string
//     image?: string
// }

// function getMDXFiles(dir: string) {
//     return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
// }
// export async function markdownToHTML(markdown: string) {
//     const p = await unified().use(remarkParse).use(remarkRehype).use(rehypePrettyCode, {
//         theme: {
//             light: "min-light",
//             dark: "min-dark"
//         },
//         keepBackground: false
//     })
//         .use(rehypeStringify)
//         .process(markdown)

//     return p.toString();
// }

// export async function getPost(slug: string) {
//     const filePath = path.join('content', `${slug}.mdx`);
//     let source = fs.readFileSync(filePath, 'utf-8');
//     const { content: rawContent, data: metadata } = matter(source);
//     const content = await markdownToHTML(rawContent);
//     return {
//         source: content,
//         metadata: metadata,
//         slug,
//     }
// }

// async function getAllPosts(dir: string) {
//     let mdxFiles = getMDXFiles(dir);
//     return Promise.all(
//         mdxFiles.map(async (file) => {
//             let slug = path.basename(file, path.extname(file))
//             let { metadata, source } = await getPost(slug)
//             return {
//                 metadata,
//                 slug,
//                 source
//             }
//         })
//     )
// }

// export async function getBlogPosts() {
//     return getAllPosts(path.join(process.cwd(), 'content'))
// }
