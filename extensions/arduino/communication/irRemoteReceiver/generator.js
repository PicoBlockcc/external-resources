/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.iRReceiver_init = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.iRReceiver_init = '#include <IRremote.h>';
        Blockly.Arduino.definitions_.iRReceiver_init = `IRrecv iRReceiver(${pin});`;

        return `iRReceiver.enableIRIn();\n`;
    };

    Blockly.Arduino.iRReceiver_dataAvailable = function () {
        return ['iRReceiver.decode()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.iRReceiver_recivedCommand = function () {
        return ['iRReceiver.decodedIRData.command', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.iRReceiver_recivedHEX = function () {
        return ['iRReceiver.decodedIRData.decodedRawData, HEX', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.iRReceiver_recivedData = function () {
        return ['iRReceiver.decodedIRData.decodedRawData', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.iRReceiver_resume = function () {
        return 'iRReceiver.resume();\n';
    };

    return Blockly;
}

exports = addGenerator;
