$(document).ready(function(){
  const $form = $('form');
  const $input = $('#input')
  const $commentList = $('#comment-list');

  $form.submit(function(e){
    e.preventDefault();
    let inputVal = $input.val()
    let comment = new Comment(inputVal)
    $commentList.prepend(comment.render())
    $input.val('')
  })

}) 
