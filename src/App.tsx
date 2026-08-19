import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ErrorBoundary from "./components/error/ErrorBoundary";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Card from "./components/pages/Card";
import ErrorPage from "./components/error/ErrorPage";
import SharedLayout from "./components/layout/SharedLayout";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import ProtectedRoute from "./components/layout/ProtectedRoute";
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
