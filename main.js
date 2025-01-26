// Opportunities Data
const opportunities = [
    { title: "Beach Cleanup", description: "Help clean the beach.", date: "2025-02-10", time: "10:00 AM - 2:00 PM" },
    { title: "Food Drive", description: "Distribute food.", date: "2025-02-20", time: "1:00 PM - 4:00 PM" }
];

// Populate Opportunities
const opportunitiesContainer = $("#opportunitiesContainer");
opportunities.forEach(opportunity => {
    opportunitiesContainer.append(`
        <div class="card mt-3">
            <div class="card-body">
                <h5>${opportunity.title}</h5>
                <p>${opportunity.description}</p>
                <p><strong>Date:</strong> ${opportunity.date} | <strong>Time:</strong> ${opportunity.time}</p>

                <!-- Dropdown for Role Selection -->
                <div class="form-group">
                    <label for="roleSelect">Select Role</label>
                    <select class="form-control" id="roleSelect">
                        <option value="volunteer">Volunteer</option>
                        <option value="participant">Participant</option>
                        <option value="sponsor">Sponsor</option>
                    </select>
                </div>
            </div>
        </div>
    `);
});
