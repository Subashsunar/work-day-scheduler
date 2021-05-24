// Decleared a day variable an append the current day. It will show the output at the Header/Jumbotron section of the web page.
var day = moment().format("dddd, YY Do");
$("#currentDay").append(day);

// Decleared a function called scheduler()
function scheduler() {
    var currentTime = moment().hours();
    $(".cTime").each( function() {
        var pTime = parseInt($(this).attr('id'));
        // Condition: if pTime is lesser than currentTime, then show it is past (grey color mentioned in past class in css file).
        if (pTime < currentTime) {
            $(this).addClass("past")
            // If currentTime is strickly equals to pTime, then show it is present (red color mentioned in present class in css file).
        } else if (currentTime === pTime) {
            $(this).addClass("present")
            //Otherwise shows as a future
        } else {
            $(this).addClass("future")
        }
    })
}
scheduler();
