import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET'){
        return res.status(405).end();
    }

    try {
        const {currentUser} = await serverAuth(req, res);

        // Fetch all Worked Times this Month
        const workedTimes = await prismadb.workedTime.findMany({
            where: {
                id: {
                    in: currentUser?.workedTimeId,
                }
            }
        });

        return res.status(200).json(workedTimes);
    } catch (error) {
        return res.status(400).end();
    }
}