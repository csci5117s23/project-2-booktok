const backend_base = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

// get visited restaurant list
export async function getRestaurants(authToken, userName) {
    const result = await fetch(backend_base+"/home?userId="+userName,{
        'method':'GET',
        'headers': {'Authorization': 'Bearer ' + authToken}
    })
    return await result.json();
}

// add new review
export async function addRestaurant(authToken, restaurantName, restaurantReview, restaurantRating, restaurantDate, userName) {
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
export async function deleteRestaurant(authToken, restaurantId) {
    const result = await fetch(backend_base+"/home/"+restaurantId, {
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