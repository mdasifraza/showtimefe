import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
         Created by Md. Asif & Saurabh in 2021
      </Typography>
      <Typography variant="caption">
        AttainU 
        <Link href="http://Attainu.com/" target="_blank" rel="noopener">
          AttainU 
        </Link>
      </Typography>
    </div>
  );
}