//Create factory for light theme and dark theme

interface Button{
    size:string
    textColor:string
    paint():string
}

interface CheckBox{
    size: string
    paint():string
}

class DarkButton implements Button{
    size = '20px';
    textColor = 'white';

    constructor(size:string){
        if(size != undefined){
            this.size = size
        }
    }
    paint(){
        return `Dark Button Painted with ${this.size} size and ${this.textColor} text color`
    }
}

class LightButton implements Button{
    size='20px'
    textColor = 'black'

    constructor(size:string){
        if(size != undefined){
            this.size = size
        }
    }
    paint():string{
        return `Light Button Painted with ${this.size} size and ${this.textColor} text color`
    }
}

class DarkCheckbox implements CheckBox{
    size = '15px'
    paint(){
        return `Dark Checkbox Painted with ${this.size} size`
    }
}

class LightCheckbox implements CheckBox{
    size = '15px'
    paint(){
        return `Light Checkbox Painted with ${this.size} size`
    }
}

interface ThemeFactory{
    createButton():Button
    createCheckbox():CheckBox
}


class LightThemeFactory implements ThemeFactory{
    createButton() : Button {
        return new LightButton('15px')
    }

    createCheckbox(): CheckBox {
        return new LightCheckbox()
    }
}

class DarkThemeFactory implements ThemeFactory{
    createButton(): Button {
        return new DarkButton('16px')
    }

    createCheckbox(): CheckBox {
        return new DarkCheckbox()
    }
}

class Application {
    useThemeFactory(themeFactory: ThemeFactory){
        console.log(themeFactory.createButton().paint())
        console.log(themeFactory.createCheckbox().paint())
    }
}

function main(){
    const ltFactory = new LightThemeFactory()
    const dkFactory = new DarkThemeFactory()
    
    const app = new Application()

    // read the config and decide which theme to use.
    app.useThemeFactory(ltFactory)

    app.useThemeFactory(dkFactory)
}
main()