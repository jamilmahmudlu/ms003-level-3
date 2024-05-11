function parseRequestBody (req) {
    let body = ''
    req.on('data', chunk => {
        body += chunk.toString();
    });
    return new Promise((resolve, reject) => {
        req.on('end', () => {
            try {
                const parsedBody = JSON.parse(body);
                resolve(parsedBody);
            }
            catch (error) {
                reject(error);
            }
        });
    });
}

module.exports = parseRequestBody;