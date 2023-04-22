import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function NewsList(){
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const titles = [
    "中国、人口減少が現実味を帯びる",
    "京都・清水寺が新たなライトアップイベントを開催",
    "箱根彫刻の森美術館がリニューアルオープン",
    "日本、再生可能エネルギーの導入目標を引き上げ"
  ]
  const itemList = [
    "中国政府は、人口減少が現実味を帯びていると発表した。これまで一人っ子政策を推進していたため、高齢化が進む中、若年層の生育率低下が進んでいるためである。",
    "京都市内の観光名所、清水寺が新たなライトアップイベントを開催することが発表された。夜間には幻想的なライトアップが施され、新しい観光スポットとして注目を集めている。",
    "リニューアル後の箱根彫刻の森美術館では、彫刻だけでなく、音楽や映像、写真なども展示され、より幅広いアート作品を楽しむことができます。また、美術館の周辺には自然を生かした美しい庭園があり、四季折々の風景を楽しむことができます。",
    "日本政府は、再生可能エネルギーの導入目標を引き上げることを決定した。2050年までにCO2排出量を実質ゼロにするため、太陽光や風力発電などの再生可能エネルギー比率を既存の目標を大幅に上回る水準に引き上げる。"
  ];
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader id="nested-list-subheader" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: '#ffffff', backgroundColor: "#00bfff"}}>
          Y 記事
        </ListSubheader>
      }
    >
      {itemList.map((value, index) => {
      const labelId = `checkbox-list-label-${index}`;
      return (
        <div key={index}>
          <ListItem
            key={value}
            // secondaryAction={
            //   <IconButton edge="end" aria-label="comments">
            //     <CommentIcon />
            //   </IconButton>
            // }
            // disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
              <Checkbox
                edge="start"
                checked={checked.indexOf(index) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                  「{titles[index]}」
                </Typography>
                <Typography sx={{ fontSize: 14, mb: 1.5 }}>
                  {value}
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">履歴から削除する</Button>
              </CardActions> */}
            </Card>
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      );
    })}
  </List>
  )
}