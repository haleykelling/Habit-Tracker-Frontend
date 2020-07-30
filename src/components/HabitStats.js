import React, {useState, useEffect} from 'react';
import {Bar, defaults} from 'react-chartjs-2';
import { Redirect } from 'react-router-dom';

import '../Dashboard.css';

const HabitStats = ({habits}) => {
    
    const [labels, setLabels] = useState([])
    const [datasets, setDatasets] = useState([])
    
    const setBarGraphData = () => {
        defaults.global.defaultFontColor = 'white'
        defaults.global.defaultFontFamily = 'Poppins'
        
        const labels = habits.map(habit => habit.name)
        setLabels(labels)
        const data = habits.map(habit => habit.current_streak)
        setDatasets([{
            backgroundColor: 'white',
            borderColor: 'red',
            barPercentage: 1,
            borderWidth: 2,
            data: data
        }])
    }
    
    useEffect(() => {
        setBarGraphData()
    }, [habits]);
    
    const barGraphData = {labels: labels, datasets: datasets}
    
    
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
                        text: 'Current Streaks',
                        fontSize: 20
                    },
                    legend:{
                        display: false
                    }
                }}
            />
        </div>
        <div className="top-3">
            <h3>Top 3 Alltime Habits</h3>
        </div>
        </>
    );
    
}

export default HabitStats;
