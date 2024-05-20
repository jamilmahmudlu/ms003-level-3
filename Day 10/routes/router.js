class Router {
    constructor(){
        this.routes = {}
    }
    //   /categories  method   /categories/detail/5
    addRoute(path,handler,isExtractId=false){
        this.routes[path] = {handler, isExtractId}
    }

    handleRoute(req,res) {
        // /categories/10


        //sghajhsjha/kahahkdj
        const {url} = req;
        let splittedUrl = url;
        if(this.isParameterPath(url)) {
            splittedUrl = this.getBasePath(url)
        }

        const route = this.routes[splittedUrl]  // categories/5     ||  sahsa/ahjsjagsgaj

        if(!route) 
            return false;

        const {handler,isExtractId} = route
        const id = isExtractId ? this.extractUrl(url) : null;

        handler(req,res,id);
        return true
    }

    isParameterPath(url) {
        const lastPartOfUrl = url.split('/').pop()
        return !isNaN(+lastPartOfUrl)  // categories/1
    }

    getBasePath(url) {
        const splittedUrl = url.split('/')
        splittedUrl.pop()
        return `${splittedUrl.join('/')}/`
        // categories/detail/
    }
    extractUrl(url) {
        return +(url.split('/').pop())
        // /5
    }

}

module.exports = Router