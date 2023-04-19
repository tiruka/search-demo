import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function ViewWebPageList(){
  const [checked, setChecked] = React.useState([0]);

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

  const itemList = [
    "さぬきうどん 讃岐本格うどんです!香川県で...",
    "化粧品",
    "fooobar"
  ];
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', backgroundColor: "#b2dcdf"}}>
        {itemList.map((value, index) => {
        const labelId = `checkbox-list-label-${index}`;
        return (
          <div>
            <ListItem
              key={value}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
                <ListItemText id={labelId} primary={`${value}`} />
              </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        );
      })}
    </List>
  )
}