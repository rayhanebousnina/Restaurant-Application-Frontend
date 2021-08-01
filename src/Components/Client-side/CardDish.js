import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({

  media: {
    height: 140,
  },
  root: {
      height: 300,
  },
});

const CardDish = () => {
    const dishes = useSelector(state=>state.dishesstore)
    console.log(dishes)
    const classes = useStyles();
    return (
       
           <Grid container spacing={3}>
                {dishes.map((el,key) => 
                <Grid item md={4} sm={6} xs={12}>
              
                <Card className={classes.root}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {el.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {el.description}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button variant="contained" color="secondary">
                        Order Now
                    </Button>
                    </CardActions>
                </Card>
            
                </Grid>
                )}
         </Grid>
    );
};

export default CardDish;
