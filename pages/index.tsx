import { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import { prisma } from "@/lib/prismaClient";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then(console.log);
  }, []);

  const handleClick = async () => {
    await fetch('/api/posts', {
      method: 'POST',
    });
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>fafafa</div>
      <button onClick={handleClick}>post</button>
    </main>
  );
}

