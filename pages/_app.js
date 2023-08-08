import "@/styles/globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { AuthProvider } from "../context/auth";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
