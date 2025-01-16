import { createRoot } from "react-dom/client";

import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";

import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { Footer } from "./components/Foorter";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">

        <Container>
          <h1>Welcome to ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
