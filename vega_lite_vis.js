
vegaEmbed("#firstchart", "daily_cost_bar_chart.vg.json",{actions:false}).then(function(result) {
}).catch(console.error);


vegaEmbed("#secondchart", "daily_barchart.vg.json").then(function(result) {
}).catch(console.error);

vegaEmbed("#thirdchart", "daily_cost_bar_chart.vg.json",{actions:false}).then(function(result) {
}).catch(console.error);


vegaEmbed("#fourthchart", "daily_cost_bar_chart.vg.json",{actions:false}).then(function(result) {
}).catch(console.error);


document.querySelector('.vega-bind').style="font-family: fantasy; color: red;";