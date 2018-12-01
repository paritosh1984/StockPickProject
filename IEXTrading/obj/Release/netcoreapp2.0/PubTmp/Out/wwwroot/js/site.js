function getChart(dates, prices, vols, avgprice, avgvol) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dates.split(","),
            datasets: [{
                label: 'High Prices',
                yAxisID: 'H',
                data: prices.split(","),
                type: 'line',
                borderColor: 'red',
                backgroundColor: 'rgba(3600, 100, 50, 0.05)',
                lineTension: 0
            },
            {
                label: 'Volumes (Mn)',
                data: vols.split(","),
                borderColor: 'rgb(128,128,128)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    id: 'H',
                    type: 'linear',
                    position: 'left',
                }]
            },
            annotation: {
                drawTime: 'afterDatasetsDraw',
                annotations: [
                    {
                        id: 'highprice',
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'H',
                        value: avgprice,
                        borderColor: 'red',
                        borderWidth: 1,
                        label: {
                            backgroundColor: "red",
                            content: "Mean: $" + avgprice,
                            enabled: true
                        }
                    },
                    {
                        id: 'volume',
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'H',
                        value: avgvol,
                        borderColor: 'black',
                        borderWidth: 1,
                        label: {
                            backgroundColor: "black",
                            content: "Mean Volume: " + avgvol + "(Mn)",
                            enabled: true
                        }
                    }]
            }
        }
    });
}

function alertDbSave(success) {
    if (success === 1) {
        alert("Data saved successfully");
    }
}
