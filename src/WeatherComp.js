

var WeatherComp = (props)=>{
    
    var dispatch = props.dispatch;
    var state = props.state;
    var locData = state.locData;
    console.log(locData);

    return(
        <div className="WaetherComp">
            <div className="card1">
                <h1></h1>
            </div>
            <div className="card2"></div>
          
        </div>
    ) 
}

export default WeatherComp;