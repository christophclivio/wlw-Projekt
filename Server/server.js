const express = require('express');
const app = express();
const Raspi = require('raspi');
const I2C = require('raspi-i2c').I2C;
const ADS1x15 = require('raspi-kit-ads1x15');
const path = require('path');
const helmet = require('helmet');


app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
      "default-src '*'; font-src '*'; img-src '*'; script-src '*'; style-src '*'; frame-src '*'"
    );
    next();
  });

// Function to initialize the ADC
function readADC() {
    return new Promise((resolve, reject) => {
        // Init Raspi-I2c
        const i2c = new I2C();

        // Init the ADC
        const adc = new ADS1x15({
            i2c,                                    // i2c interface
            chip: ADS1x15.chips.IC_ADS1015,         // chip model
            address: ADS1x15.address.ADDRESS_0x48,  // i2c address on the bus

            // Defaults for future readings
            pga: ADS1x15.pga.PGA_4_096V,            // power-gain-amplifier range
            sps: ADS1x15.spsADS1015.SPS_250         // data rate (samples per second)
        });


        const results = [];

        function readChannel(channel) {
            adc.readChannel(channel, (err, value, volts) => {
                if (err) {
                    reject(err);
                } else {
                    results.push({channel, value, volts});
                }
            });
        }

        // Read all channels
        for (let channel = 0; channel < 4; channel++) {
            readChannel(channel);
        }

        // Resolve the promise with the results array when all channels have been read
        resolve(results);
    });
}
// Function to initialize the ADC
function readADC2() {
    return new Promise((resolve, reject) => {
        // Init Raspi-I2c
        const i2c = new I2C();

        // Init the ADC
        const adc = new ADS1x15({
            i2c,                                    // i2c interface
            chip: ADS1x15.chips.IC_ADS1015,         // chip model
            address: ADS1x15.address.ADDRESS_0x49,  // i2c address on the bus

            // Defaults for future readings
            pga: ADS1x15.pga.PGA_4_096V,            // power-gain-amplifier range
            sps: ADS1x15.spsADS1015.SPS_250         // data rate (samples per second)
        });


        const results = [];

        function readChannel(channel) {
            adc.readChannel(channel, (err, value, volts) => {
                if (err) {
                    reject(err);
                } else {
                    results.push({channel, value, volts});
                }
            });
        }

        // Read all channels
        for (let channel = 0; channel < 4; channel++) {
            readChannel(channel);
        }

        // Resolve the promise with the results array when all channels have been read
        resolve(results);
    });
}


app.get('/adc', async (req, res) => {
    try {
        const result = await readADC();
        res.send(result);
    } catch (err) {
        res.send(err);
    }
});


app.get('/adc2', async (req, res) => {
    try {
        const result = await readADC2();
        res.send(result);
    } catch (err) {
        res.send(err);
    }
});


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});