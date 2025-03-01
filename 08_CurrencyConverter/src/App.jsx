import { useEffect, useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hook/useCurrencyInfo'

function App() {
  // yaha par me api ko call karke usme kya data aa raha hai vo check kar raha hu.
  // const [count, setCount] = useState({})

  // function useCurrencyInfo(currency){
  //   // now isme ham ek api ko call karna chahte hai joki jab ye hook load ho ya fir koi iss hook ko call kare tab ye api call ho
  //   // issliye ham isse useEffect() ke andar call karvayenge. kyo ki useEffect() hi ek esa hook hai joki jab uski lifecycle start hoti hai to call hota hai.
  //   // Component load hone ke baad API call hogi.


  //   const [data, setData] = useState({}) // isme hame ek empty object daal dete hai if any case api se koi value nahi mili to ye empty object to data me rahega hi.
  //   useEffect(() => {
  //       fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`)
  //       .then((res) => res.json()) // hame yaha par data(response) string format me milta hai usse hame json formate me convert karna padta hai.
  //       .then((res) => setData(res[usd])) // so yaha par hame conversion ke baad json format me data mil gaya hai ab usse hame kahi par store karvana padega.
  //       // so if hamne data ko regular variable me store kar liye to vo UI me kabhi change nahi hoga isiliye hame usko useState() vale variable me store karvana padega.
  //       // so ab ham data variable me response ko store karva dete hai setData() method ka use karke.
  //       // ab dekhte hai ki hame kya mila hai.
  //       console.log(data)
  //   }, [])
  //   return data
  // }

  // return (
  //   <div>
  //     <button className='bg-pink-500 m-5 p-4 ring' onClick={useCurrencyInfo}>click</button>

  //   </div>
  // )

  // upper ka sabkuch ham baad me karenge.

  // hame yaha par pehle vo saare states create karne honge jinko hamne custom hook me ya fir component me banaya hai and unme ye sab pass karne hai.
  const [amount, setAmount] = useState() // yaha pehle useState(0) esa likha tha but vo Input field me se hat hi nahi raha tha isliye hata diya.
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState() // yaha pehle useState(0) esa likha tha but vo Input field me se hat hi nahi raha tha isliye hata diya.

  // now ab hamne jo custom hook "useCurrencyInfo" banaya tha uska use karte hai,
  const currencyInfo = useCurrencyInfo(from) // yaha per hame usme koi country ka currency ka name dalna padega joki hamare pass from me aa jayega inputfield se. 

  // now hame options ke liye saare country ke names chahiye joki hamne API se object ke type me mile hai and vo hame currencyInfo variable ke andar se mil jayenge.
  // hame only uss object ke andar se uski saari keys extract karni hai joki saari country ke name code hai.
  // ham ye global "Object" ke keys() method se nikal skte hai. then uske ek variable me store kar lenge.
  const options = Object.keys(currencyInfo)
  console.log(options)
  // now hame swap ki functionality banani hogi.
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }


  // now ab convert karne ki functionality banate hai.
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        // backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_S1n9ZRFB01Wp-HSj-wgg_fVp4OLsqJW3wA&s')`,
        backgroundColor:'black'
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency= {from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency= {to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App
