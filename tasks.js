const find = require('./comandos/find');

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
        // const exists = find(title);
        console.log('Titulo:',title);
        if (title== true) {
            console.log('El titulo existe con el nombre:',find(title));
        } else {
            console.log('El titulo NO existe con el nombre:',find(title));
        }
        
        break;
    }
    default : console.log('Accion no Definida');
}