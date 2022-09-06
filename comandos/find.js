const tasks = require ("../tasksData");


const find = (title)=>{

    // esta funcion reemplaza al for en una sola linea
    return tasks.find((task)=> task.title === title);

//     for (let i=0; i<tasks.length; i++) {
//         if (tasks[i].title === title){
//             return true;
//         }
//     }
//     return false;

}

module.exports = find;