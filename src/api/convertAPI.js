

const api = async (a, b) => {

    const result = await (
        await fetch(`https://free.currconv.com/api/v7/convert?q=${a}_${b}&compact=ultra&apiKey=c44d14842e150b967ace`)
        ).json()
        
    return result[`${a}_${b}`];
}


export default api;