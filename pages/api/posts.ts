import { Post } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function posts(
  req: NextApiRequest,
  res: NextApiResponse<Post | Post[]>,
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const posts = await prisma.post.findMany();
      res.status(200).json(posts);
      break;

    case 'POST':
      const post = await prisma.post.create({
        data: {
          title: "fafafa",
          published: true,
          authorId: 1,
          content: "ewareasfklrweaf"
        },
      });
      res.status(200).json(post); // idを含む保存したデータを返す
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
}
}