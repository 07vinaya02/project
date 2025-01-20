import { useNavigate } from "react-router-dom";
import './HomePage.css';

function HomePage() {
    const navigate = useNavigate();
    const goToProfileDetailsPage = () => {
        navigate('/ProfileDetailsPage');
    };

    return (
        <div className="home-container">
            <h1 className="home-title">HOME PAGE</h1>
            <button className="home-button" onClick={goToProfileDetailsPage}>Profiles</button>
        </div>
    );
}

export default HomePage;
