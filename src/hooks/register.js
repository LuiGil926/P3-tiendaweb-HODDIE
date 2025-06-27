const register = async (name, email, password) => {
    try {
        const response = await fetch("https://p3-api-newxs.onrender.com/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password,
                name,
                email
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return { status: false, message: "Error al registrar, intenta de nuevo" };
    }
};  

export default register;