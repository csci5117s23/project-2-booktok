import { UserButton } from "@clerk/clerk-react";
import styles from '@/styles/Home.module.css'
import { addRestaurant, getRestaurants } from "@/modules/Data";
import { useAuth } from "@clerk/nextjs";
import React, { useState, useEffect, useCallback } from "react";

export default function HomePage() {

    const [loading, setLoading] = useState(true);
    const [restaurants, setRestaurants] = useState([]);
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    const [newName, setNewName] = useState("");
    const [newReview, setNewReview] = useState("");
    const [newRating, setNewRating] = useState("");
    const [newDate, setNewDate] = useState("");

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
        setNewName("");ç
        setNewReview("");
        setNewRating("");
        setNewDate("");
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
            <div className = {styles.timeline}>
                {restaurant.name}
                <br></br>
                {restaurant.review}
                <br></br>
                {restaurant.rating}
                <br></br>
                {restaurant.dateVisited}
            </div>
            <br></br>
            </>
            }
        }
        );

        return (
        <>  
            <h1>//NOTE: working on layout of form//</h1>
            {/* <ul> */}
            <h2>Add to your Timeline:</h2>
            <input
                placeholder="Restaurant Name (required)"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown = {(e)=>{if (e.key === 'Enter'){add()}}}
            ></input>
            <br></br>
            <textarea 
                placeholder="Leave a review..."
                rows="5" cols="20"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                onKeyDown = {(e)=>{if (e.key === 'Enter'){add()}}}
            ></textarea>
            <br></br>
            <input
                type="number"
                min="1" max="5"
                placeholder="Rating (1-5)"
                id={styles.rating}
                value={newRating}
                onChange={(e) => setNewRating(e.target.value)}
                onKeyDown = {(e)=>{if (e.key === 'Enter'){add()}}}
            ></input>
            <br></br>
            <input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                onKeyDown = {(e)=>{if (e.key === 'Enter'){add()}}}
            ></input>
            <br></br>
            <button onClick={add}>add</button>

            {console.log("t1: ", restaurants)}

            {restaurantListItems}
            {/* </ul> */}
        </>
        );
    }  
}