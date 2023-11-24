import * as React from 'react';
import { Box, Typography, styled } from '@mui/material';
import HeaderImage  from '../../images/books-1920.png';
import HeaderImageMob  from '../../images/books-640.png';
import { Container } from '@mui/material';
import SearchForm from '../SearchForm/SearchForm';
import { Link } from 'react-router-dom';

const StyledHeader = styled(Typography)(({ theme }) => ({
  fontWeight: '900',
  fontSize: '40px',
  textAlign: 'center',
  color: '#fff',
  lineHeight: '110%',
  paddingBlock: '10px',
  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
    paddingBlock: '3vw',
  },
}));

const Header = () => {
  return (
    <Box component="header" sx={(theme) => ({
      background: `url(${HeaderImageMob}) center no-repeat`,
      backgroundSize: 'cover',
      [theme.breakpoints.up('lg')]: {
        backgroundImage: `url(${HeaderImage})`,
      }
    })}>
      <Container maxWidth={'md'} >
        <StyledHeader variant="h1">
          <Link to={'/'} style={{
            color: 'inherit'
          }}>
            Search for books
          </Link>
        </StyledHeader>

        <SearchForm />
      </Container>
    </Box>
  )
};

export default Header;
