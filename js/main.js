$(document).ready(function () {

	/*---------------------------------------------------------
	 Options
	
	
	---------------------------------------------------------*/

		// zFeed options
		var zlimit 		= 25;
		var zdate		= true;
		var zdateformat	= 'date';
		var zheader		= true;
		var zhtag		= 'h3';
		var zsnippet	= true;
		
		// App Options
		var fadespeed	= 999;
	
	/*---------------------------------------------------------
	LOAD
		01 Connect to and read data src
			01b Build HTML
	
	
	---------------------------------------------------------*/

		var feedsrc = $.getJSON( "JSON/feeds.json", function(data) {
	
			// console.log(data);
	
			feeds = [];
		
			$.each(data.design, function(src,url) {
		
				// Clone the DIV template and remove it from the flow
				section = $('#feedtpl').clone().remove();
		
				section.attr({id:src});	// Rename
				section.rssfeed(url, {
				    limit: zlimit,
				    header:zheader,
				    dateformat:zdateformat,
				    snippet:zsnippet,
				    titletag:zhtag
				  });
				
				// Build array  
				feeds.push(section);
				
				// Create HTML
				$(section).hide().appendTo('#Stream').fadeIn(1500);
		
			})
			
		})
		.done(function() { $('#msg').text('That\'s it for now folks - ') })
		.fail(function() { console.log( "Error" ); });


});

/*


limit	10	The number of feeds to return (maximum 100).
offset	1	The feed item number to start at.
header	true	If true, includes the header section containing the feed name and link.
titletag	h4	Specifies the HTML tag for the feed title.
date	true	If true, includes the feed date section.
dateformat	datetime	The format of feed dates: 'datetime' - full date and time, 'date' - date only, 'time' - time only, 'timeline' - lasped time or a format mask ('dd/MM/yyyy hh:mm:ss').
content	true	If true, includes the feed description.
snippet	true	If true, shows a short description for the feed item, otherwise the full content is displayed.
media	true	If true, displays media items when available.
showerror	true	If true, and an error is returned from the Google Feeds API, the error message is shown.
errormsg	-	Replaces the default friendly message when an error occurs.
key	null	Optionally use a Google API key.
ssl	false	Support for SSL. Set to True when using secure pages.
linktarget	_self	Specifies the target for all feed links ('_blank', '_self', '_top', framename).
linkredirect	-	Specifies a page to redirect the feed links to. The original link is contained in the URL parameter named 'link'.
linkcontent	false	If true, displays the content of the feed item as a link.
sort	-	Sorts the feed items by either 'title' or 'date'. Leave empty for no sorting.
sortasc	true	Specifies the sort direction, either ascending (true) or descending (false).
historical	false	If true, returns any additional historical records that may exist.

*/


/*

Feeds
http://feeds.feedburner.com/CrunchboardJobs
http://feeds.feedburner.com/behance/vorr
*/