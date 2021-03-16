import logo from './logo.svg';
import './App.css';
import SearchComponent from './SearchComponent';
import { useReducer } from 'react';
import axios from 'axios';
import WeatherComp from './WeatherComp';






function App() {

  async function fetchData(dest){
    var resp = {};
    if(dest!==""){
      resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${dest}&appid=44ee963ea8384bd561e7cce2a9b68f08`)
    }
    return resp;
  }

  function reducer(state,action){

    if(action.searchkey){
      return {...state,searchkey:action.searchkey};  
    }
    if(action == 'search'){
      fetchData(state.searchkey).then(res=> ({...state,locData:res.data}) )
    }
    return {...state};
  }
  
  const [state, dispatch] = useReducer(reducer, {searchkey:"",locData:{}});

  console.log(state);
  return (
    <div className="App">
      <SearchComponent state={state} dispatch={dispatch} />
      <WeatherComp state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
