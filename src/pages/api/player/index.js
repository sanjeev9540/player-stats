import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db('stats');
        const playerCollection = db.collection('player');

        if (req.method === 'GET') {
            const players = await playerCollection.find({}).toArray();
            return res.status(200).json(players);
        } else if (req.method === 'POST') {
            const { name, team, role } = req.body;
            const result = await playerCollection.insertOne({ name, team, role, createdAt: new Date() });
            return res.status(200).json({ message: 'Player added', playerId: result.intersetedId });
        }
    } catch (error) {
        console.log('Player Connection Error', error);
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}