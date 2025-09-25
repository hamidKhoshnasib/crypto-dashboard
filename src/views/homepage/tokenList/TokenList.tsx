"use client";

import React from 'react';
import {useGetData} from '@/hooks/useGetData';
import {Button, Table} from '@/components/ui';
import Image from 'next/image';
import {ColumnDefinition, Token} from "@/types";
import TokenListSkeleton from "@/views/homepage/tokenList/TokenListSkeleton";

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

function TokenList() {
    const {data: tokens, isLoading, isError} = useGetData<Token[]>(['topTokens'], API_URL);

    const columns: ColumnDefinition<Token>[] = [
        {
            header: '',
            cell: (token, index) => <span className="text-primary-400">{index + 1}</span>
        },
        {
            header: 'Name',
            cell: (token) => (
                <div className="flex items-center gap-3">
                    <Image src={token.image} alt={token.name} width={42} height={42} className="rounded-full"/>
                    <div className="flex flex-col">
                        <span className="font-semibold">{token.symbol.toUpperCase()}</span>
                        <span className="text-gray-400 text-xs">{token.name}</span>
                    </div>
                </div>
            )
        },
        {
            header: 'Price',
            cell: (token) => (
                <span className="hidden md:block">
                    {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(token.current_price)}
                </span>
            )
        },
        {
            header: '',
            cell: () => <Button variant="secondary">Buy Token</Button>
        }
    ];

    if (isLoading) return <TokenListSkeleton/>;
    if (isError) return <div className="text-center py-10 text-red-500">Failed to fetch data.</div>;

    return <Table data={tokens || []} columns={columns}/>
}

export default TokenList;