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
  const text = `あなたは最近友達と旅行を計画しており、それについて話し合っています。
  京都と箱根についての観光地や宿泊予約サイトをいくつか閲覧されております。これらを元におすすめのホテル情報・口コミや観光のプラン、現地の天気をお調べいたしました。
  `

  return (
    <Grid item xs={12} sm={6} key={1}>
      <Card sx={{ backgroundColor: "#F2F2F2" }}>
        <CardContent>
          <Typography variant="body1">
            <Typewriter text={text}/>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}