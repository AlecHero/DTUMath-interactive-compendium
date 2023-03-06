(function () {
  window.onload = function () {
    const header = document.createElement("header");
    header.innerHTML = `
      <nav>
        <ul>
          <li><a style="color:white;font-size:18px;margin-right: 10px;" target="content" href="start.html">Home</a></li>
          <li><a style="color:white;font-size:18px;margin-right: 10px;" target="content" href="math1.html">Math 1</a></li>
          <li><a style="color:white;font-size:18px;margin-right: 10px;" target="content" href="math2.html">Math 2</a></li>
          <li><a style="color:white;font-size:18px;margin-right: 10px;" target="content" href="testpage1.html">Test page1</a></li>
          <li><a style="color:white;font-size:18px;margin-right: 10px;" target="content" href="testpage2.html">Test page2</a></li>
          <li><a style="color:white;font-size:18px;margin-right: 10px;" target="content" href="testpage3.html">Test page3</a></li>
        </ul>
      </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
  }
})();
