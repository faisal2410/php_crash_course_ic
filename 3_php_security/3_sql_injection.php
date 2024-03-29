<?php

// ✅ SQL Injection

// SQL injection is a type of security exploit in which an attacker inserts malicious code into a SQL statement, via an input field on a web page, in order to gain unauthorized access to a database.

// ✅ POST SQL Injection

// admin' OR '1=1' #
// admin' OR '1=1
// ' OR 1=1; --
// etc.

// '1=1' is a commonly used expression in SQL injection attacks. It is used to create a condition that is always true.


// <form action="" method="post">
//  <div>
//   <input type="text" name="username" placeholder="Username">
//  </div>
//  <div>
//   <input type="password" name="password" placeholder="Password">
//  </div>
//  <button type="submit" name="form1">Login</button>
// </form>


// Database Connection Code

// if(isset($_POST['form1'])) {
//  $username = $_POST['username'];
//  $password = $_POST['password'];
//  $result = $pdo->query("SELECT * FROM admins WHERE username='$username' AND password='$password'")->fetchAll(PDO::FETCH_ASSOC);
//   if($result) {
//  echo $result[0]['username'].'<br>';
//  echo $result[0]['password'];
//  echo 'Success! You are logged in!';
//  } else {
//   echo 'Error!';
//  }
// }



// ✅ POST SQL Injection Protection

// $username = addslashes($_POST['username']);
// Email Validation if email is used instead of username
// Use Prepared Statement [RECOMMENDED]


// ✅ GET SQL Injection

// index.php?id=1 order by 1
// index.php?id=1 union select 1,2,3
// index.php?id=1 and 0 union select 1,2,3
// index.php?id=1 and 0 union select 1,version(),3
// index.php?id=1 and 0 union select 1,load_file("D://laragon/bin/php/php-8.2.1-nts-Win32-vs16-x64/php.ini"),3

// <?php 
// include("config.php");
// $id = $_GET['id'];
// $sql = "SELECT * FROM posts WHERE id=$id limit 1";
// echo $sql;
// $result = mysqli_query($conn, $sql);
// if(mysqli_num_rows($result) > 0) {
//  while($row = mysqli_fetch_assoc($result)) {
//   echo '<h3>'.$row['title'].'</h3>';
//   echo '<p>'.$row['detail'].'</p>';
//  }
// }


// ✅ GET SQL Injection Protection

// $id = (int)$_GET['id'];
// $sql = "SELECT * FROM posts WHERE id=$id limit 1";

// $id = addslashes($_GET['id']);
// $sql = "SELECT * FROM posts WHERE id='$id' limit 1";



// ✅ Code Examples

// 👉index.php

// <?php
// $dbhost = 'localhost';
// $dbname = 'testdb001';
// $dbuser = 'root';
// $dbpass = '';
// try {
//     $pdo = new PDO("mysql:host={$dbhost};dbname={$dbname}", $dbuser, $dbpass);
//     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// }
// catch( PDOException $exception ) {
//     echo "Connection error :" . $exception->getMessage();
// }

// $id = $_GET['id'];

// $sql = "SELECT * FROM posts WHERE id=? LIMIT 1";
// echo $sql;
// $statement = $pdo->prepare($sql);
// $statement->execute([$id]);
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);
// echo "<pre>";
// print_r($result);
// echo "</pre>";

// ?>

