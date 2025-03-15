import { fetchEntities, addEntity, deleteEntity } from "./crud";

// Type for an Entity
type Entity = {
    id: number;
    name: string;
};

// Select DOM Elements
const entityForm = document.getElementById("entityForm") as HTMLFormElement | null;
const entityNameInput = document.getElementById("entityName") as HTMLInputElement | null;
const entityList = document.getElementById("entityList") as HTMLUListElement | null;

// Function to Display Entities
function displayEntities(entities: Entity[]): void {
    if (!entityList) return; // Ensure entityList exists

    entityList.innerHTML = ""; // Clear list before updating
    entities.forEach(entity => {
        const li = document.createElement("li");
        li.textContent = entity.name;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");

        // Add event listener for deleting
        deleteButton.addEventListener("click", async () => {
            await deleteEntity(entity.id);
            await init(); // Ensure UI updates
        });

        li.appendChild(deleteButton);
        entityList.appendChild(li);
    });
}

// Initialize App
async function init() {
    if (!entityList) return; // Ensure entityList exists

    const entities = await fetchEntities();
    displayEntities(entities);
}

// Handle Form Submission
if (entityForm && entityNameInput) {
    entityForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!entityNameInput.value.trim()) return;

        const newEntity = await addEntity(entityNameInput.value);
        if (newEntity) {
            entityNameInput.value = "";
            await init(); // Refresh UI after adding entity
        }
    });
}

// Ensure DOM is loaded before running init()
document.addEventListener("DOMContentLoaded", () => {
    init();
});