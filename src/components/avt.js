import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import avt from '../img/avt.jpg';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className="avt">
        <div className={classes.root}>
            <Avatar alt="Remy Sharp" src={avt} />
        </div>
    </div>
  );
}