const entrada = document.querySelector(".inputEntrada");
const msgRes = document.querySelector(".content-tarefa");
const btn = document.querySelector(".btn");
const limparTarefa = document.querySelector(".btn-limpar");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  if (entrada.value !== "") {
    const itemTarefa = document.createElement("div");
    itemTarefa.innerHTML = `

<div class="w-full px-4 mt-[20px] mb-[0px]">
    <div class="containerTarefa p-[20px] flex justify-between items-center mx-auto rounded-lg max-w-[1000px] bg-[#222] hover:bg-[#22222286] gap-1 transition duration-300 ease-in-out">
        <p class="tarefa text-[1.1rem]  ">${entrada.value}</p> 
        <div class ="botoes">
 
        <button class="btn-excluir text-[1.1rem] text-[rgb(173,36,36)] px-[6px] cursor-pointer"><i class="fas fa-trash"></i></button>
        <button class="tarefaConcluida text-[1.3rem] text-[rgb(40,119,40)] cursor-pointer"><i class="fas fa-check"></i></button>
  
        </div>
           </div>
   
</div>`;

    body.appendChild(itemTarefa);
    const excluir = itemTarefa.querySelector(".btn-excluir");
    const botaoConcluir = itemTarefa.querySelector(".tarefaConcluida");
    const tarefaValue = itemTarefa.querySelector(".tarefa");
    excluir.addEventListener("click", function () {
      itemTarefa.remove();
    });

    botaoConcluir.addEventListener("click", function () {
      tarefaValue.style.textDecoration = "line-through";
      itemTarefa.querySelector(".containerTarefa").style.background =
        "#083f0f9f";
    });

    entrada.value = "";
    entrada.focus();
  }
});

limparTarefa.addEventListener("click", function () {
  const tarefas = document.querySelectorAll(".containerTarefa");
  if (tarefas) {
    tarefas.forEach((tarefa) => tarefa.remove());
    entrada.value = "";
  }
});
