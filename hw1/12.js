async function sleep(millis) {
    let myPromise = new Promise(function(resolve) {
        setTimeout(function() {resolve(millis);}, millis);
    });
    return await myPromise;
}