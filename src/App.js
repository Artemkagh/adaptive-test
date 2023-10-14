import React from 'react';

function App() {
  const contentcol = document.querySelector(".contentcontainer");
  const [theme, setTheme] = React.useState(0);

  const handleSwitchTheme = () => {
    setTheme(!theme);
    if(!theme){
      document.body.style.backgroundColor = "rgb(15, 16, 33)";
    }
    else{
      document.body.style.backgroundColor = "rgb(209, 209, 209)";
    } 
  }

  return (
    <div className="maincontainer">
      <div className="headercontainer">
        <div onClick={handleSwitchTheme} className="switchtheme">
          <div className={`trigger${theme ? 'black' : ''}`}></div>
        </div>
      </div>
      <div className={`contentcontainer${theme ? 'black' : ''}`}>
      </div>
      
    </div>
  );
}

export default App;
