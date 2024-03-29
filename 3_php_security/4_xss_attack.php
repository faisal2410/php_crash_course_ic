<?php

// ✅ XSS Attack

// XSS (Cross-Site Scripting) 

// XSS attack can occur when user input is not properly sanitized before being included in web pages. 

// Attacker injects malicious code (such as JavaScript) into the page, which can then be executed by other users who view the page. 

// To prevent XSS attacks, properly validate and sanitize user input, and to use appropriate output encoding when displaying user-supplied data on web pages.


// <script>alert('hacked!')</script>
// <script>alert(document.cookie)</script>


// ✅ XSS Protection

// 1. Use Prepared Statement
// 2. Sanitization (INPUT)
// strip_tags() - used to sanitize the data you receive from the users
// filter_input() – better than strip_tags
// https://www.php.net/manual/en/function.filter-input.php
// https://www.php.net/manual/en/filter.filters.sanitize.php
// To keep some HTML: http://htmlpurifier.org/

// 3. Sanitization (OUTPUT)
// htmlspecialchars() - used to output data into HTML context
// htmlentities() - used to output data into HTML context
// Difference: 
// htmlentities() encodes all applicable characters, while htmlspecialchars() only encodes a limited set of characters, including &, <, >, ", and '
// htmlentities() supports multiple character sets, while htmlspecialchars() only supports the ISO-8859-1 and UTF-8 character sets

// 4. Do Validation
// https://www.php.net/manual/en/filter.filters.validate.php


// ✅ Code Examples

// 👉 index.php

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

// if(isset($_POST['username'])) {
//     $username = $_POST['username'];
//     $statement = $pdo->prepare("UPDATE admins SET username=? WHERE id=?");
//     $statement->execute([$username,1]);
// }

// $statement = $pdo->prepare("SELECT * FROM admins WHERE id=?");
// $statement->execute([1]);
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);
// foreach ($result as $row) {
//     echo 'Current Username: '.htmlspecialchars($row['username']);
// }
// ?>
<form action="" method="post">
    <input type="text" name="username" autocomplete="off">
    <input type="submit" value="Submit" name="form1">
</form>