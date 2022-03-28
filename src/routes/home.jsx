//Import hero image
import hero from '../assets/img/hero.png';

export default function Home() {
    return (
        <main>
            <h2>Home</h2>
            <p class="welcome">Welcome to my portfolio! Please click any of the links above.</p>
            <img class="hero" src={hero} alt="hero image" />
        </main>
    );
}