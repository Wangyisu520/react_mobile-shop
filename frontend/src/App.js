import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HoneScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import register from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/profile" component={ProfileScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={register} />
          <Route path="/products/:id" component={ProductScreen} exact />
          <Route path="/cart/:id?" component={CartScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
