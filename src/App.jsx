import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreatePlaylist from "./pages/CreatePlaylist.jsx"; // Import the new CreatePlaylist page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create-playlist" element={<CreatePlaylist />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
