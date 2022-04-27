import {Stack, Button} from "react-bootstrap";
import './App.css';

function App() {
  return <div className="mx-5 mt-3">
    <h1 className="title d-flex justify-content-center mb-5">Budget App</h1>
    <Stack direction='horizontal' gap='3' classname='header'>      
      <Button variant="success">Add Budget</Button>
      <Button variant="warning">Add Expense</Button>
    </Stack>

    <div className="boxes">
      
    </div>

  </div>
}

export default App;
