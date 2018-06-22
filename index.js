var openpgp = require('openpgp');
var fs = require('fs');

var options = {
    userIds: [{ name: 'Alice', email: 'alice@example.com' }],
    numBits: 2048,
    passphrase: 'secret'
};

var pubKey, privKey;

openpgp.generateKey(options).then(key => {
    privKey = key.privateKeyArmored;
    pubKey = key.publicKeyArmored;
    console.log('Key generated');
    fs.writeFile('priv.txt', privKey, function(err){
        if (err) throw err;
    });
    fs.writeFile('pub.txt', pubKey, function(err){
        if (err) throw err;
    });
});