import { Router, Route, Switch } from 'wouter';
import HomePage from './pages/HomePage.jsx';
import RoomsPage from './pages/RoomsPage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Room from "./pages/RoomsPage.jsx";
import "tailwindcss/tailwind.css";
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';
import ForgotPassword from './pages/forget-password.jsx';



export default function App() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <Router>
                    <Switch>
                        <Route path="/" component={HomePage} />
                        <Route path="/rooms" component={RoomsPage} />
                        <Route path="/booking" component={BookingPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/room/:id" component={Room} />
                        <Route path="/forgot-password" component={ForgotPassword} />
                        {/* <Route path="/reset-password/:token" component={<ResetPassword />} /> */}


                        <Route>
                            <div className="container mx-auto px-4 py-16 text-center">
                                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                                <p className="text-lg text-muted-foreground">
                                    The page you're looking for doesn't exist.
                                </p>
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </main>
            <Footer />
        </div>
    );
}