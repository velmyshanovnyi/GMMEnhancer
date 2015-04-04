//Notification counter
var notID = 0;
//Restore settings from chrome.storage
function restore_ops(id) {
    chrome.storage.local.get(id, function (data) {
        if (data[id] === true) {
            $('#' + id + ' label input').prop('checked', true);
        } else {
            $('#' + id + ' label input').prop('checked', false);
        }
    });
}

function save(id) { //Settings saving
    var idValue = $('#' + id + ' label input').prop('checked');
    var temp = {};
    temp[id] = idValue;
    chrome.storage.local.set(temp, function () {
        chrome.storage.local.get(id, function (data) {
            console.log(data);
        })
    });
}

$(document).ready(function () {
    restore_ops('contestSender');
    restore_ops('deleteZoom');
    restore_ops('deleteMarks');
    restore_ops('deleteOverlays');
    restore_ops('deleteAddinf');
    restore_ops('floors');
    restore_ops('helpmenu');
    restore_ops('noduildingdups');
    restore_ops('noShift');
    restore_ops('noDups');
    restore_ops('onlyContest');
    restore_ops('replytemplates');
    restore_ops('shortlinks');
    restore_ops('votekey');
    $('label input').click(function () {
        var tempID = $(this).parent().parent().attr('id');
        save(tempID);
        chrome.notifications.create('id' + (++notID), options, creationCallback);
    });
});
var options = {
    type: 'basic',
    title: chrome.i18n.getMessage('options_saved'),
    message: '',
    iconUrl: chrome.runtime.getURL('icons/icon96.png')
};
function creationCallback(notID) {
    console.log('Succesfully created ' + notID + ' notification');
}
$(document).ready(function () {
    $('h1').eq(0).text(chrome.i18n.getMessage('options_h1'));
    $('h1').eq(1).text(chrome.i18n.getMessage('options_h1_functions'));
    $('#interfaceDelete span').text(chrome.i18n.getMessage('rz_code_src_deleteText'));
    $('#functions span').text(chrome.i18n.getMessage('options_toggle_off'));
});

$(document).ready(function () {
    $('label').mouseenter(function () {
        $(this).parent().attr('style', 'background: #D5E5FF; border-radius: 3px;')
    });
    $('label').mouseleave(function () {
        $(this).parent().attr('style', 'background: transparent;')  // OLD-style = 'background: #fff;' (delete v.1.5.6.1)
    });
});