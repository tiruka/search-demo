import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


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
  京都と箱根についての記事を閲覧されており、関心があると判断しました。
  これらを元におすすめのホテル情報・口コミや観光のプラン、現地の天気をお調べいたしました。
  また、観光の共通点から金沢についてもご提案いたします。
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