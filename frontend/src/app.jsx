import { createRoot } from "react-dom/client";

import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";

import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { Footer } from "./components/Foorter";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">

        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
