export const parseData = (data) => {
    const result = data.map((result) => {
        return result.name;
    })
    return result.join(", ");
}

export const imageLoader = () => {
    return 'https://placeholder.pics/svg/300/FFFFFF/ddd';
} 