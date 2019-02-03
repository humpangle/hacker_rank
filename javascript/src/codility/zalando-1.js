/**
 *  Given one or more dom node:
 *  <div class="comment-list" data-count="someNumber" ></div>
 *
 * for each someNumber of data-count, make ajax request to url
 * https://www.example.com/comments?count= + someNumber
 */

let urls = "https://www.example.com/comments?count=";

const list = document.getElementsByClassName("comment-list");

[].map.call(list, s => {
  let text = document.createTextNode("Loading...");
  s.appendChild(text);

  let count = s.getAttribute("data-count");
  let url = urls + count;
  fetch(url)
    .then(r => r.json())
    .then(m => {
      s.removeChild(text);

      m.forEach(t => {
        let d = document.createElement("div");
        d.classList.add("comment-item");

        let e = document.createElement("div");
        e.classList.add("comment-item__username");
        e.textContent = t.username;
        d.appendChild(e);

        let f = document.createElement("div");
        f.classList.add("comment-item__message");
        f.textContent = t.message;
        e.appendChild(f);

        s.appendChild(d);
      });
    })
    .catch(() => {
      s.removeChild(text);
    });
});
