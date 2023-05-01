import { getWishList, addWishList, deleteWishList } from "@/modules/Data";
import { useAuth } from "@clerk/nextjs";
import React, { useState, useEffect, useCallback } from "react";
import Link from 'next/link';


export default function WishForm() {

    const [loading, setLoading] = useState(true);
    const [wishList, setWishList] = useState([]);
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const [submitted, setSubmitted] = useState(false);

    const [newName, setNewName] = useState("");
    const [newNote, setNewNote] = useState("");
    const [newAddress, setNewAddress] = useState("");


    // get restaurant wish list
    useEffect(() => {
        async function process() {
            if (userId) {
                const token = await getToken({ template: "codehooks" });
                // setWishList(await getWishList(token, userId));
                setLoading(false);
            }
        }
        process();
    }, [isLoaded]);
    

    // add restaurant wish list
    async function add() {
        if(newName == ""){
            document.getElementById("requiredInputWarning").innerHTML = "Restaurant name is required.";
            return;
        }

        const token = await getToken({ template: "codehooks" });
        const newWish = await addWishList(token, newName, newNote, newAddress, userId);
        setNewName("");
        setNewNote("");
        setNewAddress("");
        setWishList(wishList.concat(newWish));
        setSubmitted(true);
    }

        return (
        <>  
            {/* Wish List Form to add new restaurant */}
            <div className="container is-centered">
            {!submitted && (
                <div className="box mx-5">
                    <h4 id = "requiredInputWarning"></h4>
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
                        <label className="label">Address</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                id = "restaurant"
                                placeholder="Restaurant Address"
                                value={newAddress}
                                onChange={(e) => setNewAddress(e.target.value)}
                                onKeyDown = {(e)=>{if (e.key === 'Enter'){add()}}}
                            ></input>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Note</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                id = "review"
                                type="textarea"
                                rows="5"
                                value={newNote}
                                onChange={(e) => setNewNote(e.target.value)}
                                onKeyDown = {(e)=>{if (e.key === 'Enter'){add()}}}
                            ></textarea>
                        </div>
                    </div>
                    
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-success" onClick={add}>Add</button>
                        </div>
                    </div>
                </div>
                )}
                {submitted && 
                    <div className="box mx-5">
                        <label className="label has-text-link">Successfully added!</label>
                        <button className="button is-link is-light">
                            <Link className="has-text-link" href="/wishlist"> Go to your Wish List</Link>
                        </button>
                    </div>
                }
            </div>
        </>
        );
    }  
