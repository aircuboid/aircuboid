'use client';

import { updateAccount } from '@/app/(login)/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUser } from '@/lib/auth';
import { Loader2 } from 'lucide-react';
import { startTransition, useActionState } from 'react';

type ActionState = {
  error?: string;
  success?: string;
};

export default function GeneralPage() {
  const { user } = useUser();
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    updateAccount,
    { error: '', success: '' }
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // If you call the Server Action directly, it will automatically
    // reset the form. We don't want that here, because we want to keep the
    // client-side values in the inputs. So instead, we use an event handler
    // which calls the action. You must wrap direct calls with startTranstion.
    // When you use the `action` prop it automatically handles that for you.
    // Another option here is to persist the values to local storage. I might
    // explore alternative options.
    startTransition(() => {
      formAction(new FormData(event.currentTarget));
    });
  };

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-bold tracking-tight text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        General Settings
      </h1>

      <Card className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <CardHeader>
          <CardTitle className="text-white text-lg font-bold" >Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                defaultValue={user?.name || ''}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                defaultValue={user?.email || ''}
                required
              />
            </div>
            {state.error && (
              <p className="text-red-400 text-sm">{state.error}</p>
            )}
            {state.success && (
              <p className="text-green-400 text-sm">{state.success}</p>
            )}
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:to-purple-600 text-white rounded-full"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
