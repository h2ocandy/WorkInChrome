function save_options(){
    var shURL = document.getElementById('shURL').value;
    chrome.storage.sync.set({
        scihubURL:shURL
        }, function(){
        alert("option saved.");
        }
    );
}

function restore_options(){
    chrome.storage.sync.get({
        scihubURL:''
    }, function(items){
        document.getElementById('shURL').value = items.scihubURL;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);