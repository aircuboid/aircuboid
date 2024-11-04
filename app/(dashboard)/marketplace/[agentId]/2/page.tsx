// File 2: app/(dashboard)/marketplace/[agentId]/2/page.tsx
'use client';

import { Star } from 'lucide-react';

export default function AgentDetailPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        AI Customer Service Bot
      </h1>
      <div className="p-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p className="text-lg text-gray-400 mb-6">Provides customer support to your clients using AI-based natural language processing, making customer interactions smoother.</p>
        <p className="text-2xl font-bold mb-4">
          $39.99{' '}
          <span className="text-xl font-normal text-gray-400">per agent</span>
        </p>
        <div className="flex items-center mb-6">
          <Star className="h-6 w-6 text-yellow-400 mr-2" />
          <span className="text-gray-300">4.5 / 5</span>
        </div>
      </div>
    </main>
  );
}
