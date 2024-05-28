export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    if (response.status === 200) {
        const anime = await response.json();
        return anime;
    } else {
        console.log(response.statusText);
        return response.statusText;
    }

}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource);
    return response.data?.flatMap((item) => item[objectProperty]);
}

