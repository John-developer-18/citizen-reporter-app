document.querySelector('#users').addEventListener("load", loadUsers());

function loadUsers() {
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://sheetdb.io/api/v1/qtm8symlc6c75', true);

xhr.onload = function() {
  if (this.status == 200) {
    var users = JSON.parse(this.responseText);

    var output = '';
    for (var i in users) {
      output += `
      <div class="card pt-1">
      <div class="card-body">
      <h4 class="card-title">${users[i].title}</h4>
      <p class="card-text textwrap">${users[i].content}</p>
      <p class="card-text textwrap">${users[i].author}</p>
      </div>
      </div>
      `
    }

    document.getElementById('users').innerHTML = output;
  }
}

xhr.send();

}
