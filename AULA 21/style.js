

function addTarefa(tarefas){
    let tarefa = prompt("Digite a tarefa")
    tarefas.Push  (tarefa)
    return tarefas
}

function removerTarefa (tarefas){
let tarefa = prompt ("Suas tarefas são?" +tarefas+ "\n Qual tarefa você quer remover?")
let index = tarefas.indexOf(tarefa)
tarefas.splice(index, 1)
return tarefas

}