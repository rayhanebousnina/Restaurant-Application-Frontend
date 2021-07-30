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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CardDish = () => {
    const dishes = useSelector(state=>state.dishesstore)
    const classes = useStyles();
    return (
        <div className="cards">
           
            {dishes.map((el,key) => (<div>
            <h2>{el.name}</h2>
            <p>{el.price}</p>
            <h3>{el.description}</h3>

            </div>
            ))}

            <React.Fragment>
                <Grid item xs={12} style={{ margin: 20 }}>
                <Paper className={classes.paper}>
                <Card className={classes.root}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over
                        6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button variant="contained" color="secondary">
                        Order Now
                    </Button>
                    </CardActions>
                </Card>
                </Paper>
                </Grid>
                <Grid item xs={12} style={{ margin: 20 }}>
                <Paper className={classes.paper}>
                <Card className={classes.root}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over
                        6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button variant="contained" color="secondary">
                        Order Now
                    </Button>
                    </CardActions>
                </Card>
                </Paper>
                </Grid>
                <Grid item xs={12} style={{ margin: 20 }}>
                <Paper className={classes.paper}>
                <Card className={classes.root}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over
                        6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button variant="contained" color="secondary">
                        Order Now
                    </Button>
                    </CardActions>
                </Card>
                </Paper>
                </Grid>
            </React.Fragment>
        
        </div>
    );
};

export default CardDish;
