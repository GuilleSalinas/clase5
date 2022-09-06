const tasks = require ("../tasksData.js");

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
// console.log(find);
// console.log(tasks);
module.exports = find;