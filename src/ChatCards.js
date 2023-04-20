import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export default function ChatCards() {
  return (
    <Grid item xs={12} sm={6} key={1}>
      <Card sx={{ backgroundColor: "#F2F2F2" }}>
        <CardContent>
          <Typography variant="h5">ちゃっとの結果をchatGPTから持ってくる</Typography>
        </CardContent>
      </Card>
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
    </Grid>
  );
}