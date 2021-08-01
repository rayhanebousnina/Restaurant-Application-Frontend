import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDishes } from '../../Redux/actions/dishesActions'
import NavigationBar from '../Client-side/NavigationBar'
import CardDish from '../Client-side/CardDish'
import Container from '@material-ui/core/Container';
import Footer from './Footer'


export default function DishesList() {



    const dispatch = useDispatch()
    
    useEffect(() => {
    dispatch(getDishes());
    },[]);

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
            <Container>
                <CardDish />  
            </Container>
            <Footer/>
            

        </div>
    )
}