export const getRectangles = async () =>  {
        let data, response = await fetch("/api/rectangles", {method: "GET"});
        if (!response.ok) {
            throw Error(response.statusText);
        }
        data = await response.json();
        return data.rectangles;
};

export const addRectangle = async (options) =>  {
    const response = await fetch("/api/add_rectangle", {
        method: "POST",
        body: JSON.stringify(options),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw Error(response.statusText);
    }
};

export const removeRectangle = async (id) =>  {
    const response = await fetch("/api/remove_rectangle", {
        method: "POST",
        body: JSON.stringify({id}),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw Error(response.statusText);
    }
};

