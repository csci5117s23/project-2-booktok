import { UserButton } from "@clerk/clerk-react";
import styles from '@/styles/Home.module.css'
import { addRestaurant, getRestaurants } from "@/modules/Data";
import { Typography } from "@mui/material";
import {Rating} from "@mui/material";
import { useAuth } from "@clerk/nextjs";
import React, { useState, useEffect, useCallback } from "react";
import {Camera} from './camera.js'

export default function HomePage() {

    const [loading, setLoading] = useState(true);
    const [restaurants, setRestaurants] = useState([]);
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    const [newName, setNewName] = useState("");
    const [newReview, setNewReview] = useState("");
    const [newRating, setNewRating] = useState("");
    const [newDate, setNewDate] = useState("");
    // const [newImage, setNewImage] = useState("")
    const [newImage, setNewImage] = useState("");


    // get restaurant review list
    useEffect(() => {
        async function process() {
        if (userId) {
            const token = await getToken({ template: "codehooks" });
            setRestaurants(await getRestaurants(token));
            setLoading(false);
        }
        }
        process();
    }, [isLoaded]);
    
    // add restaurant review to list
    async function add() {
        const token = await getToken({ template: "codehooks" });
        const newRestaurant = await addRestaurant(token, newName, newReview, newRating, newDate, userId);
        setNewName("");
        setNewReview("");
        setNewRating("");
        setNewDate("");
        setNewImage("");
        setRestaurants(restaurants.concat(newRestaurant));
    }

    if (loading) {
        console.log(loading);
        return <span> loading... </span>;
    } 
    else {
        const restaurantListItems = restaurants.map((restaurant) => {
            if(restaurant.userId == userId) {
            return <>
            {/* <li key={restaurant._id}>
                {restaurant.name}
            </li> */}
            <div className = "box">
                <span> {restaurant.selectedImage} </span>
                <span id = {styles.restaurantName}>{restaurant.name}</span>
                <br></br>
                <span id = {styles.restaurantReview}>{restaurant.review}</span>
                <br></br>
                <span id = {styles.restaurantRating}> {restaurant.rating} </span>
                <br></br>
                <span id = {styles.dateVisited}>{restaurant.dateVisited}</span>
                <br></br>
                <button onClick={() => setRestaurants(null)}>Remove</button>
            </div>
            <br></br>
            </>
            }
        }
        );

        return (
        <>  
            {/* {console.log("t1: ", restaurants)}
            {restaurantListItems} */}
            <div className="columns is-centered">
                <div className="column is-two-thirds">
                    {/* <h1 className={styles.titleTimeline}>Timeline</h1> */}
                    {/* <div className="box"> */}
                        {console.log("t1: ", restaurants)}
                        {restaurantListItems}
                    {/* </div>                   */}
                </div>
            </div>
       
        </>
        );
    }  
}