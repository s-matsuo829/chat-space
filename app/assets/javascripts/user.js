$(function() {
  $("#user-search-field.chat-group-form__input").on("keyup", function() {
    var input = $("#user-search-field.chat-group-form__input").val();
    $.ajax({
      type: 'GET',
      url: '/users/search',
      data: { keyword: input },
      dataType: 'json'
    })
    console.log(input)
    .done(function(users) {
      // $(".listview.js-lazy-load-images").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザーが見つかりません");
      }
    })
  });
});