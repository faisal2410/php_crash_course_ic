// Question 1:  What are the different types of encryption algorithms available in PHP? Explain their differences and use cases.

// Explanation

// PHP offers a range of encryption algorithms, including AES, Blowfish, and RSA. AES is a symmetric algorithm suitable for encrypting sensitive data. Blowfish is also a symmetric algorithm known for its flexibility and high security. RSA is an asymmetric algorithm used for secure communication and key exchange. The choice of encryption algorithm depends on factors such as security requirements, performance, and compatibility with other systems. It is important to select an algorithm that meets the specific needs of your application. For more information, you can refer to the PHP documentation: http://php.net/manual/en/function.openssl-encrypt.php, http://php.net/manual/en/function.mcrypt-encrypt.php, http://php.net/manual/en/function.sodium-crypto-secretbox.php