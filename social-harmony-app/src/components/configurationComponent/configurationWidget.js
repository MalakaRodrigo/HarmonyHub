import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { LoadingOutlined } from '@ant-design/icons';

const models = [
  { value: "model1", label: "Model 1" },
  { value: "model2", label: "Model 2" },
  { value: "None", label: "None" }, // Add more models as needed
];

const ConfigurableWidget = ({ onStart }) => {
  const [sourceName, setSourceName] = useState("");
  const [modelName, setModelName] = useState("");
  const [isConfigured, setIsConfigured] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    if (!isConfigured && sourceName && modelName) {
      setIsConfigured(true);
      onStart(sourceName, modelName);
      setSourceName("")
      setModelName("")
    }else{
        setModelName("")
        setSourceName("")
        setIsConfigured(false)
    }
  };
  const handleModalNameChange = (event) => {
    setModelName(event.target.value);
  };
  const handleModalSourceChange = (event) => {
    setSourceName(event.target.value);
  };
  return (
    <Paper elevation={3} style={{ padding: "20px", maxWidth: "400px" }}>
      <Typography variant="h5">Configure Settings</Typography>
      <TextField
        label="Source Name"
        fullWidth
        value={sourceName}
        onChange={handleModalSourceChange}
        margin="normal"
        inputProps={{ readOnly: isConfigured }}
      />
      <FormControl>
      <InputLabel id="demo-simple-select-helper-label">Model Selection</InputLabel>
      <Select
        style={{ minWidth: '400px', height: '60px' }}
        labelId="demo-simple-select-helper-label"
        label="Model Selection"
        value={modelName}
        onChange={handleModalNameChange}
        inputProps={{ readOnly: isConfigured }}
      >
        {models.map((model) => (
          <MenuItem key={model.value} value={model}>
            {model.label}
          </MenuItem>
        ))}
      </Select>
      </FormControl>
      {isConfigured && (
        <Typography
          variant="body1"
          style={{ marginTop: "10px", color: "green" }}
        >
          Configured and Ready to Start!
        </Typography>
      )}
      <Box mt={2}>
        {!isLoading ?<Button variant="contained" color="primary" onClick={handleStart}>
          Start {isConfigured? 'New' : ''}
        </Button> : <LoadingOutlined />}
      </Box>
    </Paper>
  );
};

export default ConfigurableWidget;
