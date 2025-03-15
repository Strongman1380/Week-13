export async function fetchEntities() {
    try {
        const response = await fetch("http://localhost:5001/entities");
        if (!response.ok) throw new Error("Failed to fetch entities");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function addEntity(name: string) {
    try {
        const response = await fetch("http://localhost:5001/entities", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name })
        });
        if (!response.ok) throw new Error("Failed to add entity");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function deleteEntity(id: number) {
    try {
        await fetch(`http://localhost:5001/entities/${id}`, { method: "DELETE" });
    } catch (error) {
        console.error(error);
    }
}