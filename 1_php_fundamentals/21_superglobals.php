<?php

// ✅ Superglobal
	// These are built-in variables that are always available in all scopes.

//     $GLOBALS
// Built-in variables that are always available in all scopes

// $_REQUEST
// An associative array that by default contains the contents of $_GET, $_POST, and $_COOKIE.

// $_POST
// An associative array of variables passed to the current script via the HTTP POST method.

// $_GET
// An associative array of variables passed to the current script via the URL parameters.

// $_SERVER
// An associative array containing information such as headers, paths, and script locations.

// $_FILES
// An associative array of items uploaded to the current script via the HTTP POST method.

// $_ENV
// An associative array of variables passed to the current script via the environment method.

// $_COOKIE
// An associative array of variables passed to the current script via HTTP Cookies.

// $_SESSION
// An associative array containing session variables available to the current script.

// ✅ Code Examples

// 👉index.php

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

//     <?php
//         // if(isset($_POST['form1'])) {
        //     echo $_REQUEST['name'].'<br>';
        //     echo $_REQUEST['email'];
        // }
        // if(isset($_REQUEST['message'])) {
        //     if($_REQUEST['message'] == 'success') {
        //         echo 'Successful!';
        //     } else {
        //         echo 'Error!';
        //     }
        // }
//     ?>

//     <!-- <form action="result.php" method="post">
//         <div>Name: </div>
//         <div>
//             <input type="text" name="name" autocomplete="off">
//         </div>
//         <div>Email: </div>
//         <div>
//             <input type="text" name="email" autocomplete="off">
//         </div>
//         <div>
//             <input type="submit" value="Submit" name="form1">
//         </div>
//     </form> -->

//     <!-- <a href="index1.php?name=arefin&age=30">Go to index1 page</a> -->

//     <?php
//         if(isset($_POST['form1'])) {
//             // $sum = $_REQUEST['num1']+$_REQUEST['num2'];
//             // echo $sum;
//             for($i=1;$i<=$_REQUEST['line_number'];$i++) {
//                 for($j=1;$j<=$i;$j++) {
//                     echo $j . ' ';
//                 }
//                 echo '<br>';
//             }
//         }
//     ?>

//     <form action="" method="post">
//         <div>Enter Line Number: </div>
//         <div>
//             <input type="text" name="line_number" autocomplete="off">
//         </div>
//         <div>
//             <input type="submit" value="Submit" name="form1">
//         </div>
//     </form>

    
// </body>
// </html>

// 👉 index1.php

// <?php
// echo $_REQUEST['name'];
// echo $_REQUEST['age'];
// ?>



// 👉result.php
// <?php

// echo $_REQUEST['name'];
// echo $_REQUEST['email'];

// if($_REQUEST['name'] == 'Arefin') {
//     header("location: index.php?message=success");
// } else {
//     header("location: index.php?message=error");
// }