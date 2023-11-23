import * as React from 'react';
import { Box, Container, Grid, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import BooksCount from '../../components/BooksCount/BooksCount';
import BookCard from '../../components/BookCard/BookCard';
import { Link } from 'react-router-dom';
import { StyledText } from '../BookDetails/BookDetails';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import { loadMore } from '../../features/books/booksSlice';

const BooksList = () => {
  const { items: books, totalCount } = useAppSelector(state => state.books);
  const dispatch = useAppDispatch();
  const ITEMS_PER_PAGE = 30;
  const [currentPage, setCurrentPage] = React.useState(1);
  const {
    searchQuery,
    bookCategory,
    sortOrder,
  } = useAppSelector(state => state.form);
  const isLoading = useAppSelector(state => state.books.isLoading);

  const handleLoadMore = () => {
    dispatch(loadMore({
      query: searchQuery,
      category: bookCategory,
      sortBy: sortOrder,
      startIndex: currentPage * ITEMS_PER_PAGE,
    }));

    setCurrentPage(prev => prev + 1);
  }

  return (
    <Box component="main">
      <Container maxWidth={'xl'} sx={{
        textAlign: 'center'
      }}>
        {!!totalCount && (
          <BooksCount count={totalCount} />
        )}
        {isLoading && (
          <Box sx={{
            padding: '1rem'
          }}>
            <CircularProgress />
          </Box>
        )}

        {(!isLoading && !books.length) && (
          <StyledText variant="h2">
            Click search to load books
          </StyledText>
        )}

        {!!books.length && (
          <>
            <Grid
              container
              spacing={{ xs: 2, md: 3, lg: 4 }}
              columns={{ xs: 1, sm: 8, md: 12, lg: 16 }}
            >
              {books.map(book => (
                <Grid item xs={1} sm={4} md={4} lg={4} key={book.etag}>
                  <Link to={book.id}>
                    <BookCard book={book}/>
                  </Link>
                </Grid>
              ))}
            </Grid>

            <LoadMoreButton loadHandler={handleLoadMore} />
          </>
        )}
      </Container>
    </Box>
  )
};

export default BooksList;
