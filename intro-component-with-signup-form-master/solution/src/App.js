import './App.css';
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <section className="showcase">
        <div className="overlay">
          <article>
            <h1>Learn to code by watching others</h1>
            <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
    but understanding how developers think is invaluable.</p>
          </article>

          <article>
            <div className="tag">
              <strong>Try it free 7 days</strong> then $20/mo. thereafter
            </div>
            <Form />
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
