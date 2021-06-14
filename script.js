let inpNewTask = $("#inpNewTask");
let btnAdd = $("#btnAdd");
let btnReset = $("#btnReset");
let btnCleanup = $("#btnCleanup");
let btnSort = $("#btnSort");
let ulTask = $("#ulTask");

function addItem(){
  let listItem = $("<li>", { class: "list-group-item", text: inpNewTask.val() });
  
  listItem.click(function(){
    $(this).toggleClass("done");
  })
  
  ulTask.append(listItem);
  inpNewTask.val("");
  toggleInputBtn();
}

function clearDone(){
  $('#ulTask .done').remove();
  toggleInputBtn();
}

function sortTasks(){
  $('#ulTask .done').appendTo('#ulTask');
}

function toggleInputBtn() {
  btnReset.prop("disabled", inpNewTask.val() == "");
  btnAdd.prop("disabled", inpNewTask.val() == "");
  btnSort.prop("disabled", ulTask.children().length < 1);
  btnCleanup.prop("disabled", ulTask.children().length < 1);
}

inpNewTask.keypress((e)=>{
  if(e.which === 13) addItem();
})

inpNewTask.on('input', toggleInputBtn);

btnAdd.click(addItem);

btnReset.click(()=>{
  inpNewTask.val("");
  toggleInputBtn();
});

btnCleanup.click(clearDone);

btnSort.click(sortTasks);