// import React, { useState } from 'react';
// import axios from 'axios';

// const UrlShortener = () => {
//   const [longUrl, setLongUrl] = useState('');
//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-4">URL Shortener</h1>
//       <input
//         type="text"
//         value={longUrl}
//         onChange={(e) => setLongUrl(e.target.value)}
//         placeholder="Enter a long URL"
//         className="w-full p-2 border rounded mb-4"
//       />
//       <button
//         onClick={handleShorten}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Shorten URL
//       </button>
//       {shortUrl && (
//         <div className="mt-4">
//           <p>Short URL:</p>
//           <a
//             href={shortUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 underline"
//           >
//             {shortUrl}
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UrlShortener;
