import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutPage from './components/About';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
