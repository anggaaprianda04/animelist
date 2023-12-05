export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.baseUrl}/${resource}?${query}`);
    const anime = await response.json();
    return anime;
}