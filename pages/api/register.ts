import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        return res.status(405).end();
    }

    try {
        const {email, name, password} = req.body;

        const exisitingUser = await prismadb.user.findUnique({
            where: {
                email,
            }
        });

        if(exisitingUser) {
            return res.status(422).json({error: 'Email taken'});
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data: {
                email, 
                name, 
                hashedPassword,
            }
        });

        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).end();
    }
} 