import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItem from "@/components/NavItem";
import UserDropdown from "@/components/UserDropdown";

type User = {
    id: string;
    name?: string | null;
    email?: string | null;
};


const Header = ({user} : {user : User}) => {

    return (
      <header className="sticky top-0  header ">
<div className="container header-wrapper">
    <Link href="/">
<Image src="/assets/icons/logo.svg" alt="logo" height={30} width={130} className="cursor-pointer h-8 w-auto"/>
</Link>
    <nav className="hidden sm:block">
<NavItem />
    </nav>
    <UserDropdown user={user}/>
</div>
      </header>
  )
}

export default Header
