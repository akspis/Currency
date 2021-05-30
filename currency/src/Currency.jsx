import React from 'react'

export default function Currency(props) {
const {
currencyOption,
selectedCurrency,
selectCurrency,
amount,
changeAmount
} = props
    return (
        <div>
            <input type="number" value = {amount} onChange={changeAmount} className='inp'/>
            <select value={selectedCurrency} onChange={selectCurrency} className='sel'>
               {currencyOption.map((option,idx) => {
                  return <option className='op' key={idx} value={option}>{option}</option>
               })}
            </select>
        </div>
    )
}
