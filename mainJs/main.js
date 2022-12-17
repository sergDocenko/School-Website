
// =======show/hide faq answer

const faqsContainer = document.querySelector(".faqs_container");
faqsContainer.addEventListener("click", (event) => {
   const faq = event.target.closest(".faq")
   const span = faq.querySelector("span");
   faq.classList.toggle("open");
   span.textContent === "-" ? span.textContent = "+" : span.textContent = "-";

})







