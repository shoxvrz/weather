import WaterIcon from '@mui/icons-material/Water';
import './Bottom.scss'
import AirIcon from '@mui/icons-material/Air';

function Bottom({wind, hum}) {
  return (
    <div className="bottom">
        <div className="bottom__info">
            <div className="bottom__info-humidity">
            <WaterIcon  className='iconWater'/>
            <div>

            <h1>{hum}%</h1>
            <p>Humidity</p>
            </div>
            </div>
            <div className="bottom__info-wind">
                <AirIcon className='iconWind'/>
                <div>

            <h1>{wind} Km/h</h1>
            <p>Wind Speed</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bottom