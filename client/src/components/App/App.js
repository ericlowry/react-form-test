import './App.css';

import NavBar from '../NavBar';
import Container from 'react-bootstrap/Container';

import WidgetForm from '../WidgetForm';

const emptyWidget = {
  _id: '',
  label: '',
  status: 'inactive',
  tags: '',
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container className="mt-3">
        <WidgetForm
          mode="CREATE"
          widget={emptyWidget}
          onSubmit={data => console.log(data)}
        />
      </Container>
    </div>
  );
}

export default App;
