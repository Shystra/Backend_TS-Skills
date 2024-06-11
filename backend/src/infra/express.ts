import express, { Application } from 'express';


class ExpressAdapter{
    private app: Application
    constructor(){
        this.app = express()
    }

    public listen(port: number){
        this.app.listen(port, () => {
            console.log(`Server running on port: ${port}`)
        });
    }
}

export { ExpressAdapter }