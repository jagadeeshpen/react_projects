import {useState} from 'react'

function App() {
  const [search, setSearch] = useState("")
  const changeHandler = e =>{
    setSearch(e.target.value);
    console.log(e)
  }
  const submitHandler = e =>{
    e.preventDefault();
    console.log(search)
  }
  return (
    <div>
      <center>
        <h2>Image Gallery</h2>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={changeHandler}/> <br/> <br/>
          <input type="submit" value="Click to Search"/>
        </form>
      </center> 
    </div>
  );  
}

export default App;
