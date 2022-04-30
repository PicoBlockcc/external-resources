const picoLab = formatMessage => ({
    name: 'PicoLabSensors',
    deviceId: 'picoLabSensors_arduinoUno',
    manufactor: 'Pico',
    learnMore: 'https://store.pico.ma/picolab',
    iconURL: 'asset/picoLabSensors.png',
    description: formatMessage({
        id: 'picoLabSensors.description',
        default: 'Pico Lab Sensors kit robot.'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/picoLabSensors-illustration.svg',
    connectionSmallIconURL: 'asset/picoLabSensors-small.svg',
    programMode: ['realtime', 'upload'],
    defaultProgramMode: 'upload',
    programLanguage: ['block', 'cpp'],
    tags: ['arduino', 'kit'],
    deviceExtensions: ['picoLabSensors', 'apds9960'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://www.pico.ma/'
});

module.exports = picoLab;
