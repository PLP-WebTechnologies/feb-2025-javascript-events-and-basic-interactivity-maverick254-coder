// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });
  
  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    document.getElementById("hoverBox").style.backgroundColor = "salmon";
  });
  
  document.getElementById("keyInput").addEventListener("keypress", (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("Secret double-click revealed!");
  });
  
  // Interactive Elements
  document.getElementById("colorChanger").addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
  });
  
  // Image Slideshow
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150/0000FF",
    "https://via.placeholder.com/150/FF0000"
  ];
  let currentImg = 0;
  
  document.getElementById("nextImg").addEventListener("click", () => {
    currentImg = (currentImg + 1) % images.length;
    document.getElementById("galleryImg").src = images[currentImg];
  });
  
  // Tabs
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
      document.getElementById(tab.dataset.target).style.display = "block";
    });
  });
  
  // Form Validation
  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email.includes("@")) {
      alert("Invalid email format.");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }
    alert("Form submitted successfully!");
  });
  
  // Real-time Password Feedback
  document.getElementById("password").addEventListener("input", (e) => {
    const feedback = document.getElementById("passwordFeedback");
    if (e.target.value.length < 8) {
      feedback.textContent = "Too short!";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Looks good!";
      feedback.style.color = "green";
    }
  });
  