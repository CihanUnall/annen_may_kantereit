import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Home.css"; // CSS dosyasını içe aktar

function Home() {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed((prev) => !prev); // Büyütme veya küçültme durumu
  };

  return (
    <div className="image-home">
      <img
        className="imagehome"
        src="../images/annenmay_home.jpg"
        alt="AnnenMayKantereit"
      />
    </div>
  );
}

export default Home;
