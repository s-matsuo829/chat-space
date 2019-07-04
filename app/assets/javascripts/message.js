$(function(){
  function buildHTML(message){
    if ( message.image ) {
    var html =
    `<div class="message" data-message-id=${message.id}>
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
      <img  class='lower-message__image' src=${message.image} >
    </div>`
    return html;
  } else {
    var html =
    `<div class="message" data-message-id=${message.id}>
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
    </div>`
    return html;
  }
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
  })
});
