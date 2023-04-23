import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tip from '../src/Tip';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
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


const summary = `【チャットの要約】:\n・旅行に行く計画を立てており、どこに行くかを考えています。

【閲覧記事の要約】:
・京都市内の観光名所、清水寺が新たなライトアップイベントを開催。
・箱根彫刻の森美術館がリニューアルオープン。

上記を考慮してください。
`

// 【ウェブページの要約】:
// ・安くて快適なホテルを見つけるためのアドバイス
// ・各ホテルのサービスや設備の比較表
// ・旅行者の口コミや評価の情報
// ・旅行前に持っておくべきアイテムのリスト
// ・パッキングのコツと荷造りのポイント
// ・旅行保険や現地通貨の手配についてのアドバイス
// `

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
            maxRows={20}
            placeholder="知りたいことを検索しよう!"
            variant="outlined"
            value={context}
            onChange={(event) => inputText(event)}
          />
          <Grid container alignItems="center" justify="center" direction="column" sx={{ mt: 1, mb: 3 }} >
            <Grid item xs={12}>
              <Button variant="contained" endIcon={<SearchIcon />} onClick={() => action("search")} sx={{ m: '2rem' }}>
                提案を探す
              </Button>
            </Grid>
          </Grid>
          {status !== "history" ? ( <><ChatCards /><ResultCards/></>) : (
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
