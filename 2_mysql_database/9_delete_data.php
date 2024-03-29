<?php
// ✅Delete Particular Data

// DELETE FROM table_name
// WHERE some_column = some_value

// Example:
// $statement = $conn->prepare("DELETE FROM students WHERE city=?");
// $statement->execute(['Khulna']);


//✅ Delete All Data

// TRUNCATE TABLE table_name;
// Or
// DELETE FROM table_name;

// TRUNCATE is faster than DELETE because it removes the data by deallocating the data pages instead of deleting the rows one by one.
// BE CAREFUL: If you use TRUNCATE, you can not undo it.


//✅ Delete Table

// DROP TABLE table_name;

// ✅ Code Examples

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

// $q = $pdo->prepare("DROP TABLE teachers");
// $q->execute();


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
