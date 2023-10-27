"use strict"

function heading(str) {
    let heading1 = '<h1>';
    heading1 += str + '</h>';
    return heading1
}

console.log(heading('Title'))

function unordered(list1, list2, list3) {
    let unorderedList = '<ul>' + '\n';
    unorderedList += '    <li>' + list1 + '</li>' + '\n' + '    <li>' + list2 + '</li>' + '\n' + '    <li>' + list3 + '</li>' + '\n'
    return unorderedList + '</ul>'
}

console.log(unordered('honda', 'nissan', 'toyota'))