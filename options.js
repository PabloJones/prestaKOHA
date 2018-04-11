function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        unico: document.querySelector('#unico').value,
        horas: document.querySelector('#horas').value
    });
}

function restoreOptions() {
    var keys = ['unico', 'horas'];
    browser.storage.local.get(keys).then(function(result) {
        for (var key in result) {
            document.querySelector('#' + key).value = result[key];
        }
    });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);