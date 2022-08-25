import { Header } from "./header";
import { Footer } from "./footer";

export function Layout({ children }) {
    return (
      <div>
        <header className="header mb-2">
          <Header />
        </header>
  
        <main className="main">{children}</main>
  
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  };