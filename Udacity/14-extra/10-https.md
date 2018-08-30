# Lesson 10: HTTPS

### HTTPS intro
### Securing HTTP
* Encryption and Authentication

### Quiz: MITM quiz 1
* proxy: MITM: man in the middle
  * saving bandwith by adding additional compression
  * downsampling images
  * doing aggressive caching
* what happens to a non-HTTPS site when you load it through the proxy?
  * -> the site's images are flipped upside down
* what happens to a HTTPS site when you load it through the proxy?
  * -> the site is unreachable b/c of invalid certificate
  * invalid certificate: is where the URL for the certificate does not match the URL in browser's address bar

### Quiz: MITM quiz 2
### TLS and cerificate authorities
* HTTPS = HTTP + TLS (SSL)
  * TLS (transport layer security)
  * TLS encryption is designed in a way that the message can't be read by anyone else other than intended recipient
  * it is impossible to break a TLS encryption, you just need to worry about talking to the right server
  * chain-of-trust:
    * a server identify itself with a certificate that contains meta data about itself and encryption key + finger print
    * the certificates are issues by certain authorities (paid or free) (eg: 'lets encrypt')

* TLS can be use with other things too:
  * FTPS = FTP + TLS => to transfer files securely

### TSL: cryptography primer
* encryption key (public) and decryption key (private)

### TSL: hashing
* hashing function can't be reversed
* hash values can't be identical, even if you send the same message twice, the two hashes are different

### Quiz: hashing quiz
### Certificate authority signatures
* server signs the certificate and encrypt it with a key
* documents can gets very large (dvd), hence, just the hash of the document is encrypted
* invalid signature is when the hashes doesn't match

### The TLS handshake
* symmetric encryption vs asymmetric encryption
  * symetric: faster, more efficient, and scales better

### Quiz: SSL error quiz
* https://badssl.com/
  * DENIED ACCESS: expired certificate
  * DENIED ACCESS: certificate for another host
  * Will let you through without green encrypted icon:
    * mixed content
    * incomplete chain
    * using SHA256

### Mixed content
* when a website deliver through https, but has resources from non-TLS secured origin (http)
* self-serving certificate: when the site generate a certificate for itself and acts as authority
  * browser may let you through with a big warning

### Quiz: mixed content quiz
### Outro
