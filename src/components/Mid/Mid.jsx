import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './Mid.scss'

function Mid({city, temp, icon}) {
  return (
    <div className="mid">
        <div className="mid__info">
            <h1 className="city">
                {city}
            </h1>
            <WbSunnyIcon className='iconSun'/>
            <h2 className='deg'>{temp}°C</h2>
        </div>
    </div>
  )
}

export default Mid