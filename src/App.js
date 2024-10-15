import React, { useEffect } from 'react';
import MainRoutes from "./routes/MainRoutes";

export default function App() {
  useEffect(() => {
    document.title = 'CarteleraFlash';
  }, []);

  return <MainRoutes />;
}