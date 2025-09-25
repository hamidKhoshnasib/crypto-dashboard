import React from 'react';
import Image from "next/image";
import cubesImage from "@/assets/images/cubes.svg";

function IntroSection() {
    return (
            <section className="relative flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-2/3 flex flex-col justify-center gap-[10px] max-w-[660px]">
                    <p className="font-bold text-2xl tracking-widest text-primary-100">
                        LOREM IPSUM
                    </p>
                    <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                        <span className="text-primary-100">Lorem ipsum dolor </span>
                        sit amet, consectetur
                    </h1>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Eget velit aliquet sagittis id consectetur purus ut faucibus
                        pulvinar. Sit amet commodo nulla facilisi nullam vehicula. Arcu risus quis varius quam quisque
                        id diam.
                    </p>
                </div>
                <div className="relative w-full md:w-1/3 h-[400px]">
                    <Image
                        src={cubesImage}
                        alt="cubes illustration"
                        fill
                        className="absolute !-top-10"
                    />
                </div>
            </section>
    );
}

export default IntroSection;