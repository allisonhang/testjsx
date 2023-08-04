import { useState } from "react";

const SearchBar = ({onSubmit}) => {
    const [search, setSearch] = useState("");

    // const handleClick = () =>{
    //     onSubmit(searchText);
    // };

    const handleFormSubmit =(event) => {
        event.preventDefault();
        onSubmit(search);
    }
    
    const handleChange= (event)=> { 
        setSearch(event.target.value);
    }
    return (
        <div>
             {/* <input onChange={setSearchText} value={searchText} />
            <button onClick={handleClick}>Search</button>  */}
            <form onSubmit={handleFormSubmit}>
                <input type="text" checkSpell onChange={handleChange} value={search} />
            </form>         
        </div>
    );

};


export default SearchBar;

