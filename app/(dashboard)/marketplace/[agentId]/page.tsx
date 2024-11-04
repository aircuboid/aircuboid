'use client';

import { getAgentById } from '@/lib/agents';
import { useUser } from '@/lib/auth';
import { Star } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AgentDetailPage() {
  const { agentId } = useParams(); // Extracting the agentId from the URL
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    async function fetchAgent() {
      try {
        const fetchedAgent = await getAgentById(agentId);
        if (fetchedAgent) {
          setAgent(fetchedAgent);
        } else {
          console.error('Agent not found');
        }
      } catch (error) {
        console.error('Error fetching agent:', error);
      } finally {
        setLoading(false);
      }
    }

    if (agentId) {
      fetchAgent();
    }
  }, [agentId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Loading agent details...</p>
      </div>
    );
  }

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Agent not found.</p>
      </div>
    );
  }

  const handleGetAgent = () => {
    if (!user) {
      router.push('/login');
    } else {
      console.log('Proceeding with agent purchase:', agent.name);
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        {agent.name}
      </h1>
      <div className="p-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p className="text-lg text-gray-400 mb-6">{agent.description}</p>
        <p className="text-2xl font-bold mb-4">
          ${agent.price}{' '}
          <span className="text-xl font-normal text-gray-400">per agent</span>
        </p>
        <div className="flex items-center mb-6">
          <Star className="h-6 w-6 text-yellow-400 mr-2" />
          <span className="text-gray-300">{agent.rating} / 5</span>
        </div>
        <button
          onClick={handleGetAgent}
          className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:to-purple-600 text-white px-6 py-3 rounded-md inline-flex items-center"
        >
          Get Agent
        </button>
      </div>
    </main>
  );
}
