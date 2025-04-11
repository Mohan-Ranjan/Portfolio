document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

import React from "react";
import CV from "./CV";

function App() {
  return (
    <div>
      <CV />
    </div>
  );
}

export default App;

