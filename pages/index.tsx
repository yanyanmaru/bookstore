import { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import { Post, prisma } from "@/lib/prismaClient";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleClick = async () => {
    // await fetch('/api/posts', {
    //   method: 'POST',
    // });
    await fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));

  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>fafafa</div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
      <button onClick={handleClick}>post</button>
    </main>
  );
}

