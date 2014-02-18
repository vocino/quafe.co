//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).on('page:fetch',   function() { NProgress.start(); });
$(document).on('page:change',  function() { NProgress.done(); });
$(document).on('page:restore', function() { NProgress.remove(); });