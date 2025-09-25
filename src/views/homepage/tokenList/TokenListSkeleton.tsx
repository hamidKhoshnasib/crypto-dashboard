"use client"

import React from 'react';

const SkeletonRow = () => (
    <div className="flex items-center justify-between w-full gap-4 px-4 py-3 border-b border-gray-800 animate-pulse">
        {/* Name Placeholder */}
        <div className="flex items-center gap-3">
        <div className="w-6 h-4 bg-gray-700 rounded"/>
            <div className="w-10 h-10 bg-gray-700 rounded-full"/>
            <div>
                <div className="h-4 mb-2 bg-gray-700 rounded w-14"/>
                <div className="w-24 h-3 bg-gray-700 rounded"/>
            </div>
        </div>
        {/* Price Placeholder */}
        <div className="hidden h-4 bg-gray-700 rounded w-28 md:block"/>
        {/* Button Placeholder */}
        <div className="w-24 h-9 bg-gray-700 rounded-lg"/>
    </div>
);

function TokenListSkeleton() {
    return (
        <div className="w-full">
            {Array.from({ length: 4 }).map((_, i) => <SkeletonRow key={i} />)}
        </div>
    );
}

export default TokenListSkeleton;