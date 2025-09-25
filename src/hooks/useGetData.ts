import { useQuery, type QueryKey, type UseQueryOptions } from '@tanstack/react-query';

const genericFetcher = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
};

export const useGetData = <T>(
    queryKey: QueryKey,
    url: string,
    options?: UseQueryOptions<T, Error>
) => {
    return useQuery<T, Error>({
        queryKey,
        queryFn: () => genericFetcher<T>(url),
        ...options,
    });
};
