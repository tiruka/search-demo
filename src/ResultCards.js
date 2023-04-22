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
    { title: 'ホテルについての検索結果' },
    { title: '観光サイトについての検索結果' },
    { title: 'Yサービスからの提案'},
    { title: '京都市のおすすめホテル・旅館 20選', content: '河原町・烏丸・大宮周辺 · 京王プレリアホテル京都烏丸五条. 4.6. (733件) · ハートンホテル京都. 4.4 · ダイワロイネットホテル京都四条烏丸. 4.3 · ホテルオークラ京都. 4.8.' },
    { title: '京都のおすすめ観光サイトTop10', content: '京都を代表する観光名所や京都の見どころまとめ、京都旅の中でしか出会えない京都の魅力をお楽しみください。金閣寺（鹿苑寺）...' },
    { title: 'Y旅行サイトで予約', content: '【Y.comは即時値引きでお得】さらにタイムセールや期間限定プランなどが満載。 【施設情報】【伝統と革新の融合】' },
    { title: '京都府のホテル・旅館・宿一覧、宿泊予約', content: '旅の大切な思い出となるような贅沢なひとときを過ごせる宿を探しましょう。今回は、京都にあるホテルの中でも多くのカップルが思い出の旅行先として ...' },
    { title: '京都旅行・京都ツアー おすすめプランを紹介', content: '宇治、天橋立などの情報も満載。国内旅行・国内ツアーのご予約・お問合せなAAA交通社.' },
    { title: 'Y天気で京都の天気をチェック', content: 'X月の京都の天気は....' },
    { title: '京都旅行におすすめのホテル・旅館', content: '京都の寺社・京都の観光スポット、京都の人気のホテル・旅館から簡単にツアーや宿泊を探せます！新幹線＋宿泊セットプランもお得です。古都京都の旅館・ホテル・ ...' },
    { title: '京都旅行・京都観光特集', content: '京都旅行・ツアー. 格安ツアーからワンランク上のご褒美旅までお得な京都旅行が満載！！ 歴史ある神社仏閣を始め、桜や紅葉など、四季折々の景色を楽しめます。' },
    { title: 'Pポイントでお得にお店探し', content: 'Pポイントを使えるお店を京都で探す' },
    { title: '京都のホテル【最安値】予約 - TOP 10ホテルをチェック', content: '京都の人気ホテルが最大50%オフ。予約手数料なしでおトクに宿泊予約。ホステル・幅広い宿タイプ・フライト＋ホテル・リアルなクチコミ・レンタカーを予約。' },
    { title: '京都行くなら新幹線 - 全国旅行支援適用でおトクに', content: 'スペシャルプライスで旅行プランをご用意！おトクに新幹線旅行に出かけよう！' },
    { title: 'Y地図サービス', content: '旅行の計画に地図と電車を確認しましょう' },
  ];
  const colors = ["#4169e1", "#4169e1", "#dc143c"]
  return (
    <>
      <TextField
        id="standard-multiline-static"
        label="追加のチャット"
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
            <Card sx={{ color: "#ffffff", backgroundColor: colors[index] }}>
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