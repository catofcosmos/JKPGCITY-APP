async function loadVenues() {
    try {
        // This is where you add the URL
        const response = await fetch('http://localhost:3000/api/venues');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // This helps you see if the 404 is gone

        const listContainer = document.querySelector('.venue-list'); 
        listContainer.innerHTML = ''; 

        data.forEach(venue => {
            const item = document.createElement('div');
            item.className = 'venue-item';
            // Use the column names from your init.sql
            item.innerHTML = `
                <h3>${venue.name}</h3>
                <p>Category: ${venue.category}</p>
                <p>District: ${venue.district || 'N/A'}</p>
            `;
            listContainer.appendChild(item);
        });
    } catch (error) {
        console.error("Could not fetch venues:", error);
    }
}

loadVenues();