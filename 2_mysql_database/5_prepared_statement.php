<?php
//✅ Prepared Statement

// How it works
// 1. Prepare an SQL query with empty values as placeholders with either a question mark or a variable name with a colon preceding it for each value
// 2. Bind values or variables to the placeholders
// 3. Execute query simultaneously

// Advantages:
// 1. Improved security against SQL injection attacks.
// 2. Increased performance through caching of query plans.
// 3. Enhanced readability and maintainability of code.
// 4. Support for parameterized inputs.


// ✅ Example

// Named Parameters:
// $stmt = $conn->prepare("INSERT INTO students (firstname, lastname, email, phone) VALUES (:firstname,:lastname,:email,:phone)");
// $stmt->bindParam(':firstname', $firstname);
// $stmt->bindParam(':lastname', $lastname);
// $stmt->bindParam(':email', $email);
// $stmt->bindParam(':phone', $phone);
// $firstname = 'Sabbir';
// $lastname = 'Ahmed';
// $email = 'sabbir@gmail.com';
// $phone = '123456';
// $stmt->execute();

// Unnamed Parameters:
// $statement = $conn->prepare("INSERT INTO students (firstname, lastname, email, phone) VALUES (?,?,?,?)");
// $statement->execute(['First 1',' Last 1','fl1@gmail.com','111']);
