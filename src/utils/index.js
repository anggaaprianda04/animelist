export const parseData = (data) => {
    const checkData = data == null ? [] : data
    const result = checkData.map((result) => {
        return result.name;
    })
    return result.join(", ");
}

export const getNestedAnime = (resource, objectProperty) => {
    const result = resource;
    return result.data?.flatMap((item) => item[objectProperty]);
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data?.length - gap) + 1);
    const last = first + gap;

    const response = {
        data: data?.slice(first, last),
    }
    return response;
}

export const ENUM = {
    ANIME: 'anime',
    MANGA: 'manga',
    CHARACTER: 'character',
    MAGAZINE: 'magazine',
}