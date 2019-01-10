// const promise = new Promise((resolve, reject) => {
//     if(true) {
//     resolve('Stuff Workded');
//     } else {
//     reject('Error, it broken'); }
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'HIII')
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'POOKIE')
// })

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'Is it me you are looking for?')
// })

// Promise.all([promise, promise2, promise3, promise4])
//    .then(values => {
//        console.log(values);
//    })

// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
})
async function fetchUsers() {
        const resp =await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await resp.json();
        console.log(data);
}

const getData = async function() {
    const [users, posts, albums] = await Promise.all(urls.map(url => 
        fetch(url).then(resp => resp.json())
    ))
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
}