import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === text.length - 1) {
        clearInterval(interval);
        return;
      }
      setDisplayText((prev) => prev + text[currentIndex]);
      currentIndex++;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

export default function ChatCards() {
  const text = `旅行に関する情報が欲しい場合は、ウェブページが最適な情報源になります。
  安くて快適なホテルを見つけるためには、比較サイトや口コミサイトが役立ちます。
  また、旅行前に必要なアイテムや持ち物、パッキングのコツ、旅行保険や現地通貨の手配に関する情報が欲しい場合は、
  旅行ガイドブックや専門サイトを利用することをおすすめします。京都に関する情報を得たい場合は、
  観光地の公式サイトや観光案内所などが役立ちます。`

  return (
    <Grid item xs={12} sm={6} key={1}>
      <Card sx={{ backgroundColor: "#F2F2F2" }}>
        <CardContent>
          <Typography variant="body1">
            <Typewriter text={text}/>
          </Typography>
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