/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_IRRECEIVER_CATEGORY}" id="IRRECEIVER_CATEGORY" colour="#BB5E00" secondaryColour="#9F5000">
    <block type="iRReceiver_init" id="iRReceiver_init">
        <field name="PIN">5</field>
    </block>
    <block type="iRReceiver_dataAvailable" id="iRReceiver_dataAvailable">
    </block>
    <block type="iRReceiver_recivedCommand" id="iRReceiver_recivedCommand">
    </block>
    <block type="iRReceiver_recivedHEX" id="iRReceiver_recivedHEX">
    </block>
    <block type="iRReceiver_recivedData" id="iRReceiver_recivedData">
    </block>
    <block type="iRReceiver_resume" id="iRReceiver_resume">
    </block>
</category>`;
}

exports = addToolbox;
