
import './Mid.scss';

function Mid({ city, temp, icon }) {
  return (
    <div className="mid">
      <div className="mid__info">
        <h1 className="city">{city}</h1>
        {icon && <div className="icon">{icon}</div>} {/* Render the icon if it exists */}
        <h2 className="deg">{temp}°C</h2>
      </div>
    </div>
  );
}

export default Mid;
