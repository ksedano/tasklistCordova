var count = 0;

$('#add').click(addItem);
$(document).on('click', '#delete', function(event){ 
    localStorage.removeItem(localStorage.key(event.target.name));
    updateList();
});

function addItem() {
  var text = $("#tf").val();

  localStorage.setItem(count, text);
  count++;

  updateList();
}

function updateList(){
  for (var i = 0; i < localStorage.length; i++){
    count++;
    var list = $("#list");

    var button = ("<button id='delete' name='"+i+"' 'type='button'><img src='./img/delete.png' width='20' height='20'></button>");

    var node = ("<li><a href='#' class='ui-btn ui-btn-icon-right ui-icon-carat-r'>"+ localStorage.getItem(localStorage.key(i)) + button + "</a></li>");

    list.append(node);

    console.log(localStorage.getItem(localStorage.key(i)));
  }
}

$(document).ready(function(){updateList()});