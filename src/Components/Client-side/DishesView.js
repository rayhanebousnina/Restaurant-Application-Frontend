import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDishes } from '../../Redux/actions/dishesActions'
import NavigationBar from '../Client-side/NavigationBar'
import CardDish from '../Client-side/CardDish'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


export default function DishesList() {


    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
    }));
    const classes = useStyles();

    const dispatch = useDispatch()
    
    useEffect(() => {
    dispatch(getDishes());
    },[]);
    //   console.log(dishes, "did we ?");

    return (
        
        <div>
            {/* Navbar */}
            <NavigationBar/>
            {/* Landing Section */}
            <div className="cover">
                <div className="headers">
                    <h1>We make good food</h1>
                    <h1>Serve you the best food</h1>
                </div>
            </div>
            {/* All the dishes */}
            <h1 className="section-title">Dishes List</h1>
            <h1 className="section-title">Our awesome food</h1>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid container item xs={4} spacing={3}>
                    <CardDish />
                    </Grid>
                    <Grid container item xs={4} spacing={3}>
                    <CardDish />
                    </Grid>
                    <Grid container item xs={4} spacing={3}>
                    <CardDish />
                    </Grid>
                </Grid>
            </div>
            
            

        </div>
    )
}