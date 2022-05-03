const picoLabSensors = () => ({
    name: 'Pico Lab Sensors',
    extensionId: 'picoLabSensors',
    version: '1.0.0',
    supportDevice: ['picoLabSensors_arduinoUno'],
    author: 'SMART INDUSTRIAL TECHNOLOGY',
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://www.pico.ma'
});

module.exports = picoLabSensors;
