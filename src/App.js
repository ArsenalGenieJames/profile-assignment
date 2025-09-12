import './App.css';
import Header from "./src/components/Header";
import ProfileContent from "src/components/ProfileContent";
import SideBar from ".sidebar/components/SideBar";
import Footer from ".footer/components/Footer";

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
