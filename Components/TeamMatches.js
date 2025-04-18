import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LatestMatch from './LatestMatch';
import MatchCard from './MatchCard';
import './TeamMatches.css';

const TeamMatches = () => {
  const { id } = useParams();
  const [teamData, setTeamData] = useState({});

  useEffect(() => {
    fetch(`https://apis.ccbp.in/ipl/${id}`)
      .then(res => res.json())
      .then(data => setTeamData(data));
  }, [id]);

  return (
    <div className="team-matches-container">
      <img src={teamData.team_banner_url} alt="team banner" className="team-banner" />
      <h2>Latest Matches</h2>
      {teamData.latest_match_details && <LatestMatch match={teamData.latest_match_details} />}
      <ul className="match-cards">
        {teamData.recent_matches?.map(match => (
          <MatchCard key={match.id} match={match} />
        ))}
      </ul>
    </div>
  );
};

export default TeamMatches;
