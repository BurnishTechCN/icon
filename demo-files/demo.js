
$(function() {
    $('#js-icon-list').html( _.template($('#js-icon-template').html(), window.data));
});