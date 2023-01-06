import './App.css'
import Hero from "./components/Hero";
import Projects from "./components/Projects"
import Profile from "./components/Profile";

function App() {

    return (
        <div className={`
            font-['Chivo_Mono'] w-full overflow-auto h-screen related fixed bg-cover 
            bg-[url('./assets/images/DSCF4536.jpeg')]
        `}>
            <Hero/>
            <Projects/>
            <Profile/>
        </div>
    )
}

export default App
