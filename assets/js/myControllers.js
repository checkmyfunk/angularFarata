/**
 * Created by check on 3/7/15.
 */
$('#search').on('click', function() {
    var panel = $('#search-panel');
    panel.css('visibility', 'visible');
    panel.css('display', 'block');
    return false;
});

$('#home').on('click', function() {
    var panel = $('#search-panel');
    panel.css('visibility', 'hidden');
    panel.css('display', 'none');
    return false;
});