# CRD App with Vite & TypeScript

This is a simple Create-Read-Delete (CRD) application built with Vite, TypeScript, and JSON Server. It allows users to add and remove entities dynamically while keeping the application lightweight and fast.

## Live Demo
Run locally: http://localhost:5175/  
Check API data: http://localhost:5001/entities  

## Technologies Used
- Frontend: Vite, TypeScript, HTML, CSS, JavaScript  
- Backend (Mock API): JSON Server  
- Tools & Dependencies: npm, Node.js  

## Features
- Fast performance with Vite  
- Live data fetching from a mock API  
- Dynamic UI updates without refreshing  
- TypeScript integration for type safety  
- Well-structured and modular codebase  

## Getting Started

### Clone the Repository

### Install Dependencies

### Start the JSON Server

### Run Vite Development Server

Once running, open http://localhost:5175/.

## Code Snippets

### Fetching Data from API
```typescript

npm run dev
export async function fetchEntities() {
    try {
        const response = await fetch("http://localhost:5001/entities");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching entities:", error);
        return [];
    }
}

Adding a New Entity
export async function addEntity(name: string) {
    try {
        const response = await fetch("http://localhost:5001/entities", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name })
        });
        return await response.json();
    } catch (error) {
        console.error("Error adding entity:", error);
        return null;
    }
}
