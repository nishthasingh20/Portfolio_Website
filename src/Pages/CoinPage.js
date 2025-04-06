import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { SingleCoin } from "../config/api";
import { Typography, LinearProgress, makeStyles } from '@material-ui/core';
import { numberWithCommas } from '../Components/Banner/Carousel';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  sidebar: {
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 25,
    borderRight: "2px solid grey",
    padding: "0 25px 25px 0",
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Bitter",
  },
  description: {
    width: "100%",
    fontFamily: "Bitter",
    padding: "0 0 15px 0",
    textAlign: "justify",
  },
  marketData: {
    width: "100%",
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  }
}));

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    try {
      const { data } = await axios.get(SingleCoin(id));
      setCoin(data);
    } catch (error) {
      console.error("Error fetching coin:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoin();
  }, [id]);

  if (loading) {
    return <LinearProgress style={{ backgroundColor: "gold" }} />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className={classes.heading}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          <div dangerouslySetInnerHTML={{ 
            __html: coin?.description.en.split(". ")[0] 
          }}/>
        </Typography>
        <div className={classes.marketData}>
          <span style={{ display: "flex", gap: "8px" }}>
            <Typography variant="h5" className={classes.heading}>
              Rank:
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "Bitter" }}>
              {coin?.market_cap_rank}
            </Typography>
          </span>
          <span style={{ display: "flex", gap: "8px" }}>
            <Typography variant="h5" className={classes.heading}>
              Current Price:
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "Bitter" }}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex", gap: "8px" }}>
            <Typography variant="h5" className={classes.heading}>
              Market Cap:
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "Bitter" }}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;