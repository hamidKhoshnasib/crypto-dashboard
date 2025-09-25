import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import logo from '@/assets/images/LOREMEPSUM.svg'
import {Button} from "@/components/ui";

function Header() {
    return (
        <header className="flex items-center h-[100px] border-b border-white/50 bg-black/50">
            <div className="flex justify-between items-center w-full lg:max-w-7xl lg:px-32 px-10 mx-auto">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="lorem logo"
                        width={221}
                        height={38}
                        priority
                    />
                </Link>
                <Button>Connect Wallet</Button>
            </div>
        </header>
    );
}

export default Header;