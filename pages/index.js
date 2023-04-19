import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Copyright from '../src/Copyright';
import ViewWebPageList from '../src/ViewWebPageList';
import LineChatList from '../src/LineChatList';
import ShoppingList from '../src/ShoppingList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    line: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
    shopping: {
      main: '#eeccb6',
    },
    webpage: {
      main: '#b2dcdf',
    }
  },
});


export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Chat with me!</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            endAdornment={<SearchIcon/>}
            label="Chat with me!"
          />
        </FormControl>
        <ProTip />
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
        <ThemeProvider theme={theme}>
          <LineChatList color="line" />
          <ViewWebPageList color="webpage" />
          <ShoppingList color="shopping" />
        </ThemeProvider>
      </Stack>
      </Box>
    </Container>
  );
}
