const url = require('url');

const myUrl = new URL('https://mywebsite.com:8080/hello.html?id=100&status=active');

//Serialiuzed url
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//host name (does not get port)
console.log(myUrl.hostname);
//path name
console.log(myUrl.pathname)

//Serialized query
console.log(myUrl.search);

//Prams object
console.log(myUrl.searchParams);

//Add pram
console.log(myUrl.searchParams.append('abc', '123'));
console.log(myUrl.searchParams);

//loop throug prams
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));




