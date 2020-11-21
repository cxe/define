exports.importing = (sourceFile, callbackOrSource) => {
    const source = typeof callbackOrSource === 'string' ? callbackOrSource : `(${String(callbackOrSource)})()`;
    eval(`${require('fs').readFileSync(sourceFile)};${source}`);
};
