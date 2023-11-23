import * as React from 'react';
import {
  IconButton,
  styled,
  alpha,
  InputBase,
  FormGroup,
  MenuItem,
  FormControl,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SelectElement from '../SelectElement/SelectElement';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loadBooks } from '../../features/books/booksSlice';
import {
  setCategory,
  setSearchQuery,
  setSortOrder,
} from '../../features/form/formSlice';

const StyledSearch = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.95),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: '0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '2'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
},
}));

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const {
    searchQuery,
    bookCategory,
    sortOrder,
  } = useAppSelector(state => state.form);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(loadBooks({
      query: searchQuery.trim(),
      category: bookCategory,
      sortBy: sortOrder,
    }));
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value.trim()));
  };

  const handleCategoryChange = (event: string) => {
    dispatch(setCategory(event));
  };

  const handleSortOrderChange = (event: string) => {
    dispatch(setSortOrder(event));
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledSearch>
        <SearchIconWrapper>
          <IconButton type="submit">
            <SearchIcon/>
          </IconButton>
        </SearchIconWrapper>

        <StyledInputBase
          fullWidth
          placeholder="Search…"
          name="query"
          value={searchQuery}
          onChange={handleQueryChange}
          inputProps={{ 'aria-label': 'search' }}
        />
      </StyledSearch>

      <FormGroup row sx={(theme) => ({
        justifyContent: 'end',
        [theme.breakpoints.up('sm')]: {
          justifyContent: 'space-evenly'
        }
      })}>
        <FormControl sx={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <SelectElement
            name="categories"
            labelText="Categories"
            value={bookCategory}
            handleOnChange={handleCategoryChange}
          >
            <MenuItem value="">all</MenuItem>
            <MenuItem value="art">art</MenuItem>
            <MenuItem value="biography">biography</MenuItem>
            <MenuItem value="computers">computers</MenuItem>
            <MenuItem value="history">history</MenuItem>
            <MenuItem value="medical">medical</MenuItem>
            <MenuItem value="poetry">poetry</MenuItem>
          </SelectElement>
        </FormControl>

        <FormControl sx={(theme) => ({
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: '20px'
        })}>
          <SelectElement
            name="sortBy"
            labelText="Sorting by"
            value={sortOrder}
            handleOnChange={handleSortOrderChange}
          >
            <MenuItem value="relevance">relevance</MenuItem>
            <MenuItem value="newest">newest</MenuItem>
          </SelectElement>
        </FormControl>
      </FormGroup>
    </form>
  )
};

export default SearchForm;
