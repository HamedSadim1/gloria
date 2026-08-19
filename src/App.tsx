import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Card from "./components/Card";
import ErrorPage from "./components/ErrorPage";
import SharedLayout from "./components/SharedLayout";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { ROUTES } from "./config/routes";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <div className="App flex min-h-screen flex-col">
            <Routes>
              <Route path={ROUTES.HOME} element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.PRODUCTS} element={<Products />} />
                <Route path={ROUTES.PRODUCT_DETAIL} element={<Card />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route
                  path={ROUTES.DASHBOARD}
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
