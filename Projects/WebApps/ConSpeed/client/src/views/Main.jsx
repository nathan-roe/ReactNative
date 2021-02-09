import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Chart from 'chart.js';
import moment from 'moment';

const Main = () => {
    const [myChart, setMyChart] = useState({});
    const [timer, setTimer] = useState(true);
    const arr = ["1:00am", "2:00am", "3:00am", "4:00am","5:00am","6:00am","7:00am","8:00am","9:00am","10:00am","11:00pm","12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm","5:00pm","6:00pm","7:00pm","8:00pm","9:00pm","10:00pm","11:00pm","12:00am"];
    useEffect(() => {   
        var startPoints = [];
        var labels = [];
        axios.get("http://localhost:8000/api/downloads")
            .then(res => {
                console.log(res.data);
                console.log(myChart.data);
                Date.prototype.addHours = function(h) {
                    this.setTime(this.getTime() + (h*60*60*1000));
                    return this;
                }
                let oneHourAgo = new Date().addHours(-1);
                startPoints = res.data.filter(d => {
                    let date = new Date(d.createdAt);
                    return date > oneHourAgo
                }).map(d => d.speed);
                labels = res.data.filter(d => {
                    let date = new Date(d.createdAt);
                    return date > oneHourAgo
                }).map(d => {
                    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
                    let date = new Date(d.createdAt);
                    return date.toLocaleDateString("en-US", options)
                });
                console.log(startPoints);
                var ctx = document.getElementById("myChart");
                setMyChart(new Chart(ctx, {
                    responsive: true,
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Download Speed',
                                data: startPoints,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    display: false
                                }
                            }]
                        }
                    }
                })
                );
            })
            .catch(err => console.log(err))
    }, []);

    var userImageLink, time_start, end_time, downloadSize, downloadImgSrc;
    useEffect(() => {
        userImageLink = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png" + "?n=" + Math.random() ;
        
        // The size in bytes 
        downloadSize = 83132; 
        downloadImgSrc = new Image(); 

        downloadImgSrc.onload = function () { 
            end_time = new Date().getTime(); 
            displaySpeed(); 
        }; 
        time_start = new Date().getTime(); 
        downloadImgSrc.src = userImageLink; 
    }, [timer])
    setTimeout(() => setTimer(!timer), 10000);
    
    const displaySpeed = () => { 
        var timeDuration = (end_time - time_start) / 1000; 
        var loadedBits = downloadSize * 8; 
        var bps = (loadedBits / timeDuration).toFixed(2); 
        var speedInKbps = (bps / 1024).toFixed(2); 
        var speedInMbps = (speedInKbps / 1024).toFixed(2); 
        axios.post("http://localhost:8000/api/downloads/add", speedInKbps)
            .then(res => {
                console.log(res.data.speed);
                if(myChart.data != undefined)
                {
                    
                    
                    if (myChart.data.datasets[0].data.length >= 24*7){
                        myChart.data.datasets[0].data.shift();
                        myChart.data.datasets[0].backgroundColor.shift();
                        myChart.data.datasets[0].borderColor.shift();
                    }
                    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
                    var today = new Date();
                    myChart.data.labels.push(today.toLocaleDateString("en-US", options));
                    myChart.data.datasets[0].data.push(res.data.speed);
                    myChart.data.datasets[0].backgroundColor.push('rgba(255,0,0,0.2)');
                    myChart.data.datasets[0].borderColor.push('rgba(255,0,0,1)');
                    
                    myChart.update();
                }
            })
            .catch(err => console.log(err));
    } 
    const getDays = () => {
        let days = [];
        switch (new Date().getDay()) {
            case 0:
                days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            break;
            case 1:
                days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"];
            break;
            case 2:
                days = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"];
            break;
            case 3:
                days = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
            break;
            case 4:
                days = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
            break;
            case 5:
                days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
            break;
            case 6:
                days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        }
        return days;
    }

    const getNewLabel = (str) => {
        let retVal = -1;
        for(let i=0;i<arr.length;i++)
        {
            if(str == arr[i])
            {
                str === arr[arr.length - 1] ?
                retVal = 0 : retVal = i+1;
            }
        }
        return retVal;
    }

    return (
        <div>
            {/* <form onSubmit={onSubmitHandler}>
                <input type="number" name="data" value={myData} onChange={e => setMyData(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </form> */}
            <div style={{maxWidth: "100vw", paddingRight: "2rem", paddingLeft: "2rem"}}>
                <canvas id="myChart" width="200" height="50"></canvas>
            </div>
            {/* <div style={{width: "100%", display: "flex", justifyContent: "space-evenly"}}>
                {
                    getDays().map((val, i) => {
                        return <p key={i}>{val}</p>
                    })
                }
            </div> */}
        </div>
    );
}
export default Main;