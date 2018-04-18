google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(initGoogleVisualization);

function initGoogleVisualization(){
	drawChart();
	var btnInsertTable = document.getElementById('btn-insert-table');
	btnInsertTable.removeAttribute('disabled');
	var btnDrawChart = document.getElementById('btn-draw-chart');
	btnDrawChart.removeAttribute('disabled');
}

function drawChart() {
	var data = makeDataTable();
	
	var options = {
		title: 'Qual a pontuação do político?',
		width: 600,
		height: 300
	}
	
	var chart = new google.visualization.PieChart(document.getElementById('my-chart')); //aqui vc escolhe o tipo de gráfico, escolhi o PieChart (pizza)
	chart.draw(data,options);
}

function insertTable(){
	var politico = document.getElementById('politico').value;
	var value = document.getElementById('value').value;
	var table = document.getElementById('my-table').value;
	var numRows = table.getElementsByTagName('tbody')[0].children.length;
	var row = table.insertRow(numRows+1);
	
	var cellPolitico = row.insertCell(0);
	cellPolitico.outerHTML = '<th scope="row">'+politico+'</th>';
	var cellValue = row.insertCell(1);
	cellValue.innerHTML = value;
}

function makeDataTable(){
	var table = document.getElementById('my-table').value;
	var rows = table.getElementsByTagName("tbody")[0].children;
	var data = new google.visualization.DataTable();
	
	data.addColumn('string', 'Políticos');
	data.addColumn('number', 'Votos');
	
	for(var i=0;i<rows.lenght;i++){
		var politico = rows[i].cells[0].innerHTML;
		var value = parseInt(rows[i].cells[1].innerHTML);
		data.addRow([politico,value]);
	}
	
	return data;
}