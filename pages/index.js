import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tip from '../src/Tip';
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
import NewsList from '../src/NewsList';
import ChatList from '../src/ChatList';
import WebPageList from '../src/WebPageList';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import ResultCards from '../src/ResultCards';
import ChatCards from '../src/ChatCards';


const summary = `チャットの要約: 友達と旅行に行く予定を立てています。7月の中旬から下旬にかけて四国に旅行に行くことを計画しています。\n
閲覧ページの要約: 香川県のうどんの人気スポットや、高知県の人気スポット、お祭りに関連するページを閲覧しています。\n
ショッピングの要約: 化粧品や。\n
`

export default function Index() {
  const [context, setContext] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState("history");
  const refrectContext = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 1000);
    setTimeout(() => setContext(summary), 1000);
  };
  const inputText = (e) => {
    setContext(e.target.value);
  }
  const action = (value) => {
    setOpen(true);
    setTimeout(() => setOpen(false), 1000);
    setTimeout(() => setStatus(value), 1000);
  };
  return (
    <Container maxWidth="lg">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          検索デモ画面
        </Typography>
          <TextField
            id="standard-multiline-static"
            label="Y Search"
            fullWidth
            multiline
            maxRows={10}
            placeholder="知りたいことを検索しよう!"
            variant="outlined"
            value={context}
            onChange={(event) => inputText(event)}
          />
          <Grid container alignItems="center" justify="center" direction="column" sx={{ mt: 1, mb: 3 }} >
            <Grid item xs={12}>
              <Button variant="contained" endIcon={<SearchIcon />} onClick={() => action("search")} sx={{ m: '2rem' }}>
                検索する
              </Button>
              <Button variant="outlined" endIcon={<SearchIcon />} onClick={() => action("chat")} sx={{ m: '2rem' }}>
                チャット
              </Button>
            </Grid>
          </Grid>
          {status !== "history" ? (status === "search" ? <ResultCards/> : <ChatCards />) : (
            <div>
              <Tip />
              <Grid container alignItems="center" justify="center" direction="column" >
                <Grid item xs={8}>
                <Typography sx={{ mt: 1, mb: 3 }} color="text.secondary">
                <Button size="large" variant="outlined" onClick={refrectContext}>
                  選択した内容の要約をコンテキストとして反映する
                </Button>
                </Typography>
                </Grid>
              </Grid>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
              <ChatList />
              <NewsList />
              <WebPageList />
            </Stack>
          </div>
        )}
      </Box>
    </Container>
  );
}
