/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        
/**
 * Changes to css
 * 
 */
        $('nav')
            .css({
            'background': '#FFBB33',
            'fontSize': '30px',
            'margin-top': '0px',
            'fontWeight' : 'bold'
            })
            .text('Billy Higgins');
        $('nav header').css({'margin': '10px'});
        $('body').css('background', '#5A7BAD');
        
/**
 * TODO 4: Top Rated List 
 * 
 */
 
        let topRated = data.discography.topRated;
        let theText = _.forEach(topRated, function(recording, i) {
            let $recording = $('<li>');
            $recording.addClass('top-rated');
            $recording.attr('id', i);
            $recording.attr('class', 'top-rated-click-list');
            let title = recording.title;
            $recording.text(title);
            $('#list-top-rated').append($recording);
        });
        
/**
 *  TODO 5: General Recordings List
 * 
 */
        
        let $generalHeader = 
            $('<h2>')
                .attr('id', 'general-header')
                .text('Recordings');
                            
        let $sectionGeneral =
            $('<section>')
                .attr('id', 'section-general');
                
        let $general =
            $('<general-recordings>')
                .attr('ul', 'general-recordings');
                
        let $artDiv =
            $('<div>')
                .attr('id', 'image-container-recording')
                .attr('class', 'image-container');
        
        $sectionGeneral.append($generalHeader).append($artDiv).append($general).appendTo('#sidebar');
        
        let generalRecordings = data.discography.recordings;
        let generalRecordingList = _.forEach(generalRecordings, function(recording, i) {
            let $generalRecording = $('<li>');
            $generalRecording.addClass('general-recording');
            $generalRecording.attr('id', i);
            $generalRecording.css('margin-left', '20px');
            $generalRecording.attr('class', 'general-recording-click-list');
            let title = recording.title;
            $generalRecording.text(title);
            $('general-recordings').append($generalRecording);
        });
        
        
/**
 * TODO 6: Create Images for Recording Lists
 * 
 */
    
    const generalArtSelector = data.discography.recordings;
    
    const topRatedArtSelector = data.discography.topRated;
    
    let $generalArt =
        $('<img>')
            .attr('src', generalArtSelector[0].art)
            .attr('id', 'general-art');
            
    $generalArt.prependTo($artDiv);
    
    let $topRatedArt =
        $('<img>')
            .attr('src', topRatedArtSelector[0].art)
            .attr('id', 'top-rated-art');
            
    $('#section-top-rated').prepend($('#header-top-rated')).append($topRatedArt).append($('#list-top-rated'));
            
            
/**
 *  TODO 7: Dynamically Swap Billy Images
 * 
 */

    // find id of element we're clicking on
    // create an event handler
    // click handler
    // loop through array of images
    // put next image into image container
    
    const images = data.images.billy;
    
    let clickCountBilly = 0;
    
    $('#image-billy').on('click', function(event) {
        clickCountBilly += 1;
        let currentEvent = $(event.currentTarget);
        if (clickCountBilly < images.length) {
            currentEvent.fadeOut('fast', function() {
                $('#image-billy').attr('src', images[clickCountBilly]);
            }).fadeIn('fast');
        }
        else {
            clickCountBilly = 0;
            currentEvent.fadeOut('fast', function() {
                $('#image-billy').attr('src', images[clickCountBilly]);
            }).fadeIn('fast');
        }
    });


/**
 *  TODO 8: Dynamically Swap Recording Images
 * 
 */
    
    $('.top-rated-click-list').on('click', function(event) {
        let currentEvent = $(event.currentTarget);
        currentEvent.fadeOut('fast', function() {
            $('#top-rated-art').attr('src', topRatedArtSelector[currentEvent.attr('id')].art);
        }).fadeIn('fast');
    });
    
    $('.general-recording-click-list').on('click', function(event) {
        let currentEvent = $(event.currentTarget);
        currentEvent.fadeOut('fast', function() {
            $('#general-art').attr('src', generalArtSelector[currentEvent.attr('id')].art);
        }).fadeIn('fast');
    });


/**
 *  TODO 9: Build a Table using jQuery
 * 
 */
        //$general.append($('<h2>').text('Recordings')).appendTo($('#sidebar'));
        
        // let $section = $('<section>').attr('id', 'section-rider');
        // $section.append($('<h3>').text('Billy\'s Rider')).appendTo($('#sections'));
        

        

        //$('<ol>').appendTo('.sidebar').attr('id', '.top-rated')
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


