class Api {
  constructor(host) {
    this.host = host;
  }
  getRoute(routeName) {
    console.log(`Sent request to server at ${this.host}/api/${routeName}`);
    return `${this.host}/api/${routeName}`;
  }
}

const apiRoute = Object.freeze(new Api("http://localhost:8080"));

export default apiRoute;
