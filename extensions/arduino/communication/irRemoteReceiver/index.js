const iRReceiver = formatMessage => ({
    name: formatMessage({
        id: 'iRReceiver.name',
        default: 'IR Receiver'
    }),
    extensionId: 'iRReceiver',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'picoLabSensors'],
    author: 'ArthurZheng',
    iconURL: `asset/iRReceiver.png`,
    description: formatMessage({
        id: 'iRReceiver.description',
        default: 'Receiving and decoding data in infrared carrier.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['communication'],
    helpLink: 'https://pico.ma/irreceiver'
});

module.exports = iRReceiver;
