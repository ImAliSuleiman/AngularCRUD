<?php

// Class Db {

//     private $host = 'localhost';
//     private $port = '';
//     private $user = 'root';
//     private $password = '';
//     private $dbname = 'slimdemo';

//     public function connection(){
//         $connectionString = "mysql:host=$this->host;dbname=$this->dbname";
//         $dbConnection = new PDO($connectionString, $this->user, $this->password);
//         $dbConnection -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//         return $dbConnection;
//     }
// }

 class Db{
     private $dbhost = 'localhost';
     private $dbuser = 'root';
     private $dbpass = '';
     private $dbname = 'slimdemo';

     //connection

     public function connect(){
         $mysql_connect_str = "mysql:host=$this->dbhost;dbname=$this->dbname";
         $dbConnection= new PDO($mysql_connect_str, $this->dbuser, $this->dbpass);
         $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
         return $dbConnection;
     }
 }