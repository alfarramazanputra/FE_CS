// import React, { useState, useEffect } from 'react';
// import Card from './fragments/Card';

// function Test() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts/')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setData(data);
//       })
//       .catch(error => {
//         console.error('There was a problem with your fetch operation:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Data from API</h1>
//       <ul>
//         {data.length > 0 ? (
//           data.map(item => (
//             <li key={item.id}>
//               <div>
//                 <p>Title: {item.title}</p>
//                <Card
//                CardTitle={item.title}
//                />
//               </div>
//             </li>
//           ))
//         ) : (
//           <li>No data available</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default Test;
