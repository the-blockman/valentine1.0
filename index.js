const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const isMobile = window.innerWidth <= 480;

noBtn.addEventListener("mouseenter", () => {
  const x = isMobile ? Math.random() * 120 - 60 : Math.random() * 200 - 100;

  const y = isMobile ? Math.random() * 50 - 25 : Math.random() * 80 - 40;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  const x = isMobile ? Math.random() * 120 - 60 : Math.random() * 200 - 100;

  const y = isMobile ? Math.random() * 50 - 25 : Math.random() * 80 - 40;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
        <div style="
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:linear-gradient(135deg,#ff9a9e,#fad0c4);
          font-family:Poppins,sans-serif;
          text-align:center;
        ">
          <h1 style="color:#ff4d6d;">
            Good girl 💖<br>
            See you on Valentine’s princess💘
          </h1>
        </div>
      `;
});
