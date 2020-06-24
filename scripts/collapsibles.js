let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");

    if(this.innerHTML[0] === "+") {
      this.innerHTML = this.innerHTML.replace("+", "-");
    } else {
      this.innerHTML = this.innerHTML.replace("-", "+");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.paddingBottom = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.paddingBottom = 0.3 + "em";
    } 

  });
}