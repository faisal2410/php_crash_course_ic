<?php

// ✅ Session
// A session is a way to store information (in variables) to be used across multiple pages.
// Session variables last until the user closes the browser.
// Session variables hold information about one single user, and are available to all pages in one application.
// NB: For permanent storage, use database, not session

// ✅ Start Session


// ob_start()
// It is necessary to call it before session start, because it ensures that headers can be sent correctly even if there is output generated before the session is started.
//
// session_start()
// You can start session using this function and it must be very first thing in your document before HTML tags.
//
// $_SESSION
// You can set session variables using this
//
// print_r($_SESSION)
// Show all the session variable values

// ✅Modify Session Variable

// Just overwrite it
// $_SESSION['country'] = 'USA';


// ✅Destroy Session Variable

// Remove all session variables:session_unset();

// Destroy the session:session_destroy();

// It's important to note that it's good practice to use session_unset() and session_destroy() together, as the session_unset() will clear the superglobal variables while session_destroy() will end the session and delete the session file on the server.


// ✅ Code Examples

// 👉index.php

// <?php
// ob_start();
// session_start();

//$_SESSION['country'] = "Bangladesh";
//$_SESSION['city'] = "Dhaka";

// session_unset();
// session_destroy();

// echo "<pre>";
// print_r($_SESSION);
// echo "</pre>";

// if(isset($_POST['form1'])) {
//     try {
//         if($_POST['username']!='admin') {
//             throw new exception("Username does not match");
//         }
//         if($_POST['password']!='1234') {
//             throw new exception("password does not match");
//         }

//         $_SESSION['username'] = "admin";
//         $_SESSION['password'] = "1234";

//         print_r($_SESSION);

//         header("location: welcome.php");

//     } catch(Exception $e) {
//         echo $e->getMessage();
//     }
// }
// ?>

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

//     <form action="" method="post">
//         <table>
//             <tr>
//                 <td>Username: </td>
//                 <td><input type="text" name="username"></td>
//             </tr>
//             <tr>
//                 <td>Password: </td>
//                 <td><input type="password" name="password"></td>
//             </tr>
//             <tr>
//                 <td></td>
//                 <td><input type="submit" value="Login" name="form1"></td>
//             </tr>
//         </table>
//     </form>
    
// </body>
// </html>



// 👉logout.php

// <?php
// ob_start();
// session_start();

// session_unset();
// session_destroy();

// header('location: index.php');
// ?>


// 👉 welcome.php

// <?php
// ob_start();
// session_start();

// if( !isset($_SESSION['username']) || !isset($_SESSION['password'])) {
//     header('location: index.php');
// } else {
//     if($_SESSION['username'] == 'admin' && $_SESSION['password'] == '1234') {
//         ?>
//         <h2>Welcome to our website</h2>
//         <p><a href="logout.php">Logout</a></p>
//         <?php
//     } else {
//         header('location: index.php');
//     }
// }
// ?>