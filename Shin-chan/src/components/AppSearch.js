import './AppSearch.css';

function AppSearch(props) {
    const { value, onValueChange } = props;
    return (
        
        <div className="app-search">
            <center><h2>แนะนำตัวละคร</h2></center>
            <input 
                className="app-search-input"
                type="text" 
                value={value} 
                placeholder="Search"
                onChange={(event) => onValueChange(event.target.value)} 
            />
        </div>
        
    );
}

export default AppSearch;