
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/portfolio-preview.png"; // add your sample image here
import { useEffect, useState } from "react";
function Home() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) return;

    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="hero-text">
          <h3 className="hero-eyebrow">BUILD YOUR OWN</h3>
          <h1>
            PORTFOLIO
          </h1>
          <p className="hero-subtitle">
            Design and publish your professional portfolio visually,
            without writing code.
          </p>
          <button className="cta-btn" onClick={() => navigate("/projects")}>
  Start Building
</button>

        </div>

        <div
          className="hero-image"
          onClick={() => navigate("/projects")}
        >
          <img src={heroImg} alt="Portfolio Preview" />
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="features">
        <h2>Why CanvasX?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Visual Builder</h3>
            <p>
              Drag, resize, and design layouts freely on a canvas.
              No templates. No limits.
            </p>
          </div>

          <div className="feature-card">
            <h3>WYSIWYG</h3>
            <p>
              Get true WYSIWYG experience in a formated way.
            </p>
          </div>

          <div className="feature-card">
            <h3>Export Ready</h3>
            <p>
              Export clean portfolio data or deploy later with ease.
            </p>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Home;
