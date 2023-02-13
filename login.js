var People = [
  {
    username: "darshan",
    password: "darshan"
  }

]

function getInfo() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value

  for (var i = 0; i < People.length; i++) {
    if (username == People[i].username && password == People[i].password) {
      alert(username + " is logged in successfully!!!!")
      location.assign('a.html')
      console.log(username + " is logged in ")
      return
    }
  }
  alert("incorrect username or password")
  console.log("incorrect username or password")
}
