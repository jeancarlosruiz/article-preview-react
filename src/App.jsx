import styles from "./App.module.css";
import Article from "./components/Article";

function App() {
  return (
    <>
      <main className={styles.container}>
        <Article />
      </main>
    </>
  );
}

export default App;

// Si el state es falso ? "hide" ? no hide
