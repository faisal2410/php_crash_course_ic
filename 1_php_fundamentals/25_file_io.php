// ✅Directory Structure View

// $dir_content = scandir("/laragon/www/php_practice");
// echo "<pre>";
// print_r($dir_content);
// echo "</pre>";
// ?>


// ✅Read File

// Function needs: fopen

// File Modes:
// 'r' Open a file for read only. File pointer starts at the beginning of the file
// 'r+' Open a file for read/write. File pointer starts at the beginning of the file
// 'w' Open a file for write only. Erases the contents of the file or creates a new file if it doesn't exist. File pointer starts at the beginning of the file
// 'w+' Open a file for read/write. Erases the contents of the file or creates a new file if it doesn't exist. File pointer starts at the beginning of the file
// 'a' Open a file for write only. The existing data in file is preserved. Creates a new file if the file doesn't exist. File pointer starts at the end of the file
// 'a+' Open a file for read/write. The existing data in file is preserved. Creates a new file if the file doesn't exist. File pointer starts at the end of the file

// Way 1:
// if($fh = fopen('a.txt','r')) {
//  while(!feof($fh)) {
//  $line = fgets($fh);
//  echo $line.'<br>';
//  }
//  fclose($fh);
// }


// Way 2:
// $file = file_get_contents('a.txt');
// echo nl2br($file);


// Way 3:
// $file_lines = file('a.txt');
// foreach($file_lines as $line) {
//  echo $line.'<br>';
// }


//✅ Create or Write File

// $filename = 'b.txt';
// $file = fopen($filename,'w');
// if($file == false) {
//  echo 'Error in opening file';
//  exit();
// }
// fwrite($file, "USA\nAustralia");
// fclose($file);


// ✅Append to File

// $filename = 'b.txt';
// $file = fopen($filename,'a');
// if($file == false) {
//  echo 'Error in opening file';
//  exit();
// }
// fwrite($file, "\nCanada\nEngland");
// fclose($file);


// ✅ Code Examples

// 👉index.php

// <?php
// $dir_content = scandir("/laragon");
// echo "<pre>";
// print_r($dir_content);
// echo "</pre>";

// if($fh = fopen('city.txt','r')) {
//     while(!feof($fh)) {
//         $line = fgets($fh);
//         echo $line.'<br>';
//     }
//     fclose($fh);
// }

// $file = file_get_contents('city.txt');
// echo nl2br($file);

// $file_lines = file('city.txt');
// foreach($file_lines as $line) {
//     echo $line.'<br>';
// }

// $filename = 'country.txt';
// $file = fopen($filename,'w');
// if($file == false) {
//     echo 'Error in opening file';
//     exit();
// }
// fwrite($file, "USA\nAustralia\nBangladesh");
// fclose($file);

// $filename = 'country.txt';
// $file = fopen($filename,'a');
// if($file == false) {
//     echo 'Error in opening file';
//     exit();
// }
// fwrite($file, "\nBangladesh\nUSA");
// fclose($file);


// 👉country.txt

// Canada;
// England;
// Bangladesh;
// USA;


