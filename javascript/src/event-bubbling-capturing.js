function domRead() {
  const parent = document.createElement("div");
  parent.addEventListener("click", () => console.log("parent clicked"), true);
  let text = document.createTextNode("parent");
  parent.appendChild(text);

  const child = document.createElement("div");
  child.addEventListener("click", () => console.log("child clicked"));
  text = document.createTextNode("child");
  child.appendChild(text);

  parent.appendChild(child);
  document.body.appendChild(parent);
}

if (document.readyState !== "loading") {
  domRead();
} else {
  document.addEventListener("DOMContentLoaded", domRead);
}
