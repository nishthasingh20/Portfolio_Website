import React, { useState, useEffect } from 'react';
import { HistoricalChart } from "../config/api";
import { Line } from 'react-chartjs-2';
import { CircularProgress, makeStyles } from "@material-ui/core";
import { chartDays } from "../config/data";
import { CryptoState } from "../CryptoContext";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const useStyles = makeStyles((theme) => ({
  container: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    padding: 40,
  }
}));

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const fetchHistoricData = async () => {
    try {
      const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
      setHistoricData(data.prices);
    } catch (error) {
      console.error("Error fetching historic data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistoricData();
  }, [currency, days]);

  if (loading) return <CircularProgress style={{ color: "gold" }} />;

  return (
    <div className={classes.container}>
      {historicData && (
        <Line
          data={{
            labels: historicData.map((coin) => {
              let date = new Date(coin[0]);
              let time = date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [{
              data: historicData.map((coin) => coin[1]),
              label: `Price (Past ${days} Days) in ${currency}`,
              borderColor: "#EEBC1D",
            }],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default CoinInfo; 