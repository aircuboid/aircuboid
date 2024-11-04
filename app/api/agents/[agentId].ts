// pages/api/agents/[agentId].ts
import { getAgentById } from '@/lib/db/queries'; // Adjust according to your data-fetching method
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { agentId } = req.query;

  try {
    const agent = await getAgentById(agentId as string);
    if (!agent) {
      return res.status(404).json({ error: 'Agent not found' });
    }
    res.status(200).json(agent);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
