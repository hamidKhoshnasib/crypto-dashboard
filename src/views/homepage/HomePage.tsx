"use client"

import React from 'react';
import Image from "next/image";
import background from "@/assets/images/background.jpg";
import IntroSection from "@/views/homepage/IntroSection";
import TokenList from "@/views/homepage/tokenList/TokenList";

function HomePageView() {
    return (
        <div className="relative w-full overflow-hidden bg-black">
            <div className="absolute max-w-7xl h-[780px] w-full mx-auto inset-0">
                <Image
                    src={background}
                    alt="background"
                    priority
                    fill
                    className="object-cover object-bottom opacity-70 scale-x-[-1]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/95"/>

            </div>
            <div className="relative z-10 max-w-7xl mx-auto lg:px-32 px-10 space-y-16">
                <IntroSection/>
                <h2 className="text-3xl font-bold text-center mb-8 text-white">Top 10 Trending Tokens</h2>
                <TokenList/>
            </div>
        </div>
    );
}

export default HomePageView;