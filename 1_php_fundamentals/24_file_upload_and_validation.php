<?php

//✅ Important Codes


// $path = $_FILES["my_file"]["name"];
// $path_tmp = $_FILES["my_file"]["tmp_name"];
// explode();
// $size = $_FILES["my_file"]["size"] / 1024;
// $data = getimagesize($path_tmp);

// $finfo = finfo_open(FILEINFO_MIME_TYPE);
// $mime = finfo_file($finfo, $_FILES["my_file"]["tmp_name"]);

// copy($path_tmp, "uploads/".$path);
// move_uploaded_file($path_tmp, "uploads/".$path);

// finfo_close($finfo);


// ✅Practical Example

// $file_name = time().'.jpg';
// $file_name_small = time().'-small.jpg';
// copy($path_tmp, 'uploads/'.$file_name);
// $destination = 'uploads/'.$file_name_small;
// image_handler($path_tmp,$destination,300,200,100);


//✅ File Remove

// unlink("uploads/file_name.jpg");

// ✅Code Examples

// 👉index.php

// <?php
// include "function.php";

// unlink('uploads/1674955499-small.jpg');

// if(isset($_POST['form1'])) {
//     $path = $_FILES['my_file']['name'];
//     $path_tmp = $_FILES['my_file']['tmp_name'];

//     $size = $_FILES['my_file']['size']/1024/1024;
//     $data = getimagesize($path_tmp);
//     $width = $data[0];
//     $height = $data[1];
//     $new_width = ceil($width/4);
//     $new_height = ceil($height/4);
    // echo "<pre>";
    // print_r($data);
    // echo "</pre>";    
    
    // $arr = explode('.',$path);
    // $filename = "arefin.".$arr[1];

    // if($arr[1] =="jpg" || $arr[1] =="png" || $arr[1] =="gif" || $arr[1] =="pdf") {
    //     move_uploaded_file($path_tmp, 'uploads/'.$filename);
    // } else {
    //     echo 'Invalid Format';
    // }

//     $extension = pathinfo($path, PATHINFO_EXTENSION);
//     $filename = time().".".$extension;

//     $finfo = finfo_open(FILEINFO_MIME_TYPE);
//     $mime = finfo_file($finfo, $path_tmp);
//     if($mime == 'image/jpeg' || $mime == 'image/png' || $mime == 'application/pdf') {
//         if($size<=10) {
            
//             copy($path_tmp, 'uploads/'.$filename);

//             move_uploaded_file($path_tmp, 'uploads1/'.$filename);

//             $filename_small = time()."-small.".$extension;
//             $destination = 'uploads/'.$filename_small;
//             image_resize($path_tmp,$destination,$new_width,$new_height);


//         } else {
//             echo 'File size must be within 10 MB';    
//         }
//     } else {
//         echo 'Invalid Format';
//     }
    
//     finfo_close($finfo);
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

//     <form action="" method="post" enctype="multipart/form-data">
//         <table>
//             <tr>
//                 <td>Select a File:</td>
//                 <td><input type="file" name="my_file"></td>
//             </tr>
//             <tr>
//                 <td></td>
//                 <td><input type="submit" value="Submit" name="form1"></td>
//             </tr>
//         </table>
//     </form>
    
// </body>
// </html>


// 👉function.php

// <?php
// function image_resize($source,$destination,$new_width=100,$new_height=100) {
//     list($width,$height) = getimagesize($source);
//     $newimage = imagecreatetruecolor($new_width,$new_height);
//     $finfo = finfo_open(FILEINFO_MIME_TYPE);
//     $mime = finfo_file($finfo, $source);
//     if($mime == 'image/jpeg') {
//         $src = imagecreatefromjpeg($source);
//         imagecopyresized($newimage,$src,0,0,0,0,$new_width,$new_height,$width,$height);
//         imagejpeg($newimage,$destination);
//     } elseif($mime == 'image/png') {
//         $src = imagecreatefrompng($source);
//         imagecopyresized($newimage,$src,0,0,0,0,$new_width,$new_height,$width,$height);
//         imagepng($newimage,$destination);
//     } elseif($mime == 'image/gif') {
//         $src = imagecreatefromgif($source);
//         imagecopyresized($newimage,$src,0,0,0,0,$new_width,$new_height,$width,$height);
//         imagegif($newimage,$destination);
//     }
// }


// 👉uploads folder