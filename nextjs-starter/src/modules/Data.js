const backend_base = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

// get visited restaurant list
export async function getRestaurants(authToken) {
    const result = await fetch(backend_base+"/home",{
        'method':'GET',
        'headers': {'Authorization': 'Bearer ' + authToken}
    })
    return await result.json();
}

// add new review
export async function addRestaurant(authToken, restaurantName, restaurantReview, restaurantRating, restaurantDate, restaurantImage, userName) {
    const result = await fetch(backend_base+"/home",{
        'method':'POST',
        'headers': {'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'},
        'body': JSON.stringify({name: restaurantName, review: restaurantReview, rating: restaurantRating, userId: userName, imageContent: restaurantImage, dateVisited: restaurantDate})
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