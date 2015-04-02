/**
 * Created by andrew on 02/04/15.
 */
function addClass( classname, element ) {
    var cn = element.className;
    //test for existance
    if( cn.indexOf( classname ) != -1 ) {
        return;
    }
    //add a space if the element already has class
    if( cn != '' ) {
        classname = ' '+classname;
    }
    element.className = cn+classname;
}

function removeClass( classname, element ) {
    var cn = element.className;
    var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
    cn = cn.replace( rxp, '' );
    element.className = cn;
}

function hasClass(classname, element){
    return element.className.indexOf( classname ) != -1;
}


function doesArrayContain(array, element) {
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}
