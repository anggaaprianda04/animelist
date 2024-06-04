export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`, {
        next: {
            revalidate: 3600
        }
    });
    return response.json();
}


