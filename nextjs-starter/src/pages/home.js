import { UserButton } from "@clerk/clerk-react";
import styles from '@/styles/Home.module.css'
import { getReviews, deleteReview } from "@/modules/Data";
import { Typography } from "@mui/material";
import { Rating } from "@mui/material";
import { useAuth } from "@clerk/nextjs";
import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen, faUtensils, faStar, faLocationDot, faQuoteLeft, faQuoteRight, faCalendarDays, faPersonRunning } from '@fortawesome/free-solid-svg-icons';



export default function TimelinePage() {

    const [loading, setLoading] = useState(true);
    const [restaurants, setRestaurants] = useState([]);
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    // get only user's restaurant review list
    useEffect(() => {
        async function process() {
            if (userId) {
                const token = await getToken({ template: "codehooks" });
                setRestaurants(await getReviews(token, userId));
                setLoading(false);
            }
        }
        process();
    }, [isLoaded]);
    
    // if image exists for a review, add it to the review timeline
    function addImage(imageString64) {
        // console.log("adding image...");

        return <>
            <img src={imageString64} alt="restaurant image" width="200"></img><br></br>
        </>
    }
    
    // delete restaurant review from list
    async function delReview(restaurant) {
        const token = await getToken({ template: "codehooks" });
        try {
          await deleteReview(token, restaurant._id);
        } catch (e) {
          console.log(e);
        }
        setRestaurants(await getReviews(token, userId));
    }

    // edit restaurant review
    // async function editReview(restaurant){

    // }

    if (loading) {
        console.log(loading);
        return <span className={styles.loading}> 
        Loading your reviews... &nbsp;
        <FontAwesomeIcon icon={faPersonRunning} bounce style={{color: "#139a54",}} />
        </span>;
    } 
    else {
        // sort restaurant reviews in descending order (latest date to oldest date)
        restaurants.sort((p1, p2) => (p1.dateVisited > p2.dateVisited) ? -1 : (p1.dateVisited < p2.dateVisited) ? 1 : 0);
        console.log("Sorted timeline: ", restaurants);

        // return review data (restaurant name, image, review, rating, date visited) for timeline page
        const restaurantListItems = restaurants.map((restaurant) => {

            // double check to make sure only the correct user's information is being displayed
            if(restaurant.userId == userId) {
                return <>
                    {/* restaurant name */}
                    <div className = "box has-text-centered">
                        <section className="hero is-small">
                            <div className="hero-body">
                                <p className="title">{restaurant.name}</p>
                                {/* <p class="subtitle">
                                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
                                    address
                                </p> */}
                            </div>
                        </section>

                        <FontAwesomeIcon icon={faLocationDot} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
                        <span>{restaurant.address}</span><span>&nbsp;&nbsp;</span>
                        <br></br>

                        {/* image */}
                        {typeof restaurant.imageContent === "undefined" || restaurant.imageContent == "" ? console.log("No image available.") : addImage(restaurant.imageContent)}

                        {/* review */}
                        <FontAwesomeIcon icon={faQuoteLeft} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
                        <span id = {styles.restaurantReview}>{restaurant.review}</span><span>&nbsp;&nbsp;</span>
                        <FontAwesomeIcon icon={faQuoteRight} style={{color: "#48c38b",}} />
                        <br></br>

                        {/* rating */}
                        <FontAwesomeIcon icon={faStar} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
                        <span id = {styles.restaurantRating}> {restaurant.rating} </span>
                        <br></br>

                        {/* date visited */}
                        <FontAwesomeIcon icon={faCalendarDays} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
                        <span id = {styles.dateVisited}>{restaurant.dateVisited}</span>
                        <br></br>

                        {/* edit and delete review buttons */}
                        <div className="buttons is-right">
                            <button className="button is-inverted is-small" onClick={() => {editReview(restaurant);}}>
                                <FontAwesomeIcon icon={faPen} />
                            </button>
                            {/* Edit function is not made */}
                            <button className="button is-inverted is-small" onClick={() => {delReview(restaurant);}}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </div>
                    </div>
                    <br></br>
                </>
            }}
        );
        

        return (
        <> 
            {/* Loading review timeline */}
                <br></br>
            <div className="columns is-centered">
                <div className="column is-half">
                {/* <div className="column is-two-thirds"> */}
                    <h1 className={styles.titleTimeline}>
                        <span>&nbsp;&nbsp;</span>
                        <FontAwesomeIcon icon={faUtensils} spin style={{color: "#ffc038",}} />
                    </h1>
                        {restaurantListItems}
                </div>
            </div>
            
            {/* {console.log("delete: ", delName, "&&", delRating)} */}
       
        </>
        );
    }  
}