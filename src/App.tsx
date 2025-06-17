import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/ui/NavigationBar.tsx";
import SchedulePage from "./pages/SchedulePage.tsx";
import AvailableAdventuresPage from "./pages/AvailableAdventuresPage.tsx";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Navigate to="/adventures"/>}/>
                    <Route path="/adventures" element={<AvailableAdventuresPage/>}/>
                    <Route path="/schedule" element={<SchedulePage/>}/>
                </Routes>
        </BrowserRouter>
    );
}

export default App;
