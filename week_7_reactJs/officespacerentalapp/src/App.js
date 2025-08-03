import React from "react";
import "./App.css";

function App() {
  const officeList = [
    { name: "Downtown Workspace", rent: 55000, address: "123 Business Street, Chennai" },
    { name: "Tech Park Space", rent: 75000, address: "IT Highway, Chennai" },
    { name: "Central Hub", rent: 65000, address: "Main Road, Chennai" }
  ];

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      {/* Heading */}
      <h1>Office Space Rental</h1>

      {/* Image */}
      <img 
        src="https://via.placeholder.com/400x200.png?text=Office+Space" 
        alt="Office Space" 
      />

      {/* Loop through offices */}
      {officeList.map((item, index) => (
        <div key={index} style={{ marginTop: "20px" }}>
          <h2>{item.name}</h2>
          <p>Address: {item.address}</p>
          <p style={{ color: item.rent < 60000 ? "red" : "green" }}>
            Rent: ₹{item.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;


