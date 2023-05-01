import styles from '@/styles/Home.module.css'
import { getWishList, addWishList, deleteWishList } from "@/modules/Data";
import { useAuth } from "@clerk/nextjs";
import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen, faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons';


export default function WishForm({info}) {

    const [sName, sAddress] = info;
    
    const [loading, setLoading] = useState(true);
    const [wishList, setWishList] = useState([]);
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    const [newName, setNewName] = useState(sName);
    const [newNote, setNewNote] = useState("");
    const [newAddress, setNewAddress] = useState(sAddress);


    // get restaurant wish list
    useEffect(() => {
        async function process() {
            if (userId) {
                const token = await getToken({ template: "codehooks" });
                setLoading(false);
            }
        }
        process();
    }, [isLoaded]);
    

    // add restaurant wish list
    async function add() {
        // imageEncoding();
        const token = await getToken({ template: "codehooks" });
        const newWish = await addWishList(token, newName, newNote, newAddress, userId);
        setNewName(sName);
        setNewNote("");
        setNewAddress(sAddress);
        setWishList(wishList.concat(newWish));
    }

        return (
        <>  
            {/* Wish List Form to add new restaurant */}
            <div className="container is-centered">
                <div className="container mx-5">
                    <div className="field">
                        <label className="label">Restaurant</label>
                        <div className="control has-text-warning-dark has-text-weight-bold">
                            {sName}
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Address</label>
                        <div className="control has-text-warning-dark has-text-weight-bold">
                            {sAddress}
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
                    
                    <div className="field is-grouped ">
                        <div className="control">
                            <button className="button is-warning" onClick={add}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }  
