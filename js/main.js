/*jslint browser: true*/
/*global $, jQuery*/

jQuery(document).ready(function ($) {

    $('#sf1').click(function() {
        $('div.main img').hide();
        $('div.main iframe').remove();
        $('div.main').append('<iframe width="100%" height="100%" src="https://sketchfab.com/models/37952a021d144a79afeb17bb4338be6e/embed?autostart=1&ui_controls=0&ui_infos=0" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
    });
    
    $('#sf2').click(function() {
        $('div.main img').hide();
        $('div.main iframe').remove();
        $('div.main').append('<iframe width="100%" height="100%" src="https://sketchfab.com/models/424b433cf78147c3a11f996af246bec4/embed?autostart=1&ui_controls=0&ui_infos=0" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
    });
    
    $('#sf3').click(function() {
        $('div.main img').hide();
        $('div.main iframe').remove();
        $('div.main').append('<iframe width="100%" height="100%" src="https://sketchfab.com/models/818701f247a14016b4eebc4636fa0568/embed?autostart=1&ui_controls=0&ui_infos=0" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
    });
    
    $('#sf4').click(function() {
        $('div.main img').hide();
        $('div.main iframe').remove();
        $('div.main').append('<iframe width="100%" height="100%" src="https://sketchfab.com/models/c7eab10b58d14334ae77ad40275473f3/embed?autostart=1&ui_controls=0&ui_infos=0" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>');
    });
    
});