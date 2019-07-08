$(function(){
  function buildHTML(message){
    var image = ( message.image ) ? image = `<img class='lower-message__image' src=${message.image} >` : image = "";
    var html =
    `<div class="message" data-id=${message.id}>
      <div class="message__upper-info">
        <p class="message__upper-info__talker">
          ${message.user_name}
        </p>
        <p class="message__upper-info__date">
          ${message.time}
        </p>
      </div>
      <div class="message__text">
        <p class="lower-message__content">
          ${message.content}
        </p>
      </div>
      ${image}
    </div>`
  return html;
}
  $('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}); 
      $('form')[0].reset();
      $('.submit-btn').attr('disabled', false);
    })
    .fail(function(){
      alert('エラー');
    })
    return false;
  });
  function reloadMessages() {
    last_message_id = $('.message').last().data('id')
    $.ajax({
      url: 'api/messages',
      type: 'get',
      data: {id: last_message_id},
      dataType: 'json'
    })
    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function (message) {
        insertHTML = buildHTML(message);
        $('.messages').append(insertHTML);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
      })
    })
    .fail(function() {
      console.log('error');
    });
  };
  setInterval(reloadMessages, 5000);
});