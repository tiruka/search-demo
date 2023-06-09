import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


export default function ResultCards() {
  const cardData = [
    { title: '箱根についてのご提案' },
    { title: '京都についてのご提案' },
    { title: '類似のご提案【金沢】'},
    { title: '箱根市のおすすめホテル・旅館 20選', content: '湯河原・強羅・箱根湯本 · 京王プレリアホテル. 4.6. (733件) · ハートンホテル 4.4 · ダイワロイネットホテル. 4.3 · ホテルオークラ. 4.8.' },
    { title: '京都のおすすめ観光サイトTop10', content: '京都を代表する観光名所や京都の見どころまとめ、京都旅の中でしか出会えない京都の魅力をお楽しみください。金閣寺（鹿苑寺）...' },
    { title: '金沢のおすすめ観光サイトTop10', content: '【Y.comは即時値引きでお得】さらにタイムセールや期間限定プランなどが満載。 【施設情報】【伝統と革新の融合】' },
    { title: '箱根のおすすめ観光サイトのプラン', content: '旅の大切な思い出となるような贅沢で楽しいひとときを過ごせる有名スポットのご提案...' },
    { title: '京都旅行・京都ツアー おすすめプランを紹介', content: '宇治、天橋立などの情報も満載。国内旅行・国内ツアーのご予約・お問合せなAAA交通社.' },
    { title: '古都金沢のおすすめ観光サイトのプラン', content: '金沢は古都であるとともに温泉や海鮮も楽しめる場所です。金沢空港や新幹線でのアクセスもよく...' },
    { title: '箱根の4月、5月の天気と服装', content: '箱根の天気について知り、天気の準備をしましょう。服装のご提案もいたします。...' },
    { title: '京都の4月、5月の天気と服装', content: '京都の天気について知り、天気の準備をしましょう。服装のご提案もいたします。...' },
    { title: '金沢のおすすめお食事どころ', content: 'レンタカーを借りて金沢を回るのはいかがでしょうか？車で回る場合のおすすめ食事どころをご提案します。' }
  ];
  return (
    <>
      <TextField
        id="standard-multiline-static"
        label="追加条件でもっと情報が必要ですか？"
        fullWidth
        multiline
        maxRows={10}
        placeholder="追加条件でもっと情報が必要ですか？"
        variant="outlined"
        sx={{ mt: 4, mb: 3 }}
      />
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            {[0, 1, 2].includes(index) ? (
            <Card sx={{ color: "#ffffff", backgroundColor: "#00bfff" }}>
              <CardContent>
                <Typography variant="subtitle1">{card.title}</Typography>
              </CardContent>
            </Card>
            ) : (
              <Card>
              <CardContent>
                <Typography variant="h5">{card.title}</Typography>
                <Typography variant="body2">{card.content}</Typography>
              </CardContent>
            </Card>
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );
}