/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_IRON_KIT_CATEGORY}" id="IRON_KIT_CATEGORY" colour="#e84529" secondaryColour="#af201d">
    <block type="picoLabSensors_setBuzzer" id="picoLabSensors_setBuzzer">
    </block>
    <block type="picoLabSensors_init" id="picoLabSensors_init">
    </block>
    <block type="picoLabSensors_setMotorSpeed" id="picoLabSensors_setMotorSpeed">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="picoLabSensors_stopMotor" id="picoLabSensors_stopMotor">
    </block>
    <block type="picoLabSensors_setServoDegree" id="picoLabSensors_setServoDegree">
        <value name="degree">
            <shadow type="math_angle">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
    <block type="picoLabSensors_setRgbLedColor" id="picoLabSensors_setRgbLedColor">
        <value name="colour">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <sep gap="36"/>
    <block type="picoLabSensors_ps2ReadData" id="picoLabSensors_ps2ReadData">
    </block>
    <block type="picoLabSensors_ps2GetButton" id="picoLabSensors_ps2GetButton">
    </block>
    <block type="picoLabSensors_ps2GetJoystick" id="picoLabSensors_ps2GetJoystick">
    </block>
    <sep gap="36"/>
    <block type="picoLabSensors_rgbUltrasonicInit" id="picoLabSensors_rgbUltrasonicInit">
        <field name="ultraPin">A2</field>
        <field name="rgbPin">A3</field>
    </block>
    <block type="picoLabSensors_rgbUltrasonicSetColorStyle" id="picoLabSensors_rgbUltrasonicSetColorStyle">
        <value name="colour">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="picoLabSensors_rgbUltrasonicReadDistance" id="picoLabSensors_rgbUltrasonicReadDistance">
    </block>
</category>
`;
}

exports = addToolbox;
