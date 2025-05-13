import React, { useState, useEffect } from "react";
import "./AssignmentThree.css";

function AssignmentThree() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // const [hoveredUserId, setHoveredUserId] = useState(null);
  const [clickedUserId, setClickedUserId] = useState(null);

  const handleAddressClick = (userId) => {
    setClickedUserId(clickedUserId === userId ? null : userId);
  };

    return (
      <div className="title-container">
        <h1>User List</h1>
        <p> Sample API calls and fetching from external API in React</p>
        
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td data-label='ID'>{user.id}</td>
                  <td data-label='Name'>{user.name}</td>
                  <td data-label='Username'>{user.username}</td>
                  <td data-label='Email'>{user.email}</td>
                  <td data-label='Phone'>{user.phone}</td>
                  <td data-label='Address'>
                    <div className="address-dropdown"
                      onClick={() => handleAddressClick(user.id)}
                      style={{ cursor: "pointer" }}>
                      <div className="address-summary" 
                        // onMouseEnter={() => setHoveredUserId(user.id)}
                        // onMouseLeave={() => setHoveredUserId(null)}
                      >{user.address.city}</div>
                      {clickedUserId === user.id && (
                      <div className="address-details">
                        <p><strong>Street:</strong> {user.address.street}</p>
                        <p><strong>Suite:</strong> {user.address.suite}</p>
                        <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
                      </div>
                    )}
                      {/* <div className="address-details">
                        <p>{user.address.suite}</p>
                        <p>{user.address.street}</p>
                      </div> */}
                    </div>
                  </td>
                  <td data-label='Company'>
                    <div className="company-dropdown" 
                      onClick={() => handleAddressClick(user.id)}
                      style={{ cursor: "pointer" }}>
                      {user.company.name}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );

//   return (
//     <div className="title-container">
//       <h1>User List</h1>
//       <p>
//         Understand how to make API calls in React by fetching and displaying
//         user data from an external API. This project covers using useEffect to
//         trigger data fetching on mount, managing state with useState, and
//         handling potential errors gracefully.
//       </p>

//       {loading ? (
//         <p className="loading">Loading...</p>
//       ) : (
//         <div className="table-container">
//           <table className="user-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Company</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id}>
//                   <td data-label="ID">{user.id}</td>
//                   <td data-label="Name">{user.name}</td>
//                   <td data-label="Email">{user.email}</td>
//                   <td data-label="Phone">{user.phone}</td>
//                   <td data-label="Company">{user.company.name}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
}

export default AssignmentThree;
