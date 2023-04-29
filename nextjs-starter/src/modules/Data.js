const backend_base = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

// get visited restaurant list
export async function getReviews(authToken, userName) {
    const result = await fetch(backend_base+"/home?userId="+userName, {
        'method':'GET',
        'headers': {'Authorization': 'Bearer ' + authToken}
    })
    return await result.json();
}

// add new review
export async function addReview(authToken, restaurantName, restaurantReview, restaurantRating, restaurantDate, userName) {
    const result = await fetch(backend_base+"/home",{
        'method':'POST',
        'headers': {
            'Authorization': 'Bearer ' + authToken,
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
            name: restaurantName, 
            review: restaurantReview, 
            rating: restaurantRating, 
            userId: userName, 
            dateVisited: restaurantDate})
    })
    return await result.json();
}

// delete review
export async function deleteReview(authToken, restaurantId) {
    const result = await fetch(backend_base+"/home/"+restaurantId, {
        'method':'DELETE',
        'headers': {
            'Authorization': 'Bearer ' + authToken
        }
    })
    return await result.json();
}

// get user's wish list
export async function getWishList(authToken, userName) {
    const result = await fetch(backend_base+"/wishlist?userId="+userName,{
        'method':'GET',
        'headers': {'Authorization': 'Bearer ' + authToken}
    })
    return await result.json();
}

// add new wish list
export async function addWishList(authToken, restaurantName, restaurantReview, userName) {
    const today = new Date().toISOString().substring(0, 10);
    const result = await fetch(backend_base+"/wishlist",{
        'method':'POST',
        'headers': {
            'Authorization': 'Bearer ' + authToken,
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
            name: restaurantName, 
            note: restaurantReview, 
            userId: userName,
            createdOn: today, 
        })
    })
    return await result.json();
}

// delete review
export async function deleteWishList(authToken, restaurantId) {
    const result = await fetch(backend_base+"/wishlist/"+restaurantId, {
        'method':'DELETE',
        'headers': {
            'Authorization': 'Bearer ' + authToken
        }
    })
    return await result.json();
}



// update/edit review
// export async function completeTodos(authToken, taskName) {
//     const result = await fetch(backend_base+"/todos/"+taskName._id,{
//         'method':'PATCH',
//         'headers': {'Authorization': 'Bearer ' + authToken,
//         'Content-Type': 'application/json'},
//         'body': JSON.stringify({
//             completed: true})
//     });
//     return await result.json();
// }