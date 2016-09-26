(function() {

	'use strict';

	var allabolag = {

		init: function() {

			chrome.contextMenus.onClicked.addListener(allabolag.selectText);

			chrome.runtime.onInstalled.addListener(function() {
				var context = "selection";
				var title = "Öppna ”%s” på allabolag.se";
				var id = chrome.contextMenus.create({
					"title": title, 
					"contexts": [context],
					"id": "context" + context
				});
			});

		},

		selectText: function(info) {
			var phrase = info.selectionText;
			allabolag.openAllaBolag(phrase);
		},

		openAllaBolag: function(phrase) {
			var url = "http://www.allabolag.se/?what=" + encodeURIComponent(phrase);
			chrome.tabs.create({
				"url" : url 
			});
		}

	};

	document.addEventListener('DOMContentLoaded', function() { 
		allabolag.init();
	});

}());