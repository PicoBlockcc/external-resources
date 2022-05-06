/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#BB5E00';
    const secondaryColour = '#9F5000';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.iRReceiver_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IRRECEIVER_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins

                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.iRReceiver_dataAvailable = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IRRECEIVER_DATAAVAILABLE,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.iRReceiver_recivedCommand = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IRRECEIVER_RECIVEDCOMMAND,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.iRReceiver_recivedHEX = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IRRECEIVER_RECIVEDHEX,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.iRReceiver_recivedData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IRRECEIVER_RECIVEDDATA,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.iRReceiver_resume = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.IRRECEIVER_RESUME,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
