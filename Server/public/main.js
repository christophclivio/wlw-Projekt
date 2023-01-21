window.onload = () => {
    // Set up the reset button
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', () => {
    // Reset the chart data
    chart.data.labels = [];
    chart.data.datasets[0].data = [];
    chart.update();
    });

    //****************************************************** */
    // Set up the charts
    //****************************************************** */

        //****************************************************** */
        // chart 1

        const ctx1 = document.getElementById('adc-chart1').getContext('2d');
        const chart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: [], // An empty array for the labels, which will be filled with timestamps
            datasets: [{
            label: 'Cell 1',
            data: [], // An empty array for the ADC values, which will be filled with the data
            borderColor: 'rgb(255, 0, 255)', // Set the color of the line
            fill: false, // Don't fill the area under the line
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Voltage'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Current Time'
                }
              }]
            }
          }
        });

        //****************************************************** */
        // chart 2
        const ctx2 = document.getElementById('adc-chart2').getContext('2d');
        const chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: [], // An empty array for the labels, which will be filled with timestamps
            datasets: [{
            label: 'Cell 2',
            data: [], // An empty array for the ADC values, which will be filled with the data
            borderColor: 'rgb(0, 99, 132)', // Set the color of the line
            fill: false, // Don't fill the area under the line
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Voltage'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Current Time'
                }
              }]
            }
          }
        });
        //****************************************************** */
        // chart 3
        const ctx3 = document.getElementById('adc-chart3').getContext('2d');
        const chart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: [], // An empty array for the labels, which will be filled with timestamps
            datasets: [{
            label: 'Cell 3',
            data: [], // An empty array for the ADC values, which will be filled with the data
            borderColor: 'rgb(100, 99, 132)', // Set the color of the line
            fill: false, // Don't fill the area under the line
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Voltage'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Current Time'
                }
              }]
            }
          }
        });
        //****************************************************** */
        // chart 4
        const ctx4 = document.getElementById('adc-chart4').getContext('2d');
        const chart4 = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: [], // An empty array for the labels, which will be filled with timestamps
            datasets: [{
            label: 'Cell 4',
            data: [], // An empty array for the ADC values, which will be filled with the data
            borderColor: 'rgb(100, 0, 132)', // Set the color of the line
            fill: false, // Don't fill the area under the line
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Voltage'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Current Time'
                }
              }]
            }
          }
        });
        //****************************************************** */
        // chart 5
        const ctx5 = document.getElementById('adc-chart5').getContext('2d');
        const chart5 = new Chart(ctx5, {
        type: 'line',
        data: {
            labels: [], // An empty array for the labels, which will be filled with timestamps
            datasets: [{
            label: 'Cell 5',
            data: [], // An empty array for the ADC values, which will be filled with the data
            borderColor: 'rgb(100, 0, 132)', // Set the color of the line
            fill: false, // Don't fill the area under the line
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Voltage'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Current Time'
                }
              }]
            }
          }
        });
        //****************************************************** */
        // chart 6
        const ctx6 = document.getElementById('adc-chart6').getContext('2d');
        const chart6 = new Chart(ctx6, {
        type: 'line',
        data: {
            labels: [], // An empty array for the labels, which will be filled with timestamps
            datasets: [{
            label: 'Cell 6',
            data: [], // An empty array for the ADC values, which will be filled with the data
            borderColor: 'rgb(150, 0, 132)', // Set the color of the line
            fill: false, // Don't fill the area under the line
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Voltage'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Current Time'
                }
              }]
            }
          }
        });
        //***************************************************** */
        // chart 7
        const ctx7 = document.getElementById('adc-chart7').getContext('2d');
        const chart7 = new Chart(ctx7, {
        type: 'line',
        data: {
            labels: [], // An empty array for the labels, which will be filled with timestamps
            datasets: [{
            label: 'Cell 7',
            data: [], // An empty array for the ADC values, which will be filled with the data
            borderColor: 'rgb(100, 0, 200)', // Set the color of the line
            fill: false, // Don't fill the area under the line
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Voltage'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Current Time'
                }
              }]
            }
          }
        });

        //***************************************************** */
        // chart 8
        const ctx8 = document.getElementById('adc-chart8').getContext('2d');
        const chart8 = new Chart(ctx8, {
        type: 'line',
        data: {
            labels: [], // An empty array for the labels, which will be filled with timestamps
            datasets: [{
            label: 'Cell 8',
            data: [], // An empty array for the ADC values, which will be filled with the data
            borderColor: 'rgb(100, 255, 200)', // Set the color of the line
            fill: false, // Don't fill the area under the line
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Voltage'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Current Time'
                }
              }]
            }
          }
        });




    // Get the element with the "adc-value" ID
    const adcValueElement = document.getElementById('adc-value');

    // Send a GET request to the "/adc" route
    fetch('/adc')
        .then(response => response.json())
        .then(data => {
            // Set the innerHTML of the adcValueElement to the value from the server
            adcValueElement.innerHTML = data.value;
        })
        .catch(error => console.error(error));

    setInterval(readADCAndUpdateChart, 1000);

      // Get the element with the "adc-value" ID
      const adcValueElement2 = document.getElementById('adc2-value');

      // Send a GET request to the "/adc" route
      fetch('/adc2')
          .then(response => response.json())
          .then(data => {
              // Set the innerHTML of the adcValueElement to the value from the server
              adcValueElement.innerHTML = data.value;
          })
          .catch(error => console.error(error));
  
      setInterval(readADCAndUpdateChart, 1000);
}