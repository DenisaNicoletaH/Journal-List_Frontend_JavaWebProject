import './App.css';
import JournalSquare from './components/JounalSquare';
import ToWriteMessage from './components/ToWriteMessage';
import { DateTime } from './components/TimeClock';
import Layout from './pages/Layout';

function App() {
  return (


    <div>

        <DateTime></DateTime>

        <Layout> </Layout>

        <JournalSquare> </JournalSquare>

    </div>


    /*
        //title
        <div className='text-danger'>Hello</div>
    */







  );
}
export default App;
