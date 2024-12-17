import { useState } from 'react';
import axios from 'axios'; // Ensure this import is present

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    if (!longUrl.trim()) { // Check if longUrl is empty or just whitespace
      alert('Please enter a valid URL');
      return;
    }

    console.log('Before API call, longUrl:', longUrl); // Log the long URL
    try {
      setLoading(true); // Set loading state
      console.log('API call in progress...');
      const response = await axios.post('http://localhost:3001/api/url', { url: longUrl });
      console.log('API response:', response.data); // Log the API response
      alert(response.data.message);
      setShortUrl(response.data.link);
    } catch (error) {
      console.error('Error during API call:', error);
      setError(error.response?.data?.message || 'An error occurred'); // Display error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen bg-purple-300 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-cyan-950">
        <h1 className="text-2xl font-semibold mb-4 text-center">URL Shortener Application</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center">
            <input
              type="text"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="Enter your long URL"
              className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full border border-cyan-950"
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-600 transition"
            >
              {loading ? 'Shortening...' : 'Shorten'}
            </button>
            {loading && <div className="mt-2 text-gray-500">Loading...</div>}
          </div>
        </form>

        {error && <div className="mt-4 text-red-500">{error}</div>}

        {shortUrl && (
          <div className="mt-4 text-center">
            Your shortened URL is:
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
