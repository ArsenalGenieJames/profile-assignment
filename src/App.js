import './App.css';
import Header from "./components/Header";
import ProfileContent from "./components/ProfileContent";
import SideBar from "./components/sidebar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <ProfileContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
