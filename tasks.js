const find = require('./comandos/find.js');
const action = process.argv[2];

if (!action) {
    console.log('introducir la accion a ejecutar');
    return;    
}

switch (action){
    case "find": {
        const title = process.argv[3];
        if (!title){
            console.log('Olvidaste introducir el titulo');
            break;
        }
        const exists = find(title);

        // console.log('Title:',title);
        // console.log('exists:',exists);
        // console.log('exists:',exists.title);
        // console.log('El titulo es :',exists);
        
        if (exists=== undefined) {
            console.log('El titulo, ', title, ', no esta en el array');
        }    else { console.log('El titulo, ',title, ', si esta en el array'); }
        
        break;
    }
    default : console.log('Accion no Definida');
}
