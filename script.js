const slides = [
    {
      title: "Shop",
      text: "Discover a curated selection of preloved baby essentials at affordable prices. From clothes to toys, every item is chosen with care, helping you save while giving second life to quality goods.",
      image: "img/Services/Rectangle 101.png",
      background: "img/Services/Rectangle 1.png",
      buttonlink: "shop.html"
    },
    {
      title: "Trade",
      text: "Swap items you no longer need with other moms! Our easy-to-use trade system connects you with trusted users for a fair and practical way to exchange baby gear.",
      image: "img/Services/Rectangle 102.png",
      background: "img/Services/Rectangle 2.png",
      buttonlink: "trade.html"
    },
    {
      title: "Forum",
      text: "Join a warm space where moms support moms. Share experiences, ask questions, or just vent — this is your go-to spot for real talk and real connection.",
      image: "img/Services/Rectangle 103.png",
      background: "img/Services/Rectangle 3.png",
      buttonlink: "forum-foryou.html"
    },
    {
      title: "Insights",
      text: "Access parenting tips, articles, and expert advice tailored for moms with little ones. Stay informed, stay on track, and stay inspired as your child grows.",
      image: "img/Services/Rectangle 104.png",
      background: "img/Services/Rectangle 4.png",
      buttonlink: "insights.html"
    }
  ];

  let current = 0;
  const textSlide = document.getElementById("text-slide");
  const imageSlide = document.getElementById("image-slide");
  const linkSlkide = document.getElementsByClassName("btn");
  const dotsContainer = document.getElementById("dots");

  function renderDots() {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement("span");
      dot.className = "dot" + (idx === current ? " active" : "");
      dot.onclick = () => {
        current = idx;
        updateSlide();
      };
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlide() {
    const slide = slides[current];
  
    textSlide.innerHTML = `
      <h2>${slide.title}</h2>
      <p>${slide.text}</p>
      <a href="${slide.buttonlink}" class="btn">Explore Now</a>
    `;
    imageSlide.innerHTML = `<img src="${slide.image}" alt="Slide Image">`;
    document.getElementById("slide-container").style.backgroundImage = `url('${slide.background}')`;

  
    textSlide.classList.remove("fade");
    imageSlide.classList.remove("fade");
    void textSlide.offsetWidth; 
    textSlide.classList.add("fade");
    imageSlide.classList.add("fade");
  
  
    renderDots();
  }
  

  function nextSlide() {
    current = (current + 1) % slides.length;
    updateSlide();
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    updateSlide();
  }

  renderDots();
