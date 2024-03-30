// Question 1: Is it possible to use COM components in PHP ?
    
// Explanation
// Yes, it is possible to use COM(Component Object Model) components in PHP on Windows systems.PHP provides the COM extension that allows interaction with COM objects.However, it depends on the server configuration and the availability of the COM extension.Learn more: http://php.net/manual/en/book.com.php

// Question 2: Explain whether it is possible to share a single instance of a Memcache between multiple PHP projects.
    
// Explanation
// No, it is not possible to share a single instance of Memcache between multiple PHP projects.Memcache is an in -memory caching system that is specific to each PHP application.Each application needs to have its own instance of Memcache to store and retrieve its own cached data.Learn more: http://php.net/manual/en/book.memcache.php

// Question 3: Explain how you can update Memcached when you make changes to PHP ?
    
// Explanation
// To update Memcached when making changes to PHP, you need to clear the Memcached cache. This ensures that the updated data and changes are reflected in the cache. You can do this by flushing or deleting the relevant keys or by clearing the entire cache. Learn more: http://php.net/manual/en/book.memcached.php