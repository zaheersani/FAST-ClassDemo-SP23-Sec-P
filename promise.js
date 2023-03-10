var p = new Promise((resolve, reject) => {
    var b = false
    if (b)
        resolve('I am resolved on success!')  
    else
        reject('I am NOT resolved! its an error!')
})

p
    .then(r => console.log(r))
    .catch(e => console.log(e))
    .finally(f => console.log('Im done finally!'))