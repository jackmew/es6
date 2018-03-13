const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('BAD', error));

// fetch shortage
// not the correct behavior you expected．還不如用別的ajax library. ex: jQuery.
// post12345 => 不會進入catch
// typicode12345 => 才會進入catch
