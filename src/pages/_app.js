import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app-container ${theme}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
