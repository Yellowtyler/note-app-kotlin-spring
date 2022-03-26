import {MdSearch} from 'react-icons/md';

const Search = ({ handleSearchNote}) => {
    return <div className="search">
        <MdSearch search="search-icons" size='1.3em'></MdSearch>
        <input type="text" onChange={(event) => handleSearchNote(event.target.value)} placeholder='type to search...'></input>
    </div>
};

export default Search;