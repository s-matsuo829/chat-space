var reloadMessages = function() {
  last_message_id = ('.message:last').data('messageId')
  $.ajax({
    url: '/api/messages',
    type: 'get',
    dataType: 'json',
    data: {id: last_message_id}
  })
  .done(function(messages) {
    console.log('success');
  })
  .fail(function() {
    console.log('error');
  });
};

