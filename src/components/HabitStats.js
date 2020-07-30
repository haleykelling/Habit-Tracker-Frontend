import React, {useState, useEffect} from 'react';
import {Bar, defaults} from 'react-chartjs-2';
import { Redirect } from 'react-router-dom';

import '../Dashboard.css';

const HabitStats = ({habits}) => {
    
    const [labels, setLabels] = useState([])
    const [datasets, setDatasets] = useState([])
    const barGraphData = {labels: labels, datasets: datasets}
    
    useEffect(() => {
        setBarGraphData()
    }, [habits]);

    const setBarGraphData = () => {
        defaults.global.defaultFontColor = 'black'
        defaults.global.defaultFontFamily = 'Handlee'
        defaults.global.defaultFontSize = '16'
        
        const labels = habits.map(habit => habit.name)
        setLabels(labels)
        const data = habits.map(habit => habit.current_streak)
        setDatasets([{
            borderColor: 'hsl(201, 100%, 50%)',
            backgroundColor: 'hsl(201, 100%, 85%, 0.8)',
            barPercentage: 1,
            borderWidth: 2,
            data: data
        }])
    }
    
    const setTopThree = () => {
        const sorted = habits.sort((a,b) => b.total - a.total)
        const topThree = sorted.slice(0, 3)
        return topThree.map(habit => <li><strong>{habit.name}</strong> - Completed {habit.total} times</li>)
    }
    
    
    return (
        <>
        <div className="motivation">
            <p>Motivational quote here</p>
        </div>
        <div className="bar-graph">
            <Bar 
                data={barGraphData} 
                options={{
                    maintainAspectRatio: false,
                    title:{
                        display: true, 
                        text: 'Current Habit Streaks',
                        fontSize: 20,
                        fontFamily: 'Open Sans'
                    },
                    legend:{
                        display: false
                    },
                    scales: {
                        xAxes: [{
                           gridLines: {
                              color: 'hsl(215, 0%, 60%)'
                           }
                        }],
                        yAxes: [{
                           gridLines: {
                              color: 'hsl(215, 0%, 60%)'
                           }
                        }]
                   }
                }}
            />
        </div>
        <div className="top-3">
            <h3>Top 3 Overall Habits</h3>
            <ol>{setTopThree()}</ol>
        </div>
        </>
    );
    
}

export default HabitStats;
