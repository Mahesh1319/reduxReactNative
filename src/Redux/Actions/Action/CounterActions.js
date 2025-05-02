

export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

// const API_URL = 'https://mocki.io/v1/d9641005-1ef2-41e2-b527-b4ccbd84b291'

// export const fetchdata = () => {
//     try {
//         return async (dispatch) => {
//             const response = await fetch(API_URL, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//             const data = await response.json()
//             if (data) {
//                 dispatch({ type: 'FETCHDATA', payload: data })
//             }
//             else {
//                 console.log("Error fetching data", data)
//             }
//         }

//     } catch (error) {
//         console.log("Error fetching data", error)
//     }
// }

