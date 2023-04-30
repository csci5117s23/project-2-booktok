import styles from '@/styles/Home.module.css'
import { addReview } from "@/modules/Data";
import { Rating } from "@mui/material";
import { useAuth } from "@clerk/nextjs";
import React, { useState, useEffect, useCallback } from "react";

export default function ReviewPage() {

    const [loading, setLoading] = useState(true);
    const [restaurants, setRestaurants] = useState([]);
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    const [newName, setNewName] = useState("");
    const [newReview, setNewReview] = useState("");
    const [newRating, setNewRating] = useState(null);
    const [newDate, setNewDate] = useState("");
    const [newImage64, setNewImage64] = useState("")
    const [newImage, setNewImage] = useState("");



    // get restaurant review list
    useEffect(() => {
        async function process() {
            if (userId) {
                const token = await getToken({ template: "codehooks" });
                // setRestaurants(await getReviews(token, userId));
                setLoading(false);
            }
        }
        process();
    }, [isLoaded]);
    
    
    async function add() {
        const token = await getToken({ template: "codehooks" });
        const newRestaurant = await addReview(token, newName, newReview, newRating, newDate, newImage64, userId);
        setNewName("");
        setNewReview("");
        setNewRating("");
        setNewDate("");
        setNewImage("");
        setNewImage64("");
        setRestaurants(restaurants.concat(newRestaurant));
    }
    
    if (loading) {
        console.log(loading);
        return <span className={styles.loading}> loading your reviews... </span>;
    } 
    else {
        return (
        <>  
            {/* Review Form to add new restaurant to your timeline*/}
            <div className="columns is-centered">
                <div className="box mx-5">
                    <div className="field">
                        <label className="label">Restaurant</label>
                        <div className="control">
                            <input
                                className="input is-primary"
                                type="text"
                                id = "restaurant"
                                placeholder="Restaurant Name"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                onKeyDown = {(e)=>{if (e.key === 'Enter'){add()}}}
                            ></input>
                        </div>
                        <p className="help is-success">This field is required</p>
                    </div>

                    <div className="field">
                        <label className="label">Review</label>
                        <div className="control">
                            <textarea
                                className="textarea is-primary"
                                id = "review"
                                type="textarea"
                                rows="5"
                                value={newReview}
                                onChange={(e) => setNewReview(e.target.value)}
                                onKeyDown = {(e)=>{if (e.key === 'Enter'){add()}}}
                            ></textarea>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Rating</label>
                        <div className="control">
                            <Rating name="half-rating" 
                                id = "rating"
                                defaultValue={0} 
                                precision={0.5} 
                                value = {newRating}
                                onChange={(e) => setNewRating(e.target.value)}
                                onKeyDown={(e) => {if(e.key === 'Enter'){add()}}}/>
                        </div>
                        <p className="help is-success">This field is required</p>
                    </div>

                    <div className="field">
                        <label className="label">Image</label>
                        <div className="control">
                        {newImage ? (
                            <div>
                                <img
                                    alt="not found"
                                    width={"250px"}
                                    src={URL.createObjectURL(newImage)}
                                />
                            <br />
                            <button onClick={() => setNewImage(null)}>Remove</button>
                            </div>    
                        ):
                        <input
                            type="file"
                            name="myImage"
                            id="imageFileId"
                            className="imageClass"
                            onChange={(e) => {
                                console.log(e.target.files[0]);
                                setNewImage(e.target.files[0])
                                
                                // image base64 encoding
                                const selectedFile = e.target.files;
                                if(selectedFile.length > 0) {
                                    const [imageFile] = selectedFile;
                                    const fileReader = new FileReader();
                                    fileReader.onload = () => {
                                        const srcData = fileReader.result;
                                        setNewImage64(srcData);
                                        console.log("img encoding: ", srcData);
                                    };
                                    fileReader.readAsDataURL(imageFile);
                                }}
                            }
                            // onChange={(e) => setNewImage(e.target.value)}
                            // onKeyDown={(e) => {if(e.key === 'Enter'){add()}}}/>
                        />}
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Date of the visit</label>
                        <div className="control">
                            <input
                                id = "date"
                                type="date"
                                value={newDate}
                                onChange={(e) => setNewDate(e.target.value)}
                                onKeyDown = {(e)=>{if (e.key === 'Enter'){add()}}}
                            ></input>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-success" onClick={add}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
  
    }  
}