import './Caritem.css'


const Caritem=(props)=>{
    const {car , onCarClick} = props;
    return(
        <div className="car-item">
            <div className="car-item-content">
                <img src={car.thumbnailUrl} onClick={() => onCarClick(car)}/>
                <h4>{car.title}</h4>
            </div>
        </div>
    );
}

export default Caritem;