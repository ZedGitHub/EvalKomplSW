geldArray =[ null, null, null, null, null, null, null, null, null, null];
qualitaetsArray =[null, null, null, null, null, null, null, null, null, null];


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

function qualitaetsArrayErweitern() {
    qualitaetsArray[zeit] = qualitaet;
};

function geldArrayErweitern() {
    geldArray[zeit] = geld;
};