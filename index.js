// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

//------------------------------------------------------//

window.addEventListener("scroll", () => {
  const navValue = setTimeout(() => {
    window.scrollY;
  }, 1);

  if (navValue > window.scrollY) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-60px";
  }
});
