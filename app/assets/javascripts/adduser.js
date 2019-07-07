$(function() {
  $(document).on('click', '.user-search-add', function() {
    $(this).parent().remove();
    var name = $(this).data('userName');
    var userid = $(this).data('userId');
    var html =  
    `<div class='chat-group-user clearfix js-chat-member' id=${userid}>
      <input name='group[user_ids][]' type='hidden' value=${userid}>
      <p class='chat-group-user__name'>${name}</p>
      <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
    </div>`
    $("#chat-group-users").append(html);
  });
});

$(function() {
  $(document).on('click', '.user-search-remove', function() {
    $(this).parent().remove();
  });
});

