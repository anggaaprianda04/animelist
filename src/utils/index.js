export const parseData = (data) => {
    const checkData = data == null ? [] : data
    const result = checkData.map((result) => {
        return result.name;
    })
    return result.join(", ");
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data?.length - gap) + 1);
    const last = first + gap;

    const response = {
        data: data?.slice(first, last),
    }
    return response;
}

export const imageLoader = () => {
    return 'https://placeholder.pics/svg/300/FFFFFF/ddd';
} 