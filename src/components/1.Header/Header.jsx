import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [ShowModel, setShowModel] = useState(false);

  useEffect(() => {
    // عند تحميل الصفحة، تحقق من الـ localStorage
    const lightmode = localStorage.getItem("lightmode");
    if (lightmode === "active") {
      enableLightmode();
    } else {
      disableLightmode(); // الوضع الافتراضي هو الداكن
    }

    const modeButton = document.getElementById("mode");
    if (modeButton) {
      modeButton.addEventListener("click", toggleLightMode);
    }

    return () => {
      if (modeButton) {
        modeButton.removeEventListener("click", toggleLightMode);
      }
    };
  }, []);

  const toggleLightMode = () => {
    let lightmode = localStorage.getItem("lightmode");
    lightmode !== "active" ? enableLightmode() : disableLightmode();
  };

  const enableLightmode = () => {
    document.body.classList.add("lightmode");
    localStorage.setItem("lightmode", "active");
  };

  const disableLightmode = () => {
    document.body.classList.remove("lightmode");
    localStorage.setItem("lightmode", "inactive"); // نضع القيمة "inactive" للحالة الداكنة
  };

  return (
    <div className="head">
      <section className="flex">
        <button
          onClick={() => {
            setShowModel(true);
          }}
          className="menu icon-menu"
        />
        <div></div>
        <nav>
          <ul className="flex">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <button id="mode">
          <span className="icon-moon-o"></span>
          <span className="icon-sun"></span>
        </button>

        {ShowModel && (
          <div className="fixed">
            <div className="model">
              <ul>
                <li>
                  <button
                    className="icon-close"
                    onClick={() => {
                      setShowModel(false);
                    }}
                  />
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Articles</a>
                </li>
                <li>
                  <a href="">Speaking</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
                <li>
                  <a href="">Others</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Header;
