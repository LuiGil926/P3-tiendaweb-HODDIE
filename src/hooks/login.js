const login = async (user, password) => {
    try {
        const res = await fetch("https://p3-api-newxs.onrender.com/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user,
                password
            })
        })
        const data = await res.json()
        return data

    } catch (error) {
        console.error(error)
    }
}

export default login