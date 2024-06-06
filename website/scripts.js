document.addEventListener("DOMContentLoaded", () => {
    // Add event listener to the "FREE DEMO" button
    const demoButton = document.querySelector(".cta-button");
    demoButton.addEventListener("click", () => {
        alert("You have clicked the FREE DEMO button!");
    });

    // Search functionality
    const searchInput = document.querySelector(".search");
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Search for: ${query}`);
                // Implement the search functionality here
                // For example, redirect to a search results page
                // window.location.href = `search.html?query=${encodeURIComponent(query)}`;
            }
        }
    });

    const searchButton = document.querySelector(".search-button");
    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Search for: ${query}`);
            // Implement the search functionality here
            // For example, redirect to a search results page
            // window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
    });
});

