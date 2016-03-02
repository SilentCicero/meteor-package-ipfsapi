// Browser environment
if(typeof window !== 'undefined') {
    ipfsAPI = (typeof window.ipfsAPI !== 'undefined') ? window.ipfsAPI : require('ipfs-api');
}

// Node environment
if(typeof global !== 'undefined') {
    ipfsAPI = (typeof global.ipfsAPI !== 'undefined') ? global.ipfsAPI : require('ipfs-api');
}
