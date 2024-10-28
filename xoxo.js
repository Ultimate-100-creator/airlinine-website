document.getElementById('booking-search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get user input values
  const bookingReference = document.getElementById('booking-reference').value;
  const lastName = document.getElementById('last-name').value;

  // Simulated booking data (in a real scenario, this would be fetched from the server/database)
  const mockBookings = [
    {
      reference: 'ABC123',
      lastName: 'Smith',
      flightNumber: 'BA456',
      origin: 'LHR',
      destination: 'JFK',
      departureDate: '2024-10-30',
      returnDate: '2024-11-05',
      passengers: ['John Smith', 'Jane Smith']
    },
    {
      reference: 'DEF456',
      lastName: 'Johnson',
      flightNumber: 'BA789',
      origin: 'LHR',
      destination: 'DXB',
      departureDate: '2024-11-15',
      returnDate: '2024-11-22',
      passengers: ['Emily Johnson']
    }
  ];

  // Search for the booking
  const booking = mockBookings.find(b => b.reference === bookingReference && b.lastName.toLowerCase() === lastName.toLowerCase());

  // Display booking details if found
  const bookingDetailsSection = document.getElementById('booking-details');
  const bookingInfoDiv = document.getElementById('booking-info');

  if (booking) {
    bookingDetailsSection.style.display = 'block'; // Show booking details section
    bookingInfoDiv.innerHTML = `
      <p><strong>Flight Number:</strong> ${booking.flightNumber}</p>
      <p><strong>Origin:</strong> ${booking.origin}</p>
      <p><strong>Destination:</strong> ${booking.destination}</p>
      <p><strong>Departure Date:</strong> ${booking.departureDate}</p>
      <p><strong>Return Date:</strong> ${booking.returnDate}</p>
      <p><strong>Passengers:</strong> ${booking.passengers.join(', ')}</p>
    `;

    // Show buttons for modifying or canceling the booking
    document.getElementById('modify-booking').style.display = 'block';
    document.getElementById('cancel-booking').style.display = 'block';
  } else {
    // No booking found
    bookingDetailsSection.style.display = 'block';
    bookingInfoDiv.innerHTML = '<p>No booking found with the provided reference and last name.</p>';
    document.getElementById('modify-booking').style.display = 'none';
    document.getElementById('cancel-booking').style.display = 'none';
  }
});

// Modify Booking button action (simulated)
document.getElementById('modify-booking').addEventListener('click', function() {
  alert('Modify booking functionality not implemented in this demo.');
});

// Cancel Booking button action (simulated)
document.getElementById('cancel-booking').addEventListener('click', function() {
  alert('Booking cancelled successfully.');
});
