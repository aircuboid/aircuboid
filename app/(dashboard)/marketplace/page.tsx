'use client';

import { getAgents } from '@/lib/agents';
import { useUser } from '@/lib/auth';
import { Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default async function MarketplacePage() {
  const agents = await getAgents();

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        AI Agents Marketplace
      </h1>
      <div className="grid md:grid-cols-4 gap-6">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </main>
  );
}

function AgentCard({ agent }: { agent: { id: string; name: string; description: string; price: number; rating: number; } }) {
  const router = useRouter();
  const { user } = useUser(); // Get user status from context

  const handleGetAgent = () => {
    if (!user) {
      router.push('/sign-in');
    } else {
      router.push(`/marketplace/agent/${agent.id}`);
    }
  };

  return (
    <div className="p-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-white mb-2">{agent.name}</h2>
      <p className="text-sm text-gray-400 mb-4">{agent.description}</p>
      <p className="text-2xl font-bold text-white mb-4">
        ${agent.price}{' '}
        <span className="text-xl font-normal text-gray-400">per agent</span>
      </p>
      <div className="flex items-center mb-6">
        <Star className="h-6 w-6 text-yellow-400 mr-2" />
        <span className="text-gray-300">{agent.rating} / 5</span>
      </div>
      <button
        onClick={handleGetAgent}
        className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:to-purple-600 text-white px-4 py-2 rounded-md inline-flex items-center"
      >
        Get Agent
      </button>
    </div>
  );
}
