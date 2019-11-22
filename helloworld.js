console.log("Starting Up");
var mysql = require('mysql');

var connection = mysql.createConnection ({
host: "database-1.cz6adwahfuph.us-east-1.rds.amazonaws.com",
user: "admin",
password: "Octoberoctober2019",
database: "sabyadatabase"
});
connection.connect(function(err) {
   if(err){
       console.log(err.code);
       console.log(err.fatal);
   }
});

$query = "insert into test values ('10','Hello')";
connection.query($query, function(err, result) {
   if(err){
     console.log("Error Occured while querying");
     return;
   }
console.log ("Inserted");
});
connection.end(function(){
});

