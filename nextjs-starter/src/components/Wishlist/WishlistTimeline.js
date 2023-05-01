import styles from '@/styles/Home.module.css'
import { getWishList, addWishList, deleteWishList } from "@/modules/Data";
import { useAuth } from "@clerk/nextjs";
import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen, faHeart, faLocationDot, faPersonRunning, faNoteSticky } from '@fortawesome/free-solid-svg-icons';

export default function Wishlist() {

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
        return <span className={styles.loading}> 
        Loading your wish list... &nbsp;
        <FontAwesomeIcon icon={faPersonRunning} bounce style={{color: "#139a54",}} />
        </span>;
    } 
    else {
        const wishListItems = wishList.map((wishItem) => {
            if(wishItem.userId == userId) {
            return <>
            {/* <li key={wishItem._id}>
                {wishItem.name}
            </li> */}
            <div className = "box has-text-centered">
                <section className="hero is-small">
                    <div className="hero-body">
                        <p className="title">{wishItem.name}</p>
                        <p className="subtitle">
                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#48c38b",}} /><span>&nbsp;&nbsp;</span>
                            {wishItem.address}
                        </p>
                    </div>
                </section>

                <FontAwesomeIcon icon={faNoteSticky} style={{color: "#48c38b",}}/><span>&nbsp;&nbsp;</span>
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
            <div>
            {/* Loading review timeline */}
                <br></br>
                <div className="column is-half">
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