import styles from '@/styles/Home.module.css'
import { getWishList, addWishList, deleteWishList } from "@/modules/Data";
import { useAuth } from "@clerk/nextjs";
import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen, faHeart } from '@fortawesome/free-solid-svg-icons';


export default function WishListPage() {

    const [loading, setLoading] = useState(true);
    const [wishList, setWishList] = useState([]);
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    const [newName, setNewName] = useState("");
    const [newNote, setNewNote] = useState("");
    const [newImage, setNewImage] = useState("");


    // get restaurant wish list
    useEffect(() => {
        async function process() {
            if (userId) {
                const token = await getToken({ template: "codehooks" });
                setWishList(await getWishList(token, userId));
                setLoading(false);
            }
        }
        process();
    }, [isLoaded]);
    

    // add restaurant wish list
    async function add() {
        // imageEncoding();
        const token = await getToken({ template: "codehooks" });
        const newWish = await addWishList(token, newName, newNote, userId);
        setNewName("");
        setNewNote("");
        setNewImage("");
        setWishList(wishList.concat(newWish));
    }
    
    // delete restaurant review from list
    async function delWishList(wishItem) {
        const token = await getToken({ template: "codehooks" });
        try {
          await deleteWishList(token, wishItem._id);
        } catch (e) {
          console.log(e);
        }
        setWishList(await getWishList(token, userId));
    }

    // edit restaurant review
    // async function editWishList(wishItem){
    // }

    if (loading) {
        console.log(loading);
        return <span> loading your wish list... </span>;
    } 
    else {
        const wishListItems = wishList.map((wishItem) => {
            if(wishItem.userId == userId) {
            return <>
            {/* <li key={wishItem._id}>
                {wishItem.name}
            </li> */}
            <div className = "box">
                {/* <span> {wishItem.selectedImage} </span> */}
                <span id = {styles.restaurantName}>{wishItem.name}</span>
                <br></br>
                <span id = {styles.restaurantReview}>{wishItem.note}</span>
                <br></br>
                <span id = {styles.restaurantReview}>{wishItem.createdOn}</span>
                <br></br>
                <div className="buttons is-right">
                    <button className="button is-inverted is-small" onClick={() => {editWishList(wishItem);}}>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                    {/* Edit function is not made */}
                    <button className="button is-inverted is-small" onClick={() => {delWishList(wishItem);}}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            </div>
            <br></br>
            </>
            }
        }
        );

        return (
        <>  
            {/* Wish List Form to add new restaurant */}
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
                        <label className="label">Notes</label>
                        <div className="control">
                            <textarea
                                className="textarea is-primary"
                                id = "review"
                                type="textarea"
                                rows="5"
                                value={newNote}
                                onChange={(e) => setNewNote(e.target.value)}
                                onKeyDown = {(e)=>{if (e.key === 'Enter'){add()}}}
                            ></textarea>
                        </div>
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
                            id="imageField"
                            onChange={(e) => {
                                console.log(e.target.files[0]);
                                setNewImage(e.target.files[0])} 
                            }
                            // onChange={(e) => setNewImage(e.target.value)}
                            // onKeyDown={(e) => {if(e.key === 'Enter'){add()}}}/>
                        />}
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-success" onClick={add}>Add</button>
                        </div>
                    </div>
                </div>
            
            
            {/* Loading review timeline */}
                <br></br>
            {/* <div className="columns is-centered"> */}
                <div className="column is-half">
                {/* <div className="column is-two-thirds"> */}
                    <h1 className={styles.titleTimeline}>
                        Wish List
                        <span>&nbsp;&nbsp;</span>
                        <FontAwesomeIcon icon={faHeart} bounce style={{color: "#ffc038",}} />
                    </h1>
                        {console.log("timeline: ", wishList)}
                        {wishListItems}
                </div>
            </div>
            
            {/* {console.log("delete: ", delName, "&&", delRating)} */}
       
        </>
        );
    }  
}