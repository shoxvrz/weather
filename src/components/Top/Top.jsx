import SearchIcon from '@mui/icons-material/Search';
import './Top.scss'

function Top({inputHandler, searchHandler}) {
  return (
    <div className="top">
        <div className="top__input">
            <input onChange={inputHandler} type="text" placeholder="Enter the city name..." />
            <SearchIcon onClick={searchHandler}  className='iconSearch'/>
        </div>
    </div>
  )
}

export default Top