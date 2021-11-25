/**
 * Tab switching for "HIM"
 * 
 * Designed by Joey Lai
 * Made by Xuan25 <shanboxuan@me.com>
 */

$(document).ready(function () {
    $("#content").find("[id^='tab']").hide(); // Hide all content
    $("#tabs li:first").attr("id", "current"); // Activate the first tab
    $("#content #tab1").fadeIn(1000); // Show first tab's content

    $("#description").find("[id^='tab']").hide(); // Hide all content
    $('#tab1-desc').fadeIn(1000); // Show content for the current tab

    $('#tabs a').click(function (e) {
        e.preventDefault();
        if ($(this).closest("li").attr("id") == "current") { //detection for current tab
            return;
        }
        else {
            $("#tabs li").attr("id", ""); //Reset id's
            $(this).parent().attr("id", "current"); // Activate this
            
            $("#content").find("[id^='tab']").hide(); // Hide all content
            $('#' + $(this).attr('name')).fadeIn(1000); // Show content for the current tab

            $("#description").find("[id^='tab']").hide(); // Hide all content
            $('#' + $(this).attr('name') + '-desc').fadeIn(1000); // Show content for the current tab
        }
    });
});