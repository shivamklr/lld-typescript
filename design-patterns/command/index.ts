class FileReceiver{
    private name:string
    constructor(name: string){
        this.name = name
    }
    open(){
        return `${this.name} file opened`
    }
    close(){
        return `${this.name} file closed`
    }
    edit(){
        return `${this.name} file edited`
    }
}
interface Command{
    execute():void
}

class OpenCommand implements Command{
    private file:FileReceiver
    constructor(f:FileReceiver){
        this.file = f
    }
    execute(): void {
        console.log(this.file.open())
    }
}
class CloseCommand implements Command{
    private file:FileReceiver
    constructor(f:FileReceiver){
        this.file = f
    }
    execute(): void {
        console.log(this.file.close())
    }
}
class EditCommand implements Command{
    private file:FileReceiver
    constructor(f:FileReceiver){
        this.file = f
    }
    execute(): void {
        console.log(this.file.edit())
    }
}

class Invoker{
    private list = new Array<Command>()
    
    onExecuteCommand(command: Command){
        this.list.push(command)
        return command.execute();
    }
    getCommandList() : Command[]{
        return this.list
    }
}

function main(){
    const f = new FileReceiver('abc.txt')
    
    const openCommand = new OpenCommand(f)
    const closeCommand = new CloseCommand(f)
    const editCommand = new EditCommand(f)

    const invoker = new Invoker()
    invoker.onExecuteCommand(openCommand);
    invoker.onExecuteCommand(editCommand);
    invoker.onExecuteCommand(closeCommand);
    console.log(invoker.getCommandList())
}
main()