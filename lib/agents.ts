// lib/agents.ts

// Mock function to get a list of agents. Replace this with your actual data fetching logic.
export async function getAgents() {
    return [
      {
        id: '1',
        name: 'AI Marketing Assistant',
        description: 'Helps with creating marketing campaigns.',
        price: 49.99,
        rating: 4.8,
      },
      {
        id: '2',
        name: 'AI Customer Service Bot',
        description: 'Provides customer support to your clients.',
        price: 39.99,
        rating: 4.5,
      },
      {
        id: '3',
        name: 'AI Sales Generator',
        description: 'Generates and nurtures leads for your business.',
        price: 59.99,
        rating: 4.7,
      },
    ];
  }
  
  // Function to get an agent by ID
  export async function getAgentById(agentId: string) {
    const agents = await getAgents();
    return agents.find((agent) => agent.id === agentId) || null;
  }
  