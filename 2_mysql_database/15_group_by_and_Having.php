<?php

// ✅ GROUP BY Clause

// It is used to group rows with the same values into summary rows.
// It is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more columns
// Usage:
// SELECT column1, SUM(column2), AVG(column3), ... 
// FROM table_name 
// GROUP BY column1;

// Example

// $statement = $conn->prepare("SELECT name, SUM(salary) AS 'Total Paid' FROM employees GROUP BY name");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);

// Go to Group_by image



// ✅ HAVING Clause

// It is used to filter group results that were aggregated using the "GROUP BY" clause. 
// It allows you to specify conditions for the groups, rather than for individual rows. 
// Usage:
//     SELECT column1, SUM(column2) 
// FROM table_name 
// GROUP BY column1 
// HAVING SUM(column2) > 100;

// Example

// $stateme$statement = $conn->prepare("SELECT name, SUM(salary) AS 'Total Paid' FROM employees GROUP BY name HAVING SUM(salary) > 2500");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);

// Go to example_having_clause image


//✅ GROUP BY with JOIN

// GROUP BY can be used in combination with the "JOIN" clause to aggregate data from multiple tables. 
// Usage:
// SELECT t1.column1, SUM(t2.column2)
// 	FROM table1 t1
// 	JOIN table2 t2
// 	ON t1.id = t2.id
// 	GROUP BY t1.column1;

// Example

// $statement = $conn->prepare("SELECT e.name, SUM(e.salary) AS 'Total Paid', 
//  d.department_name
//  FROM employees e
//  INNER JOIN departments d 
//  ON e.department_id = d.id
//  GROUP BY e.name, d.department_name HAVING SUM(e.salary) > 2500");
// $statement->execute();
// $result = $statement->fetchAll(PDO::FETCH_ASSOC);

// Go to Group_by_with_join image




