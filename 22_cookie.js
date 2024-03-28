// ✅ Cookie


// A cookie is a small text file that a website stores on a user's device when they visit the site.
// Cookies are used to remember user preferences, login information, and browsing history, and to track user behavior on the website. They can also be used for targeted advertising.


//✅ Example;

// Example 1:If a user visits an online shopping website and adds items to their shopping cart, the website will create a cookie to remember the items in the user's cart, even if the user closes their browser or leaves the website. When the user returns to the website later, the cookie will be read and their shopping cart will be restored with the items they previously added.
// Example 2:In case of a login, cookies are used to remember the user's session and keep them logged in, even if they close the browser.

// ✅ Creating Cookie

// setcookie('username', 'arefin', time() + (86400 * 30), "/");
// The "/" means that the cookie is available in entire website (otherwise, select the directory you prefer).
// 86400 = 1 day = 60*60*24


// ✅Reset or Delete Cookie

// setcookie("username", "", time() - 1);

// ✅Reference;

// https://www.php.net/manual/en/reserved.variables.cookies.php

// https://www.php.net/manual/en/function.setcookie.php


// ✅ Code Examples

// 👉index.php

// <?php
// if(isset($_POST['form1'])) {

//     if($_REQUEST['username']=='arefin' && $_REQUEST['password']=='1234') {
        
//         setcookie('un', $_REQUEST['username'], time() + (86400));
//         setcookie('pw', $_REQUEST['password'], time() + (86400));
//         setcookie('chk', $_REQUEST['chk'], time() + (86400));
//         header('location: welcome.php');

//     } else {
//         header('location: index.php');
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
//                 <td>Username:</td>
//                 <td><input type="text" name="username"></td>
//             </tr>
//             <tr>
//                 <td>Password:</td>
//                 <td><input type="password" name="password"></td>
//             </tr>
//             <tr>
//                 <td>Remember?</td>
//                 <td>
//                     <input type="hidden" name="chk" value="0">
//                     <input type="checkbox" name="chk" value="1" <?php
//                     if(isset($_COOKIE['chk'])) {
//                         if($_COOKIE['chk']==1) {
//                             echo 'checked';
//                     }
//                 }
//                     ?>>
//                 </td>
//             </tr>
//             <tr>
//                 <td></td>
//                 <td><input type="submit" value="Login" name="form1"></td>
//             </tr>
//         </table>
//     </form>
    
// </body>
// </html>

// 👉index1.php

// <?php
//echo 'Test';
//setcookie('fullname', 'Morshedul Arefin');
// setcookie('fullname', 'Morshedul Arefin', time() + (86400));
// setcookie('username', 'Arefin', time() + (86400*10));

// setcookie('fullname', '', time()-1);
// setcookie('username', '', time()-1);
// echo $_COOKIE['fullname'];

// if(isset($_POST['form1'])) {
//     setcookie('pr', $_REQUEST['person'], time() + (86400));
//     header('location: index.php');
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
    
//     <?php if(!isset($_COOKIE['pr'])): ?>
//     <form action="" method="post">
//         <table>
//             <tr>
//                 <td>Select Person to vote:</td>
//                 <td>
//                     <select name="person">
//                         <option value="Arefin">Arefin</option>
//                         <option value="Peter">Peter</option>
//                         <option value="Smith">Smith</option>
//                     </select>
//                 </td>
//             </tr>
//             <tr>
//                 <td></td>
//                 <td><input type="submit" value="Submit" name="form1"></td>
//             </tr>
//         </table>
//     </form>
//     <?php else: ?>
//         You already have given vote to <?php echo $_COOKIE['pr']; ?>. Please come here after 24 hours.
//     <?php endif; ?>

// </body>
// </html>


// 👉logout.php

// <?php
// setcookie('un', '', time()-1);
// setcookie('pw', '', time()-1);
// header('location: index.php');
// ?>


// 👉welcome.php

// <?php
// if(!isset($_COOKIE['un']) || !isset($_COOKIE['pw'])) {
//     header('location: index.php');
// } else {
//     if($_COOKIE['un'] == 'arefin' && $_COOKIE['pw']== '1234') {
//         ?>
//         <h2>Welcome to dashboard</h2>
//         <p>
//             <a href="logout.php">Logout</a>
//         </p>
//         <?php
//     } else {
//         header('location: index.php');
//     }
// }
