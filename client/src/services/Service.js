export const getRectangles = async () =>  {
    try {
        let response = await (await fetch("/api/rectangles", {method: "GET"})).json();
        return response.rectangles;
    } catch (error) {
        console.log(error)
        return [];
    }
};

export const addRectangle = async (options) =>  {
    try {
        await fetch("/api/add_rectangle", {
            method: "POST",
            body: JSON.stringify(options),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.log(error)
    }
};

