/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#00D7B0';

    Blockly.Blocks.picoLabSensors_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PICOLABSENSORS_INIT,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.picoLabSensors_setServoDegree = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PICOLABSENSORS_SETSERVODEGREE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'port',
                        options: [
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'degree'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.picoLabSensors_setMotorSpeed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PICOLABSENSORS_SETMOTORSPEED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'port',
                        options: [
                            ['M1', '1'],
                            ['M2', '2'],
                            ['M3', '3'],
                            ['M4', '4']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'dir',
                        options: [
                            [Blockly.Msg.PICOLABSENSORS_FORWARD, 'FORWARD'],
                            [Blockly.Msg.PICOLABSENSORS_BACKWARD, 'BACKWARD']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'speed'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.picoLabSensors_stopMotor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PICOLABSENSORS_STOPMOTOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'port',
                        options: [
                            ['M1', '1'],
                            ['M2', '2'],
                            ['M3', '3'],
                            ['M4', '4']
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.picoLabSensors_setRgbLedColor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PICOLABSENSORS_SETRGBLEDCOLOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'no',
                        options: [
                            [Blockly.Msg.PICOLABSENSORS_ALL, '(E_RGB_INDEX)0'],
                            [Blockly.Msg.PICOLABSENSORS_LEFT, '(E_RGB_INDEX)2'],
                            [Blockly.Msg.PICOLABSENSORS_RIGHT, '(E_RGB_INDEX)1']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'colour'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.picoLabSensors_setBuzzer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PICOLABSENSORS_SETBUZZER,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'sound',
                        options: [
                            [Blockly.Msg.PICOLABSENSORS_SOUND_CONNECT, '0'],
                            [Blockly.Msg.PICOLABSENSORS_SOUND_DISCONNECT, '1'],
                            [Blockly.Msg.PICOLABSENSORS_SOUND_BUTTON, '2'],
                            [Blockly.Msg.PICOLABSENSORS_SOUND_MODE, '3'],
                            [Blockly.Msg.PICOLABSENSORS_SOUND_SUPERRISE, '6'],
                            [Blockly.Msg.PICOLABSENSORS_SOUND_OHOH, '7'],
                            [Blockly.Msg.PICOLABSENSORS_SOUND_OHOH2, '8'],
                            [Blockly.Msg.PICOLABSENSORS_SOUND_CUTE, '9'],
                            [Blockly.Msg.PICOLABSENSORS_SOUND_HAPPY, '11'],
                            [Blockly.Msg.PICOLABSENSORS_SOUND_SAD, '14'],
                            [Blockly.Msg.PICOLABSENSORS_SOUND_SAD2, '15']
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.picoLabSensors_ps2ReadData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PICOLABSENSORS_PS2READDATA,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.picoLabSensors_ps2GetButton = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PICOLABSENSORS_PS2GETBUTTON,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'button',
                        options: [
                            [Blockly.Msg.PICOLABSENSORS_PS2_UP, '16'],
                            [Blockly.Msg.PICOLABSENSORS_PS2_DOWN, '64'],
                            [Blockly.Msg.PICOLABSENSORS_PS2_LEFT, '128'],
                            [Blockly.Msg.PICOLABSENSORS_PS2_RIGHT, '32'],
                            [Blockly.Msg.PICOLABSENSORS_PS2_TRIANGLE, '4096'],
                            [Blockly.Msg.PICOLABSENSORS_PS2_CIRCLE, '8192'],
                            [Blockly.Msg.PICOLABSENSORS_PS2_CROSS, '16384'],
                            [Blockly.Msg.PICOLABSENSORS_PS2_SQUARE, '32768'],
                            ['L1', '1024'],
                            ['L2', '256'],
                            ['L3', '2'],
                            ['R1', '2048'],
                            ['R2', '512'],
                            ['R3', '4'],
                            [Blockly.Msg.PICOLABSENSORS_PS2_SELECT, '1'],
                            [Blockly.Msg.PICOLABSENSORS_PS2_START, '8']
                        ]
                    }
                ],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.picoLabSensors_ps2GetJoystick = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PICOLABSENSORS_PS2GETJOYSTICK,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'joystick',
                        options: [
                            ['LX', '7'],
                            ['LY', '8'],
                            ['RX', '5'],
                            ['RY', '6']
                        ]
                    }
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.picoLabSensors_rgbUltrasonicInit = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PICOLABSENSORS_RGBULTRASONICINIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'ultraPin',
                        options: [
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['A2', 'A2'],
                            ['A3', 'A3']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'rgbPin',
                        options: [
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['A2', 'A2'],
                            ['A3', 'A3']
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.picoLabSensors_rgbUltrasonicSetColorStyle = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PICOLABSENSORS_RGBULTRASONICSETCOLORSTYLE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'no',
                        options: [
                            [Blockly.Msg.PICOLABSENSORS_ALL, 'E_RGB_ALL'],
                            [Blockly.Msg.PICOLABSENSORS_LEFT, 'E_RGB_LEFT'],
                            [Blockly.Msg.PICOLABSENSORS_RIGHT, 'E_RGB_RIGHT']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'colour'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'style',
                        options: [
                            [Blockly.Msg.PICOLABSENSORS_NONE, 'E_EFFECT_NONE'],
                            [Blockly.Msg.PICOLABSENSORS_BREATHING, 'E_EFFECT_BREATHING'],
                            [Blockly.Msg.PICOLABSENSORS_ROTATE, 'E_EFFECT_ROTATE'],
                            [Blockly.Msg.PICOLABSENSORS_FLASH, 'E_EFFECT_FLASH']
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.picoLabSensors_rgbUltrasonicReadDistance = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PICOLABSENSORS_RGBULTRASONICREADDISTANCE,
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
