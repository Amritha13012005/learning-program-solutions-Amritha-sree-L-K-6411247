import React from "react";

function UserPage() {
  return (
    <div>
      <h2>Welcome User</h2>
      <p>You can now book tickets for your flights:</p>
      <ul>
        <li>Flight A - Chennai to Delhi - <button>Book Now</button></li>
        <li>Flight B - Chennai to Mumbai - <button>Book Now</button></li>
      </ul>
    </div>
  );
}

export default UserPage;
