import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

export default function CurrencyConverter() {
  const [amount, setAmount] = React.useState(0);
  const [from, setFrom] = React.useState("usd");
  const [to, setTo] = React.useState("inr");
  const [convertedAmount, setConvertedAmount] = React.useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const currencyTypes = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  const id = React.useId();
  return (
    <Card
      sx={{
        maxWidth: 360,
        margin: "0px auto",
      }}
    >
      {" "}
      <CardContent>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <TextField
            value={amount}
            name="from"
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
          <FormControl variant="filled">
            <InputLabel id={id}>From Currency Type</InputLabel>
            <Select
              labelId={id}
              id="from"
              name="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              {currencyTypes.map((currency) => {
                return (
                  <MenuItem value={currency} key={currency}>
                    {currency}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            sx={{ width: "auto !important" }}
            size={"small"}
            onClick={swap}
          >
            Swap
          </Button>
          <FormControl variant="filled">
            <InputLabel id={id}>To Currency Type</InputLabel>
            <Select
              labelId={id}
              id="to"
              name="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              {currencyTypes.map((currency) => {
                return (
                  <MenuItem value={currency} key={currency}>
                    {currency}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {from === to ? (
            <Typography color="error">
              Same Currency should not be selected
            </Typography>
          ) : (
            <Button type="submit" variant="contained" fullWidth>
              Convert {from?.toUpperCase()} to {to?.toUpperCase()}
            </Button>
          )}
          <Divider />
          <h3>Converted Amount : {convertedAmount.toFixed(2)}</h3>
        </Box>
      </CardContent>
    </Card>
  );
}
