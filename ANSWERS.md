# Questions

**1. Mention two parts of Express that you learned about this week.**
There are several different things, but one of the biggest ones to me is that there is a difference between node and express. Also, you have to remember that in order to use put, you have to use `server.use(express.json())`.

**2. Describe Middleware?**
Middleware is custom code that we can run before certain route handlers that perform custom actions such as morgan allowing us to customize the readings that we see in the console depending on the actions of our routes.

**3. Describe a Resource?**
A resource is any data that we perform any of the CRUD operations on.

**4. What can the API return to help clients know if a request was successful?**
Status codes will let us know what happened with our request as well as the message we provide it.

**5. How can we partition our application into sub-applications?**
We can use the Router middleware to break our application up. It's like how we broke up our React apps into smaller components.
