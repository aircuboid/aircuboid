import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart, Sparkles } from 'lucide-react';
import { Terminal } from './terminal';

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Discover Your AI Agent
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Revolutionize Your Workflow</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Enter the next era of productivity with markAIt, the ultimate marketplace to find, purchase, and deploy AI agents designed to handle your tasks with unmatched efficiency.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="https://markait.com/marketplace"
                  target="_blank"
                >
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
                    Browse Agents
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Terminal />
              <div className="absolute top-0 left-0 w-full h-full bg-sparkles opacity-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black to-gray-900 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-white">
                  AI-Powered Efficiency
                </h2>
                <p className="mt-2 text-base text-gray-400">
                  Empower your business with intelligent agents that simplify complex tasks and accelerate processes seamlessly.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-white">
                  Diverse Agent Marketplace
                </h2>
                <p className="mt-2 text-base text-gray-400">
                  Explore a wide range of AI agents tailored for different industries and tasks, all in one place.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <ArrowRight className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-white">
                  Easy Deployment
                </h2>
                <p className="mt-2 text-base text-gray-400">
                  Quickly integrate agents into your workflow with intuitive deployment tools and user-friendly setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to transform your productivity?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-400">
                Dive into a future where AI agents handle your repetitive tasks, so you can focus on creativity and innovation.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a
                href="https://github.com/markait/ai-marketplace"
                target="_blank"
              >
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full text-xl px-12 py-6 inline-flex items-center justify-center">
                  View the code
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="mb-8 lg:mb-0">
              <h3 className="text-lg font-bold text-white">markAIt</h3>
              <p className="mt-4 text-base text-gray-400">
                Transforming productivity with AI-driven agents that empower businesses to automate and innovate.
              </p>
            </div>
            <div className="mb-8 lg:mb-0">
              <h3 className="text-lg font-bold text-white">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Marketplace</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Stay Connected</h3>
              <p className="mt-4 text-base text-gray-400">
                Subscribe to our newsletter to receive updates and special offers.
              </p>
              <form className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-r-md hover:from-purple-700 hover:to-pink-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}