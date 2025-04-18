import './LatestMatch.css';

const LatestMatch = ({ match }) => (
  <div className="latest-match">
    <p><strong>Competing Team:</strong> {match.competing_team}</p>
    <p><strong>Date:</strong> {match.date}</p>
    <p><strong>Venue:</strong> {match.venue}</p>
    <p><strong>Result:</strong> {match.result}</p>
    <img src={match.competing_team_logo} alt={match.competing_team} />
    <p><strong>Man of the Match:</strong> {match.man_of_the_match}</p>
    <p><strong>Umpires:</strong> {match.umpires}</p>
  </div>
);

export default LatestMatch;
