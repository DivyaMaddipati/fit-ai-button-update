import './App.css';
// import {Page} from './Components/Page'
import React,{useState} from 'react';
import { Header } from './Components/Header';
import { Shop } from './Components/Shop';
import { Body } from './Components/Body';
// import {Header} from './Components/Header.jsx'
// import {Headerend} from './Components/Header-end'
// import { Firstcard } from './Components/Firstcard';
// import { SecondCard } from './Components/SecondCard';
// import {ThirdCard} from './Components/ThirdCard';
// import { Get4Hours } from './Components/Get4Hours';
// import {Products} from './Components/Products';
// import { FavProducts } from './Components/FavProducts';
// import { Just_in_spring } from './Components/Just_in_spring';
// import {Cashback} from './Components/Cashback'
// import {Products2} from './Components/Products2'
// import { For_U } from './Components/For_U';
// import { Inseason } from './Components/Inseason';
// import { HomeFurniture } from './Components/HomeFurniture';
// import { Covid19 } from './Components/Covid19';
// import { SharingValues } from './Components/Sharing_values';
// import {Feedback} from './Components/Feedback'
// import {Footer} from './Components/Footer'


function App() {

  const [state, setState] = useState(false);
  const [buttontxt, setButtontxt] = useState('Try New FITAI');

  const handleChange = () => {
    setState(!state);
    setButtontxt(state ?' Try New FITAI':'Scan with Camera');
  }


  return (
  <>
  <Header /> <br></br>
  <div className='d-flex justify-content-center align-items-center'>
    <button className="btn btn-primary center" onClick={handleChange}>
      {buttontxt}
    </button>
  </div>
  {/* <Page /> */}
  {/* {state ? (<Shop />):(<Body />)} */}
  {state ? (<Shop />) : (<Body />)}
</>
 );
}

export default App;



// import { Page } from './Components/Page';


// function App() {

//   const [state, setState] = useState(false);
//   const [buttontxt, setButtontxt] = useState('Try New FITAI');

//   const handleChange = () => {
//     setState(!state);
//     setButtontxt(state ?' Try New FITAI':'Scan with Camera');
//   }

//   return (
//   <>
//     <Header /> <br></br>
//     <div className='d-flex justify-content-center align-items-center'>
//       <button className="btn btn-primary center" onClick={handleChange}>
//         {buttontxt}
//       </button>
//     </div>
//     {/* <Page /> */}
//     {/* {state ? (<Shop />):(<Body />)} */}
//     {state ? (<Shop />) : (<Body />)}
//   </>
//   );
// }

// export default App;