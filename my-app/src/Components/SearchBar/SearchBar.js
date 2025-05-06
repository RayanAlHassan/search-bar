import {React, useState} from 'react'
import styles from "./SearchBar.module.css"
import TextField from "@mui/material/TextField";
import data from "../ListData.json"
function SearchBar() {

    const[inputText, setInputText]=useState("");
 const filteredData= data.filter(item=>
    item.title.toLowerCase().includes(inputText.toLowerCase()) ||
    item.text.toLowerCase().includes(inputText.toLowerCase()) )


  return (
    <>
  <section>
  <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={(e) => setInputText(e.target.value)}

        />
  </section>
    <section>

        <article>
            <ol>
           { filteredData.map( (item)=>(<li key={item.id}>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                </li>) ) } 
        
            </ol>
        </article>
    </section>
    </>
  )
}

export default SearchBar
