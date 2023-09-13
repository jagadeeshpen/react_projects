import {useState} from 'react'

function App() {
  const [search, setSearch] = useState("")
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
