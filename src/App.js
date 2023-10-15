import React from 'react';

function App() {
  const [theme, setTheme] = React.useState(0);
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
  //<img src = {sunicon} className={`trigger${theme ? 'black' : ''}`}></img>
  return (
    <div className="maincontainer">
      <div className="headercontainer">
        <p>Random text</p>
        <div onClick={handleSwitchTheme} className="switchtheme">
          <div className={`trigger${theme ? 'black' : ''}`}></div>
        </div>
      </div>
      <div className={`contentcontainer${theme ? 'black' : ''}`}>
        {arr.map(() => {
          return <div className={`element${theme ? 'black' : ''}`}></div>
        })}
      </div>
      
    </div>
  );
}

export default App;
