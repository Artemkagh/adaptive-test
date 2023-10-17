import React from 'react';
import strawberry from './images/strawicon.svg'
import homeicon from './images/homeicon.svg'
import messageicon from './images/messageicon.svg'
import plusicon from './images/plusicon.svg'
import socialicon from './images/socialicon.svg'
import quiticon from './images/quiticon.svg'


function App() {
  const [theme, setTheme] = React.useState(0);
  const [menu, setMenu] = React.useState(0);
  const arr = new Array(10).fill("");
  console.log(arr);
  const handleSwitchTheme = () => {
    setTheme(!theme);
    if(!theme){
      document.body.style.backgroundColor = "rgb(15, 16, 33)";
    }
    else{
      document.body.style.backgroundColor = "rgb(209, 209, 209)";
    } 
  }
  const handleOpenMenu = () => {
    setMenu(!menu);
  }
  return (
    <div className="maincontainer">
      <div className="headercontainer">
        <div className={`${!menu ? 'sidemenucontainer' : 'sidemenucontaineractive'}`}>
          <img src = {socialicon}></img>
          <img src = {messageicon}></img>
          <img src = {quiticon}></img>
          <img src = {homeicon}></img>
          <div onClick={handleOpenMenu} className={`${!menu ? 'plusdiv' : 'plusdivactive'}`}></div>
          
        </div>
        <p>Random text</p>
        <div onClick={handleSwitchTheme} className="switchtheme">
          <div className={`trigger${theme ? 'black' : ''}`}></div>
        </div>
      </div>
      <div className={`contentcontainer${theme ? 'black' : ''}`}>
        {arr.map(() => {
          return (
          <div className={`element${theme ? 'black' : ''}`}>
            <img src = {strawberry}></img>
            <p>Existence excuse finished might weddings dear style terms afraid sometimes. 
              Properly hills forfeited perhaps years unaffected seems wondered can although. </p>
          </div>)
        })}
      </div>
      
    </div>
  );
}

export default App;
