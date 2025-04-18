import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://apis.ccbp.in/ipl')
      .then(response => response.json())
      .then(data => setTeams(data.teams));
  }, []);

  return (
    <div className="home-container">
      <div className="header">
        <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="ipl logo" className="ipl-logo" />
        <h1 className="title">IPL Dashboard</h1>
      </div>
      <ul className="teams-list">
        {teams.map(team => (
          <li key={team.id}>
            <Link to={`/team-matches/${team.id}`}>
              <div className="team-card">
                <img src={team.team_image_url} alt={team.name} />
                <p>{team.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
