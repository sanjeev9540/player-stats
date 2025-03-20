import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db('stats');
        const matchCollection = db.collection('match');
        if (req.method === 'GET') {
            const match = await matchCollection.find({}).toArray();
            return res.status(200).json({data: match});
        } else if (req.method === 'POST') {
            const { date, teams, venue } = req.body;
            const result = await matchCollection.insertOne({ _id: date, teams, venue, createdAt: new Date() });
            return res.status(200).json({ message: 'Match Added', matchId: result.intersetedId });
        }
    } catch (error) {
        console.log('Database connection error', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}