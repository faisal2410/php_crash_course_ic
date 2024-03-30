// Question 1:  What is needed to be able to use image functions?

// Explanation
// To use image functions in PHP, you need to have the GD (Graphics Draw) library enabled. The GD library is a popular image manipulation library that provides a set of functions to create, modify, and output images. It supports various image formats and allows you to perform operations like resizing, cropping, adding text, and applying filters to images. The GD library needs to be installed and enabled in your PHP configuration for the image functions to work.

// Question 2:  What is the use of the function 'imagetypes()'?

// Explanation
// The function 'imagetypes()' is used to determine the image formats supported by the current PHP installation. It returns a bitmask representing the supported image types. This function helps in identifying the image formats that can be processed using the GD library. The bitmask can be decoded using predefined constants such as 'IMG_JPEG', 'IMG_PNG', 'IMG_GIF', and more to check if a specific image format is supported. By using 'imagetypes()', you can ensure compatibility and handle different image formats accordingly in your PHP code.