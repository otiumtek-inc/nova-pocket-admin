const vScroll = {
  mounted: (el, binding) => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
      const to = document.querySelector(binding.value);
      if (to)
        window.scroll({
          top: to.getBoundingClientRect().top - 50 + window.scrollY,
          behavior: "smooth",
        }); // (2)
    });
  },
};

export default vScroll;
