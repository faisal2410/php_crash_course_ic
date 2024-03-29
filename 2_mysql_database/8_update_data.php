<?php

//✅ Update Data

// UPDATE table_name
// SET column1=value, column2=value2,...
// WHERE some_column=some_value 

// Example:
// $statement = $conn->prepare("UPDATE students SET city=? WHERE id=?");
// $statement->execute(['Jessore',7]);

//✅ Code Examples

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

// $q = $pdo->prepare("UPDATE students SET email=?,phone=? WHERE id=?");
// $q->execute(['sabbir001@gmail.com','123-444-3333',6]);


//$result = $q->fetchAll(PDO::FETCH_ASSOC);

// echo '<table>';
// echo '<tr><th>Id</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Phone</th></tr>';
// foreach($result as $row) {
//     echo '<tr>';
//     echo '<td>'.$row['id'].'</td>';
//     echo '<td>'.$row['firstname'].'</td>';
//     echo '<td>'.$row['lastname'].'</td>';
//     echo '<td>'.$row['email'].'</td>';
//     echo '<td>'.$row['phone'].'</td>';
//     echo '</tr>';
// }
// echo '</table>';

// echo "<pre>";
// print_r($result);
// echo "</pre>";