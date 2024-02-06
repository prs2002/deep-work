import "./App.css";
import DisableButton from "./components/DisableButton";
import Input from "./components/Input";

function App() {

  return (
    <div className="app">
      <div className="app-header">
        <div className="app-disable-button-text">Enable Extension:</div>
        <DisableButton />
      </div>
      <div className="app-body">
        <Input
          label="Auth Key"
          placeholder="Enter your GPT-3.5 Auth Key"
        />
      </div>
    </div>
  );
}

export default App;
