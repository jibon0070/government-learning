(() => {
  const pathname = window.location.pathname;

  console.log(pathname);

  window.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("header nav ul li a");
    links.forEach((a) => {
      const link = a.getAttribute("href");

      if (link === pathname) a.classList.add("active");
    });
  });
})();
