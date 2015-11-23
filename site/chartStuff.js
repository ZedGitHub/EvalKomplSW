geldArray =[10, 9, 7.6, 10, 10, 10, 10, 10, 10, null];
qualitaetsArray =[0, 1, 2, 3, 4.5, 5.7, 7.9, 8, 9, 10];


initializeChart();

function initializeChart() {
    qualitaetsArrayErweitern();
    geldArrayErweitern();
    $(function () {
        $('#container').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Fortschritt'
            },
            xAxis: {
                allowDecimals: false,
                labels: {
                    formatter: function () {
                        return this.value; // clean, unformatted number
                    }
                }
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            
            plotOptions: {
                area: {
                    pointStart: 1,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    }
                }
            },
            series:[ {
                name: 'Geld',
                data: geldArray
            },
            {
                name: 'Qualitaet',
                data: qualitaetsArray
            }]
        });
    });
};

function qualitaetsArrayErweitern(qualitaet) {
    qualitaetsArray[zeit] = qualitaet;
};

function geldArrayErweitern(geld) {
    geldArray[zeit] = geld;
};