import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import data from './db/data.json'
import logo from './images/logo.svg'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

ChartJS.defaults.color = "#a28a76de";

const day = data.map(day => {
  return day.day
})

const amount = data.map(amount => {
  return amount.amount
})

function App() {

  const data = {
    labels: day,
    datasets: [
      {
        label: '',
        backgroundColor: "#ec775f",
        hoverBackgroundColor: "#76b5bc",
        borderRadius: 8,
        data: amount,
      }
    ]
  }

  return (
    <div className="max-w-[70vh] min-h-[100vh] m-auto flex flex-col justify-center">
      <section className="bg-[#ec775f] grid grid-rows-2 grid-flow-col place-content-between p-7 rounded-2xl text-[#FFFCF7]">
        <h2>My balance</h2>
        <p className="text-2xl md:text-3xl font-bold">$921.48</p>
        <img src={logo} alt="logo" className="row-start-1 row-span-2 m-auto" />
      </section>
      <section className="bg-[#FFFCF7] mt-10 p-7 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[#382314] mb-6">Spending - Last 7 days</h2>
        <Bar data={data} />
        <hr className="my-6 border-[#f8e9dd]" />
        <div className="grid grid-rows-3 grid-flow-col place-content-between">
          <p className="col-span-2 text-base text-[#a28a76de]">Total this month</p>
          <p className="row-span-2 text-3xl md:text-4xl font-bold text-[#382314]">$478.33</p>
          <p className="text-right font-bold text-[#382314]">+2.4%</p>
          <p className='text-[#a28a76de]'>from last month</p>
        </div>
      </section>
      <p className='text-[12px] md:text-base text-center mt-5 text-[#382314]'>Challenge from <a href="https://frontendmentor.io" target='_blank' className='text-[#a28a76de] underline'>Frontend Mentor</a>. Coded by <a href="https://github.com/znmaki" target='_blank' className='text-[#a28a76de] underline'>Cristhian Ortiz P.</a></p>
    </div>
  )
}

export default App
