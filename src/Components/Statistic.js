import React from "react";
import {Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip} from "recharts";
import DatePicker from "react-datepicker";
import {Paper} from "@material-ui/core";


const Statistic = ({inputData, showTask}) => {

    const StatisticForDays = [
        {
            "day": "Sunday",
            "completed": 0,
            "uncompleted": 0,
        },
        {
            "day": "Monday",
            "completed": 0,
            "uncompleted": 0,
        },
        {
            "day": "Tuesday",
            "completed": 0,
            "uncompleted": 0,
        },
        {
            "day": "Wednesday",
            "completed": 0,
            "uncompleted": 0,
        },
        {
            "day": "Thursday",
            "completed": 0,
            "uncompleted": 0,
        },
        {
            "day": "Friday",
            "completed": 0,
            "uncompleted": 0,
        },
        {
            "day": "Saturday",
            "completed": 0,
            "uncompleted": 0,
        }
    ]

    const calculateStatistic = () => {
        let tmpStatistic = [...StatisticForDays]
        for (let i = 0; i < inputData.length; i++) {
            switch (inputData[i].date.dayOfWeek) {
                case 0: { //воскресенье
                    inputData[i].checked ? tmpStatistic[0].completed++ : tmpStatistic[0].uncompleted++
                    break
                }
                case 1: { //понедельник
                    inputData[i].checked ? tmpStatistic[1].completed++ : tmpStatistic[1].uncompleted++
                    break
                }
                case 2: { //вторник
                    inputData[i].checked ? tmpStatistic[2].completed++ : tmpStatistic[2].uncompleted++
                    break
                }
                case 3: { //среда
                    inputData[i].checked ? tmpStatistic[3].completed++ : tmpStatistic[3].uncompleted++
                    break
                }
                case 4: { //четверг
                    inputData[i].checked ? tmpStatistic[4].completed++ : tmpStatistic[4].uncompleted++
                    break
                }
                case 5: { //пятница
                    inputData[i].checked ? tmpStatistic[5].completed++ : tmpStatistic[5].uncompleted++
                    break
                }
                case 6: { //суббота
                    inputData[i].checked ? tmpStatistic[6].completed++ : tmpStatistic[6].uncompleted++
                    break
                }
            }
        }
        return tmpStatistic
    }

    const show = () => {
        if (showTask == "completed")
            return <Bar dataKey="completed" fill="#82ca9d"/>
        if (showTask == "uncompleted")
            return <Bar dataKey="uncompleted" fill="#8884d8"/>
        else {
            return ([<Bar dataKey="completed" fill="#82ca9d"/>,
                <Bar dataKey="uncompleted" fill="#8884d8"/>])
        }
    }

    return <div>
        <Paper elevation={7} style={{margin: "15px", padding: "10px"}}>
            Статистика задач:
            <BarChart width={700} height={300} data={calculateStatistic()}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="day"/>
                <YAxis scale={"linear"} interval={1}/>
                <Legend/>
                <Tooltip/>
                {show()}
            </BarChart>
        </Paper>
    </div>
}
export default Statistic;