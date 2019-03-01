var sentence = 'Hai kamu dasar cebong dan juga sama saja dasar kau kampret',
    common = 'cebong, kampret';

function getUncommon(sentence, common) {
    var wordArr = sentence.match(/\w+/g),
        commonObj = {},
        uncommonArr = [],
        word, i;
    
    common = common.split(',');
    for ( i = 0; i < common.length; i++ ) {
        commonObj[ common[i].trim() ] = true;
    }
    
    for ( i = 0; i < wordArr.length; i++ ) {
        word = wordArr[i].trim().toLowerCase();
        if ( !commonObj[word] ) {
            uncommonArr.push(word);
        }
    }
    var cek = uncommonArr.join();
    console.log(cek);
    
    return uncommonArr;
}

// document.write( getUncommon(sentence, common) );
getUncommon(sentence, common);