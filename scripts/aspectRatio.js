let landscapeStyle = document.styleSheets[0];
let portraitStyle = document.styleSheets[1];

if (window.innerHeight >= window.innerWidth) {
  landscapeStyle.disabled = true;
} else {
  portraitStyle.disabled = true;
}

function toggleStylesheet() {
  if (window.innerHeight >= window.innerWidth && portraitStyle.disabled) {
    portraitStyle.disabled = false;
    landscapeStyle.disabled = true;
  } else if (window.innerWidth > window.innerHeight && landscapeStyle.disabled) {
    portraitStyle.disabled = true;
    landscapeStyle.disabled = false;
  }
}

toggleStylesheet();

window.addEventListener("resize", toggleStylesheet);

