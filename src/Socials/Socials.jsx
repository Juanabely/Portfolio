import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {LinkedinOutlined,InstagramOutlined,WhatsAppOutlined,GithubOutlined   } from '@ant-design/icons'


const Socials = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem' }}>
      <Card style={{ maxWidth: 345 ,borderRadius:10}}>
        <CardMedia
          component="img"
          height="400"
          image={props.url}
          alt="Card Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color='#f1683a' fontWeight='900'>
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.phrase}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
          <LinkedinOutlined />
          

          </Button>
          <Button size="small" color="primary">
          
          <InstagramOutlined />
          

          </Button>
          <Button size="small" color="primary">
          
          <WhatsAppOutlined />
          

          </Button>
          <Button size="small" color="primary">
        
          <GithubOutlined />

          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Socials;
