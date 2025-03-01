import { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [], // ye app crash na ho isiliye hamne empty array diya hai.
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    const amountInpputId = useId() // ye useId() se ek unique value milti hai, joki reference dene ke liye kaam me aati hai.
    // jese ki yaha hamne input field ke sath isse joint kiya hai. first uske label me iska use kiya hai then input field me usko "id" ke andar pass kiya hai.
    // iss useID() ko key generate karvane ke liye use nahi karna chahiye.

    console.log("option from InputBox Component:", currencyOptions)
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor= {amountInpputId} className="text-black/40 mb-2 inline-block">
                    {label} {/*ye iss liye likh rakha hai kyuki yahi label batayega ki ye "To" ka label hai ye "From" ka label */}
                </label>
                <input
                    id= {amountInpputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} //ye input field iss variable se puchhega ki khud disable hai ki nahi 
                    value={amount} // iss input field ki value iss amount varable se aayeg.
                    // ab if iss input field ka value change hoga to kya kare iske liye ham ek obChange function likhenge.
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                /** upper vali line ka mtlb:
                 * Jab bhi user amount input kare, value parent component me update ho.
                 * Agar onAmountChange function exist karega tabhi usko call kare.
                 * Input ka data number format me convert ho jaye (kyunki e.target.value string hota hai).
                 * App crash na ho agar onAmountChange function pass nahi kiya ho.
                 */
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} // by default ye value select ke drop down menu me select rahegi.
                    // ab iss dropdown menu me if koi cahnge ho to uss per kya change hona chihiye uske liye ham onChange likhenge.
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    // yaha bhi hamne upper input field ke onChange() me jesa likha tha vese hi likha hai kyoki ham yaha par first left side vale se ye check kar rahe hai ki ye function(onCurrencyChange()) exist karta hai ki nahi. and if exist karta hai to fir right side vali argument me likhe hue function ko execute kar do. esa bol rahe hai.
                    disabled={currencyDisable} // same upper ke jese hi ye line bhi check karne ke liye hai ki drpdown menu disable hai ki nahi.
                >
                    {/* yaha option me ham saare option means country ke name to nahi likh skte hai to uske liye hame loop ka use karna hoga. */}
                    { // issko hata kar ham yaha par loop lagayenge. and then uss loop me ham isse inject karenge.
                        /* <option value="usd">
                            usd
                        </option> */}
                    {/** map ek loop function hai jisme ham ek callbakc pass karte hai. and yaha ham jobhi karenge iske andar vo iss block me hi likhenge.
                         * 
                         */}
                    {/* {currencyOptions.map((currency) => {
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    })} */} 
                    {/* ye upper vali syntax me options show nahi ho rahe kyu ki hame vaha se map ke andar vale {} hatane padenge. */}
                    {currencyOptions.map((currency) => 
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    )}

                </select>
            </div>
        </div>
    );
}

export default InputBox;