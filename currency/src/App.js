import React , {useState , useEffect} from 'react';
import './App.css';
import Currency from './Currency'

var URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=b540c23e50dd9b7640727b8dcd40a15f&format=1';
function App() {
const [currencyOption, setcurrencyOption] = useState([])
const [fromCurrency, setfromCurrency] = useState()
const [toCurrency, settoCurrency] = useState()
const [exchangeRate, setexchangeRate] = useState()
const [amount, setamount] = useState(1)
const [checkStatus, setcheckStatus] = useState(true)


 let fromamount, toamount
if(checkStatus){
  fromamount = amount
  toamount = amount * exchangeRate
}else{
  toamount =amount
  fromamount = amount / exchangeRate
}

  useEffect(() => {
   fetch(URL)
   .then(res => res.json())
   .then(info => {
      const firstCurrency = Object.keys(info.rates)[0]
      setcurrencyOption([info.base, ...Object.keys(info.rates)])
      setfromCurrency(info.rates)
      settoCurrency(firstCurrency)          
   })
  }, [])

  useEffect(()=>{
    if(fromCurrency != null && toCurrency != null)
     fetch(`${URL}$base=${fromCurrency}$base2=${toCurrency}`)
     .then(res =>res.json())
     .then(info =>  setexchangeRate(info.rates[toCurrency]))
  },[fromCurrency , toCurrency])
   
 const handlefromAmount = (e) =>{
  setamount(e.target.value)
  setcheckStatus(true)
  }

  const handletoAmount = (e) =>{
    setamount(e.target.value)
    setcheckStatus(false)
    }
  return (
    <div className="App">
      <h2 className='name'>Currency Converter</h2>
    <div className='currency1'>
     <Currency 
     currencyOption ={currencyOption}
     selectedCurrency = {fromCurrency} 
     selectCurrency ={e => setfromCurrency(e.target.value)}
     amount = {fromamount}
     changeAmount = {handlefromAmount}
     />
     </div>
     <div className='currency2'>
     <Currency 
     currencyOption ={currencyOption}
     selectedCurrency = {toCurrency}
     selectCurrency = {e => settoCurrency(e.target.value)}
     amount = {toamount}
     changeAmount = {handletoAmount}
     />
     </div>
    </div>
  );
}

export default App;
