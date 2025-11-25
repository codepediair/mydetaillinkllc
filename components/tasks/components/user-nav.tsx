"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useSignOut } from "@/hooks/use-signout";

export function UserNav() {
  const { data: session, isPending } = authClient.useSession();
  const handleSignOut = useSignOut();

  if (isPending) {
    return null;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={
                session?.user.image ??
                `https://avatar.vercel.sh/${session?.user.email}`
              }
              alt={session?.user.name}
            />
            <AvatarFallback className="rounded-lg">
              {session?.user.name && session.user.name.length > 0
                ? session.user.name.charAt(0).toUpperCase()
                : session?.user.email.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage
                src={
                  session?.user.image ??
                  `https://avatar.vercel.sh/${session?.user.email}`
                }
                alt={session?.user.name}
              />
              <AvatarFallback className="rounded-lg">
                {session?.user.name && session.user.name.length > 0
                  ? session.user.name.charAt(0).toUpperCase()
                  : session?.user.email.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">
                {session?.user.name && session.user.name.length > 0
                  ? session.user.name
                  : session?.user.email.split("@")[0]}
              </span>
              <span className="text-muted-foreground truncate text-xs">
                {session?.user.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
