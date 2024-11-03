'use client';

import { removeTeamMember } from '@/app/(login)/actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TeamDataWithMembers, User } from '@/lib/db/schema';
import { customerPortalAction } from '@/lib/payments/actions';
import { useActionState } from 'react';
import { InviteTeamMember } from './invite-team';

type ActionState = {
  error?: string;
  success?: string;
};

export function Settings({ teamData }: { teamData: TeamDataWithMembers }) {
  const [removeState, removeAction, isRemovePending] = useActionState<
    ActionState,
    FormData
  >(removeTeamMember, { error: '', success: '' });

  const getUserDisplayName = (user: Pick<User, 'id' | 'name' | 'email'>) => {
    return user.name || user.email || 'Unknown User';
  };

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-xl lg:text-3xl font-bold tracking-tight text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Team Settings</h1>
      <Card className="mb-8 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <CardHeader>
          <CardTitle className="text-white text-lg font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="mb-4 sm:mb-0">
                <p className="font-semibold text-white">
                  Current Plan: {teamData.planName || 'Free'}
                </p>
                <p className="text-base text-gray-400">
                  {teamData.subscriptionStatus === 'active'
                    ? 'Billed monthly'
                    : teamData.subscriptionStatus === 'trialing'
                      ? 'Trial period'
                      : 'No active subscription'}
                </p>
              </div>
              <form action={customerPortalAction}>
                <Button type="submit" className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:to-purple-600 text-white rounded-full">
                  Manage Subscription
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="mb-8 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <CardHeader>
          <CardTitle className="text-white text-lg font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {teamData.teamMembers.map((member, index) => (
              <li key={member.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder.svg?height=32&width=32`}
                      alt={getUserDisplayName(member.user)}
                    />
                    <AvatarFallback>
                      {getUserDisplayName(member.user)
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">
                      {getUserDisplayName(member.user)}
                    </p>
                    <p className="text-sm text-gray-400 capitalize">
                      {member.role}
                    </p>
                  </div>
                </div>
                {index > 1 ? (
                  <form action={removeAction}>
                    <input type="hidden" name="memberId" value={member.id} />
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white rounded-full"
                      size="sm"
                      disabled={isRemovePending}
                    >
                      {isRemovePending ? 'Removing...' : 'Remove'}
                    </Button>
                  </form>
                ) : null}
              </li>
            ))}
          </ul>
          {removeState?.error && (
            <p className="text-red-400 mt-4">{removeState.error}</p>
          )}
        </CardContent>
      </Card>
      <InviteTeamMember />
    </section>
  );
}
