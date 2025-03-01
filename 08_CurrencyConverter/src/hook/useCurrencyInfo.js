// // in this document:
// // creating custom hooks

// // ye file na extension .js isliye hai kyuki ye file only JS return kar rahi hai. if koi JSX ka koi component return kar rahi hoti to hi ham usse .jsx extension rakhte.
// //-------------------------------------------------------------------------------------------------------//
// //                                      creating custom hooks
// //-------------------------------------------------------------------------------------------------------//
// // yaha per ham khud ke hisab se custom hooks banayenge.

// // hooks normally function hi hote hai jpki kuch return kar rahe hote hai. so if ham koi normal function create karke uss se kuch return karvaye to vo bhi technically ek hook hi ban jayega.
// // function hello(){
// //     return []
// // }
// // iss function ko bhi ham hook keh skte hai.

// import { useEffect, useState } from 'react'

// function useCurrencyInfo(currency){
//     // now isme ham ek api ko call karna chahte hai joki jab ye hook load ho ya fir koi iss hook ko call kare tab ye api call ho
//     // issliye ham isse useEffect() ke andar call karvayenge. kyo ki useEffect() hi ek esa hook hai joki jab uski lifecycle start hoti hai to call hota hai.
//     // Component load hone ke baad API call hogi.

//     console.log(currency);
    

//     const [data, setData] = useState({}) // isme hame ek empty object daal dete hai if any case api se koi value nahi mili to ye empty object to data me rahega hi.
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//         .then((res) => res.json()) // hame yaha par data(response) string format me milta hai usse hame json formate me convert karna padta hai.
//         .then((res) => setData(res[currency])) // so yaha par hame conversion ke baad json format me data mil gaya hai ab usse hame kahi par store karvana padega.
//         // so if hamne data ko regular variable me store kar liye to vo UI me kabhi change nahi hoga isiliye hame usko useState() vale variable me store karvana padega.
//         // so ab ham data variable me response ko store karva dete hai setData() method ka use karke.
//         // ab dekhte hai ki hame kya mila hai.
//         console.log(data)
//     }, [currency])

//     return data 
// }

// export default useCurrencyInfo



import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(`Fetching data for currency: ${currency}`);
                
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                const result = await response.json();

                console.log("API Response:", result);  // Debugging API response
                setData(result[currency] || {}); // Handle cases where currency might be missing
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchData();
    }, [currency]);

    useEffect(() => {
        console.log("Updated Data:", data);
    }, [data]);  // Log data when it updates

    return data;
}

export default useCurrencyInfo;
