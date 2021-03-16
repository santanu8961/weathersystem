

var SearchComponent = (props)=>{
    
    var dispatch = props.dispatch;
    var state = props.state;

    return(
        <div className="SearchComponent">
            <input onChange={(e)=>{dispatch({searchkey:e.target.value})}} placeholder="Start Typing" id="SearchBar" />
            <button onClick={()=>{dispatch('search')}} id="SearchButton">Search</button>
        </div>
    ) 
}

export default SearchComponent;