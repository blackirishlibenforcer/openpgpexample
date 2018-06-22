var openpgp = require('openpgp');
var fs = require('fs');

var alicePublicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v3.0.11
Comment: https://openpgpjs.org

xsBNBFssIKYBCAC2vVybVR4LseOg2KZLL4lFslfSk0DluEOIidzkgA2mG2hs
yVoCg9WNNx7h0E+i1krhxci0i7ypSDl9FEezC5idKukJH2QCtUzv4UzbDs+U
yH9HirDF7LLr8I2bNX0eUl2trFtiWFD2d0EZWFgqNc3SnkkIP27YgqWq0D3b
NKdHxpE7o9tiImyGr6wCFbpeY7FakF6HKMDnQxKEvmNnwaRWWKhVDxCYw3SF
/gOVfSPP5Iiz/vnN7l/VBJcUWp/62i0/XZ2or8nTsxzVvu6gz6esiAgFuPt6
0gqGR75e6rlmojkSEaQamSSi24E6RkeuQXTNVBeMuugY+J/7mHn/BbG7ABEB
AAHNGUFsaWNlIDxhbGljZUBleGFtcGxlLmNvbT7CwHUEEAEIACkFAlssIKYG
CwkHCAMCCRBD3FWBMW/dIgQVCAoCAxYCAQIZAQIbAwIeAQAAdXEIAIV/0Si4
HWaqQPS8Of7OlSajWKsRGx4MlePaEjo91ktEi3dMm3PnrMbvpxs8j0r2Sx8P
LSm30zG6o8pga8oHrwgbJjGdu9dPnpoTh/YrmrGRlhrMDxg2kfTNX1MpSnS1
ksyEkUAvjbhLRf4U/4izw4fCFHM/HsX/+oymX+ElKoeDQfmUfk5ClBvo6jEg
v4P2802SAXKqJcfID1Ld77JcAd6VgCe+h4NKFoqdQjiXLceRuSL24+7EDFHB
CR3/b5nGCKf2BllwQJEPUt2HhBMIKwkljFpJmC816QFlG2BmuKgZxdRyCyGr
s9bifb/6BCS5SmGkr7D80owdG/JV5pC69t/OwE0EWywgpgEIANMhNNvn++lF
jZZo+7LqQ/68tnIPOZYMHTK1nS8jypTVTPMHJIvqFapUpKqFLC9b0MZGiKat
30gQfrRdT8gWoQd3thrO6ka6dR7i4H9zwpWisVrRhAiSzN/xUIbI2Vc9lcI5
o4ux5q4Wnlucp0cXLpaxtK19FyrIWnL5xu2nC7ujSKUr3GCKsopQ8zqp2FRX
2jPpWjx0E4TtIDk6hM6WB3lZdY7USmk+3i/awWgWNwJ/ItgmIny6UlKLwCSo
smoFQ9iYcPLBcn/7T6qUSjRRVeCSnfhyj/sSUOvwpCsY9eI9ZeokzX5xhICk
723+a2qbeXw3fB8NqAe41Q4Y1uAjU4EAEQEAAcLAXwQYAQgAEwUCWywgpgkQ
Q9xVgTFv3SICGwwAAFeDCACX+LQCUMHtfMpFdx1uqhbl+hE6jqld9V0pnx+b
XUsi95jIydCl7n0VU1Yf7O/AvtyhnD6gln5V+EgE2WHxKCJVBZFTycJ5eRM0
4oCKicFe9C18ne+2CrMfoPjA6ENUfqC05+Dp78N+MRXRKZClphrKnVoS3FBu
mkVeseWbEJo4e3+dIXHO4RjPx+A2JXBUdjIyEriTc4MD8nupb+8JaT5RRKRp
khr20bMhJ1xBLyiYb1IeKco/FqJlI+/fH5YSURmGog/egdihCYHZDsnckc2Z
GlLYyJ1a6blKj0Snqu/t3lenhIMqWwEoO2SqhaWtqceeUtziIQ7oUTnogHPy
ttJ+
=fN17
-----END PGP PUBLIC KEY BLOCK-----

`;

var options = {
    data: 'Todd Bridges is from Different Strokes',
    publicKeys: openpgp.key.readArmored(alicePublicKey).keys
}

openpgp.encrypt(options).then(encryptedData => {
    console.log(encryptedData.data);
    fs.writeFile('encryptedmessage.txt', encryptedData.data, function(err){
        if (err) throw err;
    });
});