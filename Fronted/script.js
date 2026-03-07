async function fetchVenues() { 
    try {
        const response = await fetch('http://localhost:3000/api/venues');
        const data = await response.json();
        console.log("venues received!:", data);

        const list = document.querySelector('.venue-list');

        
        list.innerHTML = ''; 

        data.forEach(venue => {
            list.innerHTML += `<div class="venue-item">${venue.name} - ${venue.location}</div>`;
        });
    } catch (err) { 
        console.error("could not load venues:", err);
    }
}

fetchVenues();

