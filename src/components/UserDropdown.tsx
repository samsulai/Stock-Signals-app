'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from 'lucide-react';
import NavItem from "@/components/NavItem";
const UserDropdown = () => {
  const router = useRouter()
    const handleSignOut = () => {

        router.push('/sign-in')
    }
    const user = {name : 'John Doe', email : 'hello@johndoe'}
    return (
      <DropdownMenu >
          <DropdownMenuTrigger asChild  >
              <div   className='flex items-center gap-2 text-gray-400 hover:text-yellow-500 hover:hover:bg-transparent '>
                  <Avatar className="h-8 w-8">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                          {user.name[0]}
                      </AvatarFallback>
                  </Avatar>
                  <p className='font-medium text-base hidden sm:flex flex-col'>
                      {user.name}

                  </p>
              </div>

          </DropdownMenuTrigger>

          <DropdownMenuContent className="text-gray-400 bg-transparent ">
              <DropdownMenuLabel>
                  <Button variant='ghost' className="flex relative items-center gap-2 py-2">
                      <Avatar className="h-10 w-10">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                              {user.name[0]}
                          </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start">
                          <p className='font-medium md:text-base text-sm text-gray-400'>
                              {user.name}

                          </p>
                          <p className='font-medium text-sm text-gray-500'>
                              {user.email}

                          </p>
                      </div>

                  </Button>
              </DropdownMenuLabel>
           <DropdownMenuSeparator className="bg-gray-600"/>
              <DropdownMenuItem  onClick={handleSignOut} className="text-gray-100 text-md font-medium hover:text-yellow-500 focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
                 <LogOut className="h-4 w-4 mr-2 hidden sm:inline-block"/>
                  Logout
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-600"/>
<nav className="sm:hidden">
<NavItem />
</nav>
          </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default UserDropdown
