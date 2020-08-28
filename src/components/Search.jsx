import React  from 'react';


const Search = (props) => {
    console.log(props)
    

    let timeout;
    
    const searchForGifs = (text) => {
        clearTimeout(timeout)
        timeout=setTimeout(() => {
            console.log(text)
        props.setText(text)
        
            
        },500);
        
        

    }
    return <input type="text" onChange={e => searchForGifs(e.target.value)}/>


};

export default Search;