import * as React from 'react';
import {useEffect} from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector} from 'react-redux';
import  {getSearchResults} from '../../actions/searchActions';
import UserGrid from '../Users/Users';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";





const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Home() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const [searchString, setSearchString] = React.useState("");
  const data = useSelector(state => state.search);

  const handleInput = (event) => {
      let temp = event.target.value;
      setSearchString(event.target.value)
      if(temp.length >= 3){
       
      }else{
          console.log("Length small", searchString)
      }
  }
  const handleSearch = () => {
    if(searchString.length >= 3){
        dispatch(getSearchResults(searchString, page))
        navigateToSearch();
    }else{
        alert('Length smaller than 3')
    }
  }

  const navigateToSearch = () => {
     navigate(`/search/?q=${searchString}&page=1`, { state: searchString });
    }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleInput}
            />
          </Search>
          <Button variant="contained" onClick={handleSearch}>Search</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
