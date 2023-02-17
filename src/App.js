import LessonContextProvider from './context/LessonContextProvider';
import Landing from './component/landing/Landing';

function App() {
  return (
    <div className="App">
      <LessonContextProvider>
        <Landing />
      </LessonContextProvider>
    </div>
  );
}

export default App;
