import "./App.css";
const { default: Button } = require("./components/Button");

const App = () => {
  return (
    <div style={{ margin: "10px" }}>
      <h1>Button Component</h1>
      <div style={{ margin: "20px" }}>
        <Button text="Default" size="md" />
      </div>
      <div style={{ margin: "20px" }}>
        <Button text="Default" variant="outline" size="md" />
      </div>
      <div style={{ margin: "20px" }}>
        <Button text="Default" variant="text" size="md" disableShadow />
      </div>
      <div style={{ margin: "20px" }}>
        <Button text="Default" size="md" disable disableShadow />
      </div>
      <div style={{ margin: "20px" }}>
        <Button text="Primary" size="md" color="primary" />
      </div>
      <div style={{ margin: "20px" }}>
        <Button text="Secondary" size="md" color="secondary" />
      </div>
      <div style={{ margin: "20px" }}>
        <Button text="Danger" size="md" color="danger" />
      </div>
    </div>
  );
};

export default App;
