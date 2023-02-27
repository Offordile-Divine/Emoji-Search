import React,{useState, useEffect} from 'react'
import './Form.css'
import Database from '../Database/emojibase.json'

function Form() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        const newData = Database.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
        setData(newData);
    },[search])
  return (
    <div className='form'>
        <div className='input'>
            <input type="text" name="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>

        {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copy")}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
        )}
        
    </div>
  )
}

export default Form