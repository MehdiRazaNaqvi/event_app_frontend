import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../app/page.module.css'

 
const Search = () => {
    return (
        <AppBar position='static' className={styles.navbar}>
            <Toolbar>
                <InputBase
                    placeholder='Search'
                    inputProps={{ 'aria-label': 'search' }}
                    className={styles.navsearch}
                    endAdornment={ <SearchIcon className={styles.searchIcon} />}
                />

            </Toolbar>
            <button className={styles.searchBtn}>
                <b>
                    Search
                </b>
            </button>
        </AppBar>
    );
}

export default Search;