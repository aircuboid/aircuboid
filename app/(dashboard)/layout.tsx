'use client';

import { signOut } from '@/app/(login)/actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUser } from '@/lib/auth';
import { Home, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  const router = useRouter();

  async function handleSignOut() {
    setUser(null);
    await signOut();
    router.push('/');
  }

  return (
    <header className="border-b border-gray-900 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center bg-black">
        <Link href="/" className="flex items-center">
          <img src="/images/company-logo.png" alt="markAIt Logo" className="h-10 w-10" />
          <span className="ml-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">markAIt</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-400 hover:text-white"
          >
            Pricing
          </Link>
          {user ? (
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer size-9">
                  <AvatarImage alt={user.name || ''} />
                  <AvatarFallback>
                    {user.email
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="flex flex-col gap-1">
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/dashboard" className="flex w-full items-center">
                    <Home className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <form action={handleSignOut} className="w-full">
                  <button type="submit" className="flex w-full">
                    <DropdownMenuItem className="w-full flex-1 cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </button>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white text-sm px-4 py-2 rounded-full"
            >
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">{children}</div>
      
    </section>
  );
}
