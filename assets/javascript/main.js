document.addEventListener("DOMContentLoaded", function() {
    const resetButton = document.querySelector("#reset-button");
    const image1 = document.querySelector("#image1");
    const image2 = document.querySelector("#image2");
  
    resetButton.addEventListener("click", function() {
      if (image1.classList.contains("hide")) {
        image1.classList.remove("hide");
        image2.classList.add("hide");
      } else {
        image2.classList.remove("hide");
        image1.classList.add("hide");
      }
    });
  });

  // fix this garbage later

