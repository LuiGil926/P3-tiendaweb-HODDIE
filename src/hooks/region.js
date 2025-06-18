const getregion = async ()=>{
    try {
        const res = await fetch("https://ipapi.co/json/")
        const data = await res.json()
        return data.country_name

    } catch (error) {
        console.error(error)
    }
}

export default getregion