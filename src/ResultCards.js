import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export default function ResultCards() {
  const cardData = [
    { i: 0, title: 'ホテルについての検索結果' },
    { i: 1, title: '天気についての検索結果' },
    { i: 2, title: '観光サイトについての検索結果' },
    { i: 3, title: 'Yサービスからの提案'},
    { i: 4, title: '', content: 'Content for card 8' },
    { i: 5, title: '京都のおすすめ観光サイトTop10', content: '京都を代表する観光名所や京都の見どころまとめ、京都旅の中でしか出会えない京都の魅力をお楽しみください。金閣寺（鹿苑寺）...' },
    { i: 6, title: 'Card 5', content: 'Content for card 5' },
    { i: 7, title: 'Card 5', content: 'Content for card 5' },
    { i: 8, title: 'Card 5', content: 'Content for card 5' },
    { i: 9, title: '京都旅行・京都ツアー おすすめプランを紹介', content: '宇治、天橋立などの情報も満載。国内旅行・国内ツアーのご予約・お問合せなAAA交通社.' },
    { i: 10, title: 'Card 5', content: 'Content for card 5' },
    { i: 11, title: '京都のお天気は', content: 'Content for card 6' },
    { i: 12, title: 'Card 7', content: 'Content for card 7' },
    { i: 13, title: 'Card 8', content: 'Content for card 8' },
    { i: 14, title: 'Card 8', content: 'Content for card 8' },
    { i: 15, title: 'Card 8', content: 'Content for card 8' },
  ];
  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={3} key={index}>
          {[0, 1, 2, 3].includes(index) ? (
          <Card sx={{ color: "#ffffff", backgroundColor: "#dc143c" }}>
            <CardContent>
              <Typography variant="subtitle1">{card.title}</Typography>
            </CardContent>
          </Card>
          ) : (
            <Card>
            <CardContent>
              <Typography variant="body1">{card.title}</Typography>
              <Typography variant="body2">{card.content}</Typography>
            </CardContent>
          </Card>
          )}
        </Grid>
      ))}
    </Grid>
  );
}