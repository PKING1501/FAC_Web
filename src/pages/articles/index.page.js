import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { POSTS_PATH, postFilePaths } from 'utils/mdx';
import { formatTimecode } from 'utils/timecode';

export { Articles as default } from './Articles';

// export function getStaticProps() {
//   const allPosts = postFilePaths.map(filePath => {
//     const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
//     const { data, content } = matter(source);

//     const { time } = readingTime(content);
//     const timecode = formatTimecode(time);

//     return {
//       ...data,
//       timecode,
//       slug: filePath.replace(/\.mdx?$/, ''),
//     };
//   });

//   const featured = allPosts.find(post => post.featured);

//   const posts = allPosts
//     .filter(post => post.slug !== featured.slug)
//     .sort((a, b) => {
//       return new Date(a.date).getTime() - new Date(b.date).getTime();
//     })
//     .reverse();

//   return {
//     props: { posts, featured },
//   };
// }

export function getStaticProps() {
  const allPosts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data, content } = matter(source);

    const { time } = readingTime(content);
    const timecode = formatTimecode(time);

    return {
      ...data,
      timecode,
      slug: filePath.replace(/\.mdx?$/, ''),
    };
  });

  // console.log('All Posts:', allPosts); // Debugging output

  const featured = allPosts.find(post => post.featured);
  // console.log('Featured Post:', featured); // Debugging output

  const posts = allPosts
    .filter(post => post.slug !== (featured ? featured.slug : ''))
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .reverse();

  // console.log('Filtered and Sorted Posts:', posts); // Debugging output

  return {
    props: { posts, featured },
  };
}
