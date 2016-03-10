// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require raphael
//= require morris


var processData = function(data) {
	out = []
	var arrayLength = data.length;
	var mostRecent = data[arrayLength-1]
	var dataArray = mostRecent.data.split("$")
	for (var i = 0; i < dataArray.length-1; i++) {
		dataArray[i] = dataArray[i].split("^")
		dataArray[i][0] = parseInt(Date.parse(dataArray[i][0]))
		dataArray[i][1] = parseFloat(dataArray[i][1])
		

		out.push({
			date_mils: dataArray[i][0],
			use: dataArray[i][1]
		})
	}
}