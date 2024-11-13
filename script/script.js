const accordion = document.querySelectorAll("dt");
const dd = document.querySelectorAll("dd");
accordion.forEach((item) => {
  item.addEventListener("click", (event) => {
    accordion.forEach((remove) => {
      dd.forEach((item) => {
        item.classList.remove("ativo");
      });

      remove.classList.remove("ativo");
    });
    item.classList.add("ativo");
    event.currentTarget.nextElementSibling.classList.add("ativo");
  });
});
