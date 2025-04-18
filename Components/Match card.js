import './MatchCard.css';

const MatchCard = ({ match }) => (
  <li className="match-card">
    <img src={match.competing_team_logo} alt={match.competing_team} />
    <p>{match.competing_team}</p>
    <p>{match.result}</p>
    <p>{match.match_status}</p>
  </li>
);

export default MatchCard;
