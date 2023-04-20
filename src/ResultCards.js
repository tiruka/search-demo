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
    { title: 'Card 1', content: 'Content for card 1' },
    { title: 'Card 2', content: 'Content for card 2' },
    { title: 'Card 3', content: 'Content for card 3' },
    { title: 'Card 4', content: 'Content for card 4' },
    { title: 'Card 5', content: 'Content for card 5' },
    { title: 'Card 6', content: 'Content for card 6' },
    { title: 'Card 7', content: 'Content for card 7' },
    { title: 'Card 8', content: 'Content for card 8' },
  ];
  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} key={index}>
          {index == 0 || index == 1 ? (
          <Card sx={{ backgroundColor: "#b2dcdf" }}>
            <CardContent>
              <Typography variant="h5">{card.title}</Typography>
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
  );
}