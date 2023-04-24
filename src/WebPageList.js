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


export default function WebPageList(){
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
    "XXX",
    "YYY",
    "ZZZ"
  ]
  const itemList = [
    "ダミー文章",
    "ダミー文章",
    "ダミー文章",
  ];
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader id="nested-list-subheader" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: '#ffffff', backgroundColor: "#CCCCCC"}}>
          XXXXXサービス
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