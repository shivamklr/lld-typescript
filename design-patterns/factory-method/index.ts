interface ILogger{
    warn(message:string):void
    info(message:string):void
    error(message:string):void
    log(message:string):void
}


interface ILoggerFactory{
    getLoggerInstance(env:string):ILogger
}

class LoggerFactory implements ILoggerFactory{
    getLoggerInstance(env:string): ILogger {
        if(env === 'production'){
            // return production specific instance
            return new ProductionLogger()
        }else{
            // return non-production level instance
            return new DevelopmentLogger()
        }
    }
}

class ProductionLogger implements ILogger{
    warn(_:string){
        // does not work
    }
    info(_:string){
        // does not work
    }
    error(message: string): void {
        console.error(message)
    }
    log(message: string): void {
        console.log(message)
    }
}

class DevelopmentLogger implements ILogger{
    warn(message:string){
        console.warn(message)
    }
    info(message:string){
        console.info(message)
    }
    error(message: string): void {
        console.error(message)
    }
    log(message: string): void {
        console.log(message)
    }
}

function main(){
    const lf = new LoggerFactory()
    
    // Just for the purpose of simplicity we created two different Logger Instances
    // In real world the logic of comparing should be done from Env variable inside getFactoryInstance method.
    const devLogger = lf.getLoggerInstance('development')
    const prodLogger = lf.getLoggerInstance('production')
    
    devLogger.warn('Be Warned')
    prodLogger.warn('You cannot see me')
    devLogger.log('I am a dev, I can log')
    prodLogger.log('I can log too you know.')
}
main()