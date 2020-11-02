/*class User
{
constructor(username, password)
{
this.username = username;
this.password = password;
}
}


class Task  
{
constructor (ID, name, owner, creator, done, cleared)
{
this.ID = ID;
this.name = name;
this.owner = owner;
this.creator = creator;
this.done = true;
this.cleared = false;
}
}

var User1 = new User ("Hello1", "Hello1");
var User2 = new User("Hello2", "Hello2");


var Task1 = new Task(1, "Task1", "", "", "", false);
var Task2 = new Task(2, "Task2", User1, User1, false, false);
var Task3 = new Task(3, "Task3", User2, User2, false, false);
var Task4 = new Task(4, "Task4", User1, User1, true, false);
var Task5 = new Task(5, "Task5", User2, User2, true, false);

var Userlist = {User1, User2};
var Tasklist = {Task1, Task2, Task3, Task4, Task5};
*/

var fs = require('fs');

var datauser= fs.readFileSync('Users.json');

var datatask= fs.readFileSync('Task.json');

var Users = JSON.parse(datauser);

var Tasks = JSON.parse(datatask);

console.log(Users);

console.log(Tasks);




console.log('Server');

var express = require('express');

var DataSetup = express();

DataSetup.listen(3000);



DataSetup.get('/User', user); 

function user(req, res)
{
    res.send(Users);
} 

DataSetup.get('/Tasks', tasklist); 

function tasklist(req, res)
{
    res.send(Tasks);
} 






DataSetup.use(express.static('Data'));

DataSetup.get("/",function (req, res) {
  res.sendFile(__dirname + "/Data/Lab2.html")
});

DataSetup.post('/Login', login);

function login(req, res)
{
    res.sendFile('Lab2.html', { root: path.join(__dirname, '/Data') });
}

