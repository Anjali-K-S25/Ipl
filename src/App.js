import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TeamMatches from './components/TeamMatches';
import NotFound from './components/NotFound';
import './App.css';

const App = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/team-matches/:id" element={<TeamMatches />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
