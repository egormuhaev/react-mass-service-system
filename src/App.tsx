import './App.css';
import AppRouter from './providers/AppRouter.provider';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
