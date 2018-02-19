class RectanglesService {
    async getRectangles() {
        try {
            let response = await (await fetch("/api/rectangles", {method: "GET"})).json();
            return response.rectangles;
        } catch (error) {
            console.log(error)
            return [];
        }
    }

    async addRectangle(options) {
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
    }
}

const Service = new RectanglesService();

export { Service };

