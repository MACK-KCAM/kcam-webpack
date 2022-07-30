// ALL API REQUESTS ARE PROCESSED IN IPATH TO DETERMINE TYPE OF REQUEST
function path(url) {
    const allRoutes = {
        "/users": {
            methods: ["GET", "POST", "PUT", "DELETE"]
        }
    }
    return allRoutes[url];
}

module.exports = path;
