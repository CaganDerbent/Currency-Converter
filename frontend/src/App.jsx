import React, { useEffect, useState } from 'react';
import './index.css';
import logo from './logo.png'
import Footer from './Footer'

const App = () => {
  const [data, setData] = useState("");
  const [amount,setAmount] = useState("");
  const [tempamount,settempamount] = useState("");

  const [from,setFrom] = useState("");

  const [to,setTo] = useState("");
  const [totemp,setTotemp] = useState("")

  const [value,setValue] = useState("");
  const [tempfrom,settempfrom] = useState("");

  const [height,set] = useState(100);

  const [err,setErr] = useState(false);

  const [list,setList] = useState([{"symbol":"USD","name":"United States Dollar"},{"symbol":"ALL","name":"Albania Lek"},{"symbol":"DZD","name":"Algeria Dinar"},{"symbol":"AOA","name":"Angola Kwanza"},{"symbol":"ARS","name":"Argentina Peso"},{"symbol":"AMD","name":"Armenia Dram"},{"symbol":"AWG","name":"Aruba Guilder"},{"symbol":"AUD","name":"Australia Dollar"},{"symbol":"AZN","name":"Azerbaijan Manat"},{"symbol":"BSD","name":"Bahamas Dollar"},{"symbol":"BHD","name":"Bahrain Dinar"},{"symbol":"BDT","name":"Bangladesh Taka"},{"symbol":"BBD","name":"Barbados Dollar"},{"symbol":"BYN","name":"Belarus Ruble"},{"symbol":"BZD","name":"Belize Dollar"},{"symbol":"BMD","name":"Bermuda Dollar"},{"symbol":"BTN","name":"Bhutan Ngultrum"},{"symbol":"BOB","name":"Bolivia Bolíviano"},{"symbol":"BAM","name":"Bosnia and Herzegovina Convertible Marka"},{"symbol":"BWP","name":"Botswana Pula"},{"symbol":"BRL","name":"Brazil Real"},{"symbol":"BND","name":"Brunei Darussalam Dollar"},{"symbol":"BGN","name":"Bulgaria Lev"},{"symbol":"BIF","name":"Burundi Franc"},{"symbol":"KHR","name":"Cambodia Riel"},{"symbol":"CAD","name":"Canada Dollar"},{"symbol":"CVE","name":"Cape Verde Escudo"},{"symbol":"KYD","name":"Cayman Islands Dollar"},{"symbol":"CLP","name":"Chile Peso"},{"symbol":"CNY","name":"China Yuan Renminbi"},{"symbol":"COP","name":"Colombia Peso"},{"symbol":"XOF","name":"Communauté Financière Africaine (BCEAO) Franc"},{"symbol":"XAF","name":"Communauté Financière Africaine (BEAC) CFA Franc BEAC"},{"symbol":"KMF","name":"Comorian Franc"},{"symbol":"XPF","name":"Comptoirs Français du Pacifique (CFP) Franc"},{"symbol":"CDF","name":"Congo/Kinshasa Franc"},{"symbol":"CRC","name":"Costa Rica Colon"},{"symbol":"HRK","name":"Croatia Kuna"},{"symbol":"CUP","name":"Cuba Peso"},{"symbol":"CZK","name":"Czech Republic Koruna"},{"symbol":"DKK","name":"Denmark Krone"},{"symbol":"DJF","name":"Djibouti Franc"},{"symbol":"DOP","name":"Dominican Republic Peso"},{"symbol":"XCD","name":"East Caribbean Dollar"},{"symbol":"EGP","name":"Egypt Pound"},{"symbol":"SVC","name":"El Salvador Colon"},{"symbol":"ETB","name":"Ethiopia Birr"},{"symbol":"EUR","name":"Euro Member Countries"},{"symbol":"FJD","name":"Fiji Dollar"},{"symbol":"GMD","name":"Gambia Dalasi"},{"symbol":"GEL","name":"Georgia Lari"},{"symbol":"GHS","name":"Ghana Cedi"},{"symbol":"GTQ","name":"Guatemala Quetzal"},{"symbol":"GNF","name":"Guinea Franc"},{"symbol":"GYD","name":"Guyana Dollar"},{"symbol":"HTG","name":"Haiti Gourde"},{"symbol":"HNL","name":"Honduras Lempira"},{"symbol":"HKD","name":"Hong Kong Dollar"},{"symbol":"HUF","name":"Hungary Forint"},{"symbol":"ISK","name":"Iceland Krona"},{"symbol":"INR","name":"India Rupee"},{"symbol":"IDR","name":"Indonesia Rupiah"},{"symbol":"IRR","name":"Iran Rial"},{"symbol":"IQD","name":"Iraq Dinar"},{"symbol":"ILS","name":"Israel Shekel"},{"symbol":"JMD","name":"Jamaica Dollar"},{"symbol":"JPY","name":"Japan Yen"},{"symbol":"JOD","name":"Jordan Dinar"},{"symbol":"KZT","name":"Kazakhstan Tenge"},{"symbol":"KES","name":"Kenya Shilling"},{"symbol":"KRW","name":"Korea (South) Won"},{"symbol":"KWD","name":"Kuwait Dinar"},{"symbol":"KGS","name":"Kyrgyzstan Som"},{"symbol":"LAK","name":"Laos Kip"},{"symbol":"LBP","name":"Lebanon Pound"},{"symbol":"LSL","name":"Lesotho Loti"},{"symbol":"LRD","name":"Liberia Dollar"},{"symbol":"LYD","name":"Libya Dinar"},{"symbol":"MOP","name":"Macau Pataca"},{"symbol":"MKD","name":"Macedonia Denar"},{"symbol":"MGA","name":"Madagascar Ariary"},{"symbol":"MWK","name":"Malawi Kwacha"},{"symbol":"MYR","name":"Malaysia Ringgit"},{"symbol":"MVR","name":"Maldives (Maldive Islands) Rufiyaa"},{"symbol":"MUR","name":"Mauritius Rupee"},{"symbol":"MXN","name":"Mexico Peso"},{"symbol":"MDL","name":"Moldova Leu"},{"symbol":"MAD","name":"Morocco Dirham"},{"symbol":"MZN","name":"Mozambique Metical"},{"symbol":"MMK","name":"Myanmar (Burma) Kyat"},{"symbol":"NAD","name":"Namibia Dollar"},{"symbol":"NPR","name":"Nepal Rupee"},{"symbol":"ANG","name":"Netherlands Antilles Guilder"},{"symbol":"NZD","name":"New Zealand Dollar"},{"symbol":"NIO","name":"Nicaragua Cordoba"},{"symbol":"NGN","name":"Nigeria Naira"},{"symbol":"NOK","name":"Norway Krone"},{"symbol":"OMR","name":"Oman Rial"},{"symbol":"PKR","name":"Pakistan Rupee"},{"symbol":"PAB","name":"Panama Balboa"},{"symbol":"PGK","name":"Papua New Guinea Kina"},{"symbol":"PYG","name":"Paraguay Guarani"},{"symbol":"PEN","name":"Peru Sol"},{"symbol":"PHP","name":"Philippines Peso"},{"symbol":"PLN","name":"Poland Zloty"},{"symbol":"QAR","name":"Qatar Riyal"},{"symbol":"RON","name":"Romania Leu"},{"symbol":"RUB","name":"Russia Ruble"},{"symbol":"RWF","name":"Rwanda Franc"},{"symbol":"SAR","name":"Saudi Arabia Riyal"},{"symbol":"RSD","name":"Serbia Dinar"},{"symbol":"SCR","name":"Seychelles Rupee"},{"symbol":"SLL","name":"Sierra Leone Leone"},{"symbol":"SGD","name":"Singapore Dollar"},{"symbol":"SBD","name":"Solomon Islands Dollar"},{"symbol":"SOS","name":"Somalia Shilling"},{"symbol":"ZAR","name":"South Africa Rand"},{"symbol":"LKR","name":"Sri Lanka Rupee"},{"symbol":"SDG","name":"Sudan Pound"},{"symbol":"SRD","name":"Suriname Dollar"},{"symbol":"SZL","name":"Swaziland Lilangeni"},{"symbol":"SEK","name":"Sweden Krona"},{"symbol":"CHF","name":"Switzerland Franc"},{"symbol":"TWD","name":"Taiwan New Dollar"},{"symbol":"TJS","name":"Tajikistan Somoni"},{"symbol":"TZS","name":"Tanzania Shilling"},{"symbol":"THB","name":"Thailand Baht"},{"symbol":"TOP","name":"Tonga Pa'anga"},{"symbol":"TTD","name":"Trinidad and Tobago Dollar"},{"symbol":"TND","name":"Tunisia Dinar"},{"symbol":"TRY","name":"Turkey Lira"},{"symbol":"TMT","name":"Turkmenistan Manat"},{"symbol":"UGX","name":"Uganda Shilling"},{"symbol":"UAH","name":"Ukraine Hryvnia"},{"symbol":"AED","name":"United Arab Emirates Dirham"},{"symbol":"GBP","name":"United Kingdom Pound"},{"symbol":"UYU","name":"Uruguay Peso"},{"symbol":"UZS","name":"Uzbekistan Som"},{"symbol":"VND","name":"Viet Nam Dong"},{"symbol":"YER","name":"Yemen Rial"},{"symbol":"ZMW","name":"Zambia Kwacha"},{"symbol":"AFN","name":"Afghan Afghani"},{"symbol":"CLF","name":"Unidad de Fomento"},{"symbol":"CNH","name":"Chinese Renminbi Yuan Offshore"},{"symbol":"ETH","name":"Ethereum"},{"symbol":"LTC","name":"Litecoin"},{"symbol":"BYR","name":"Belarusian Ruble"},{"symbol":"CUC","name":"Cuban Convertible Peso"},{"symbol":"EEK","name":"Estonian Kroon"},{"symbol":"ERN","name":"Eritrean Nakfa"},{"symbol":"FKP","name":"Falkland Pound"},{"symbol":"GGP","name":"Guernsey Pound"},{"symbol":"GIP","name":"Gibraltar Pound"},{"symbol":"IMP","name":"Isle of Man Pound"},{"symbol":"JEP","name":"Jersey Pound"},{"symbol":"LTL","name":"Lithuanian Litas"},{"symbol":"MTL","name":"Maltese Lira"},{"symbol":"SHP","name":"Saint Helenian Pound"},{"symbol":"STD","name":"São Tomé and Príncipe Dobra"},{"symbol":"XCD","name":"East Caribbean Dollar"}]);

  useEffect(()=>{
    async function efekt(){
      console.log(amount)
      
    }
    efekt();
  },)

  
  
  

  async function fetchData() {

    //const KEY = process.env.REACT_APP_API_KEY;
    //const HOST = process.env.REACT_APP_API_HOST;
 
    const url = `https://currency-converter18.p.rapidapi.com/api/v1/convert?from=${tempfrom}&to=${totemp}&amount=${tempamount}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd6dafea497mshdee72e26d5b0a6bp1c3324jsn55d76122ad79',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      }
    };
    
    try {
      setTo(totemp)
      setFrom(tempfrom)
      setAmount(tempamount)
     
      const response = await fetch(url, options);
      const result1 = await response.text();
      console.log(result1);
      setData(result1)
    
      const jsonData = `${result1}`;
      const object = JSON.parse(jsonData);
    
      const c_amount = object.result.convertedAmount;
      setErr(false)
      console.log(c_amount.toFixed(2))
      setValue(c_amount.toFixed(2))
      set(200);

    } catch (error) {
      setErr(true)
      setValue("Oops ! Something went wrong.");
      set(200);
      console.error(error);
    }
    }



  return (
    <>
    <div id='full'>
      <Footer/>
      <div className='navbar'><img src={logo} alt="" style={{width:"120px",height:"90px"}} /> <h1 style={{fontSize:"32px"}}>Currency Converter</h1></div>
      
      <div className='container'style={{height:`${height}px`}}>
      <input type="text"placeholder="Amount" name="image" autoComplete='off' onChange={(e) => settempamount(e.target.value)} value={tempamount}/>
      

      <select
          onChange={(e) => settempfrom(e.target.value)} 
          value={tempfrom} 
        >  
           <option>FROM</option>
          
          
          {list.map((currency) => (
          <option key={currency.symbol} value={`${currency.symbol}`}>
            {currency.symbol}
          </option>
        ))}
      
        </select>

        <i className="fa-solid fa-arrow-right fa-xl" style={{marginTop:"45px"}}></i>

        <select
          onChange={(e) => setTotemp(e.target.value)} 
          value={totemp} 
        >
          <option>TO</option>
          {list.map((currency) => (
          <option key={currency.symbol} value={`${currency.symbol}`}>
            {currency.symbol}
          </option>
        ))}
      
        </select>
        <button id='convert' onClick={fetchData}>Convert</button>
        {err ? <div className='value' style={{color:"red"}}>{value}</div> : <div className='value'> <span style={{fontWeight:"200"}}>{amount} {from} =</span>  <strong>{value} {to}</strong></div>}
      </div>
      <div className='title'>
      <h1 id='title'>Supported Currencies List</h1>

      <table className="employee">
        <thead>
            <tr>
                <th>Symbol</th>
                <th>Currency Name</th>
  
            </tr>
        </thead>
        <tbody>
        {list && list.map((currency)=>(
                    
                    <tr key={currency.symbol}>
                        <td>{currency.symbol}</td>
                        <td>{currency.name}</td>
                       
                        
                    </tr> 
                    ))}

        </tbody>
    </table>
  
      </div>

      
      
      
      
      
      </div>
    </>
  );
}

export default App; 