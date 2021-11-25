/**
 * Page cover for "HIM"
 * 
 * Designed by Joey Lai
 * Made by Xuan25 <shanboxuan@me.com>
 */

$(document).ready(function () {
    $("#cover").click(() => {
        $("#cover").addClass("cover-fade")
        $("#cover-title").addClass("cover-title-fade")

        $("#cover-hint").removeClass("cover-hint-show")
        $("#cover-hint").addClass("cover-hint-hide")
    })
})

var loaderCount = 0

function onCoverLayerLoad() {
    loaderCount++
    if(loaderCount == 3) {
        $("#cover-loader").addClass("cover-loader-hide")
        $("#cover-hint").addClass("cover-hint-show")
    }
}
