import React, { useState, useEffect } from 'react';
import useDebounce from '../../utilities/useDebounce';

const initialSearch = {
    title: "",
}
const Search = (props) => {
    const [search, setSearch] = useState(initialSearch);

    // no action for 1 second
    const debouncedSearch = useDebounce(search, 1000);

    useEffect(() => {
        if (!search.title) {
            return null;
        }
        // 
        if (debouncedSearch) {
            props.handleSearch(search.title)
        }

    }, [debouncedSearch]);

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