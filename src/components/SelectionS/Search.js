import React, { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState();

    const handleChange = e => {
		setSearch({
			...search,
			[e.target.name]: e.target.value,
		});
    };
    
    return (
        <div className="search">
            <h1>Search Movie By Title</h1>
            <input 
            type="text"
            name="title"
            value={search.title}
            onChange={handleChange}
            />
        </div>
    )
}
export default Search;