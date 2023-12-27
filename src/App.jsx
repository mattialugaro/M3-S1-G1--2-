import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponet from "./components/ImageComponent";
import HeadComponent from "./components/HeadComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadComponent logo={logo}/>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <ImageComponet
            imageStyle={{ width: "200px", height: "200px", objectFit: "cover", marginTop:"2rem"}}
            src="https://images.unsplash.com/photo-1699084681511-8cc4306de721?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="gufo"
          />
          <ButtonComponent
            buttonStyle={{ borderRadius: "50px", backgroundColor: "green", padding: "1rem", marginLeft:"1rem", fontWeight:"bold"}}
            buttonContent={"primo bottone"}
          />
        </div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <ImageComponet
            imageStyle={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "50px", marginTop:"2rem"}}
            src="https://images.unsplash.com/photo-1604006066242-d15405f2305a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="barbagianni"
          />
          <ButtonComponent
            buttonStyle={{ borderRadius: "50px", color: "red", padding: "2rem", marginLeft:"1rem", fontSize:"2rem"}}
            buttonContent={"secondo bottone"}
          />
        </div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <ImageComponet
            imageStyle={{ width: "200px", height: "200px", objectFit: "cover", marginTop:"2rem"}}
            src="https://plus.unsplash.com/premium_photo-1674487959487-57289d4720ff?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="civetta"
          />
          <ButtonComponent
            buttonStyle={{ borderRadius: "50px", backgroundColor: "blue", color: "white", padding: "3rem", marginLeft:"1rem", fontStyle:"italic"}}
            buttonContent={"terzo bottone"}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
