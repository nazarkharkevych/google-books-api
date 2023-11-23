import * as React from 'react';
import { Container, Box, Typography, styled, Stack, Paper, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import Image from 'mui-image';
import { useAppSelector } from '../../app/hooks';
import { StyledTextGrey } from '../../components/BookCard/BookCard';

export const StyledText = styled(Typography)(({ theme }) => ({
  padding: '1rem',
  fontSize: '2.5rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '3.75rem',
    padding: '2rem',
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  paddingTop: '10px',
  fontSize: '1.5rem',
  textAlign: 'start',
  fontWeight: 500,
}));

const StyledImageContainer = styled(Box)(({ theme }) => ({
  padding: '1rem 1.5rem',
  maxWidth: '300px',
  minWidth: '200px',
  maxHeight: '500px',
  marginBottom: '20px',
  marginLeft: 'auto',
  marginRight: 'auto',
  flexGrow: 1,
  background: theme.palette.grey[200],
  [theme.breakpoints.up('sm')]: {
    padding: '2.5rem 4rem',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '3rem 8rem',
  }
}));

const BookDetails = () => {
  const books = useAppSelector(state => state.books.items);
  const { bookId = '' } = useParams();

  const foundBook = React.useMemo(() => {
    return books.find(book => book.id === bookId);
  }, [bookId, books]);

  return (
    <Box component="main">
      <Container maxWidth="xl" sx={{
        textAlign: 'center'
      }}>
        {foundBook
          ? (
          <Grid
            container
            columns={{ xs: 1, sm: 8, md: 12, lg: 16 }}
            sx={{
              paddingTop: 3
            }}
          >
            <Grid item xs={1} sm={8} md={5} lg={7} sx={(theme) => ({

            })}>
              <StyledImageContainer>
                <Image
                  src={foundBook.volumeInfo.imageLinks?.thumbnail || ''}
                  duration={0}
                />
              </StyledImageContainer>
            </Grid>

            <Grid item xs={1} sm={8} md={7} lg={9}>
              <Stack spacing={3} sx={(theme) => ({
                alignItems: 'start',
                [theme.breakpoints.up('sm')]: {
                  padding: '1rem',
                },
                [theme.breakpoints.up('md')]: {
                  padding: '1rem 3rem',
                }
              })}>
                <StyledTextGrey>
                  {foundBook.volumeInfo.categories?.join('/')
                    || '*no category*'}
                </StyledTextGrey>

                <StyledTitle variant="h3">
                  {foundBook.volumeInfo.title}
                </StyledTitle>

                <StyledTextGrey sx={{
                  textDecoration: 'underline'
                }}>
                  {foundBook.volumeInfo.authors?.join(', ') || '*no authors*'}
                </StyledTextGrey>

                <Paper variant="outlined" sx={{
                  padding: '1rem',
                }}>
                  <Typography textAlign={'start'}>
                    {foundBook.volumeInfo.description || '*no description*'}
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        )
        : (
          <StyledText variant="h2">
            The book is not found
          </StyledText>
        )}
      </Container>
    </Box>
  )
};

export default BookDetails;
