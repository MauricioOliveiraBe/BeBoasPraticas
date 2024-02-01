const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tasks = {
    todo: [],
    doing: [],
    done: []
};

function addTask(task, state) {
    tasks[state].push(task);
    console.log(`Tarefa: ${task}
    Adicionada em: ${state}`);
} 

function moveTask(currentState, nextState, indexOfTask) {
   const task = tasks[currentState].splice(indexOfTask, 1)[0];
   tasks[nextState].push(task);
   console.log(`Tarefa: ${task}, movida de ${currentState} para ${nextState}`);
}


function showTasks(state) {
    console.log(`Tarefas em ${state}:`);
    tasks[state].forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
 }


 function terminalQuestions() {
    rl.question(`Escolha uma opção:
    1. Adicionar tarefa
    2. Mover tarefa
    3. Mostrar tarefas
    4. Sair
    Opção:` , (options) => {
        switch (options) {
            case '1':         
            rl.question('Digite a sua tarefa:', (task) => {
                rl.question('Digite o estado que deseja adicionar a sua tarefa (todo, doing, done):', (state) => {
                    addTask(task, state);
                    terminalQuestions();
                }); 
            });
                break;

                case '2':         
            rl.question('Digite o estado da tarefa que você deseja mover (todo, doing, done):', (currentState) => {
                rl.question('Digite o estado que deseja mover a sua tarefa (todo, doing, done):', (nextState) => {
                    showTasks(currentState);
                    rl.question(`Digite o índice da tarefa:` , (index) => {
                        moveTask(currentState, nextState, parseInt(index) - 1);
                        terminalQuestions();
                    });
                });
            });
                break;

                case '3':
                    rl.question('Digite o estado (todo, doing, done): ', (state) => {
                        showTasks(state);
                        terminalQuestions();
                    });
                    break;
                    case '4':
                rl.close();
                break;
                
            default:
                console.log('Opção inválida');
                terminalQuestions();
                break;
        }
    });
 }

 terminalQuestions();