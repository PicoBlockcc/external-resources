/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_PASSIVEBUZZER_CATEGORY}" id="PASSIVEBUZZER_CATEGORY" colour="#B943FF" secondaryColour="#9900FF">
    <block type="passiveBuzzer_init" id="passiveBuzzer_init">
        <field name="PIN">3</field>
    </block>
    <block type="passiveBuzzer_playBiptone" id="passiveBuzzer_playBiptone">
    </block>
    <block type="passiveBuzzer_playBuzzertone" id="passiveBuzzer_playBuzzertone">
    </block>
    <block type="passiveBuzzer_stopBuzzertone" id="passiveBuzzer_stopBuzzertone">
    </block>
    <block type="passiveBuzzer_setTempo" id="passiveBuzzer_setTempo">
        <value name="BPM">
            <shadow type="math_whole_number">
                <field name="NUM">120</field>
            </shadow>
        </value>
    </block>
    <block type="passiveBuzzer_playRingtone" id="passiveBuzzer_playRingtone">
    </block>
    <block type="passiveBuzzer_playToneForBeat" id="passiveBuzzer_playToneForBeat">
        <field name="FREQ">note_C4</field>
    </block>
</category>`;
}

exports = addToolbox;
