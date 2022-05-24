//https://blog.logrocket.com/localstorage-javascript-complete-guide/

document.getElementById('add-single-item-to-ls').addEventListener('click', function() {
    window.localStorage.setItem('name', 'Karl');
    updateUI()
})

document.getElementById('add-another-item-to-ls').addEventListener('click', function() {
    window.localStorage.setItem('users', 
        JSON.stringify({name: 'Karl Maswen', food: 'Pizza'})
    );
    updateUI()
})
document.getElementById('get-single-item-from-ls').addEventListener('click', function() {
    const user = JSON.parse(localStorage.getItem('users'));
    document.getElementById('ls-currently').textContent = user.name;
})

document.getElementById('remove-single-item-to-ls').addEventListener('click', function() {
    window.localStorage.removeItem('name');
    updateUI()
})

document.getElementById('remove-all-from-ls').addEventListener('click', function() {
    window.localStorage.clear();
    updateUI()
})

function updateUI() {
    var values = [], keys = Object.keys(localStorage), i = keys.length;
    while(i--) { values.push(localStorage.getItem(keys[i]) ); }
    document.getElementById('ls-currently').textContent = values;
}

if(typeof(Storage) === 'undefined'){

} else {

}
