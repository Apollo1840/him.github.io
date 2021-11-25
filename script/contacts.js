/**
 * Contact for "HIM"
 * 
 * Designed by Joey Lai
 * Made by Xuan25 <shanboxuan@me.com>
 */

$(document).ready(function () {
    // canvas C
    var layer = 5

    $("#nextCBtn").click(() => {
        if (layer == -1) {
            return
        }
        $("#layerC"+layer).addClass("contacts-layer-hide")
        layer--
        
        if (layer == -1) {
            $("#nextCBtn").attr('disabled','disabled');
            $("#contacts").removeClass("contacts-underlayer")
        }
        $("#previousCBtn").removeAttr('disabled');
    })

    $("#previousCBtn").click(() => {
        if (layer == 5) {
            return
        }
        if (layer == -1) {
            $("#contacts").addClass("contacts-underlayer")
        }
        layer++
        $("#layerC"+layer).removeClass("contacts-layer-hide")

        if (layer == 5) {
            $("#previousCBtn").attr('disabled','disabled');
        }
        $("#nextCBtn").removeAttr('disabled');
    })

    $("#previousCBtn").attr('disabled','disabled');
})