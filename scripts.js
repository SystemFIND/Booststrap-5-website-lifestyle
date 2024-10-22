document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
    
    // Form submission event handler
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for subscribing!");
    });
  });
  