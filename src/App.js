import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Work from './pages/Work';
import Education from './pages/Education';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home/>
            } />
          <Route
            exact
            path="/casestudy"
            element={
              <Experience/>
            } />
          <Route
            exact
            path="/work"
            element={
              <Work/>
            } />
          <Route
            exact
            path="/edu"
            element={
              <Education/>
            } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
