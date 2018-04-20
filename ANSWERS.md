<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
- <mark>Middleware</mark> are functions that act as a layer between components and applications. They are invoked by ```Express``` routing and have access to ```req``` and ```res```.
- <mark>Sessons</mark> are a place to store data that you want access to across requests. Every vistor/user has a ```unique``` session. You can use these sessions to store and access user data as they access your application.
- <mark>Bcrypt</mark> is a library that makes it easier to ```hash``` and ```compare``` passwords like:
<pre>
<code>bcrypt.hash()</code>
<code>bcrypt.compare()</code>
</pre>
- <mark>JWT</mark> (pronounced as JOT) is a ```JSON Web Token``` and is a means of securely transmitting information between parties as a JSON Object. The information carried by the JWT is digitally signed, allowing trust and security in your apps.

2.  What does bcrypt do in order to prevent attacks?
- Bcrypt hashes your passwords, automatically generates a salt, and compares passwords. The iteration count can be increased to make it slower, so it remains resistant to ```brute-force``` attacks.

3.  What are the three parts of the JSON Web Token?
-<mark>Header</mark> , <mark>Payload</mark> , <mark>Signature</mark>
