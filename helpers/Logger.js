const util = require('util');
const moment = require('moment');
const winston = require('winston');
const { level } = require('winston');
const { format } = require('path');
const { json } = require('express/lib/response');

/**
 * Clase base para generar logs del sistema
 */
class Logger {

    /**
     * Constructor de la aplicación, crea instancias del mismo
     */
    constructor() {this.winstonLogger = winston.createLogger({ 
        levels : { error:1, warn: 2, info: 3 },
        transports: this._createTransports(),
        exitOnError: false
    })}

    info(message, data) { this.winstonLogger.info({ message, data }) };
    warn(message, data) { this.winstonLogger.warn({ message, data }) };
    error(message, data) { this.winstonLogger.error({ message, data })};

    /**
     * Configura los tipos de logs a generar.
     * @returns Array
     */
    _createTransports() { 
        const TRANSPORTS = []
        TRANSPORTS.push(new winston.transport.Console({
            format              :   winston.format.printf(this._consoleFormat()),
            level               :   'info',
            handleExceptions    : false,
            colorize            : false,
            json                : false
        }));

        Array.from(['info', 'warn', 'error']).forEach(level => {
            TRANSPORTS.push(new winston.transports.File({
                format           : winston.format.printf(this._fileFormat()),
                level,
                handleExceptions : false,
                colorize         : false,
                json             : true,
                filename         : `logs/${level}.log`,
                maxsize          : 5242880,
                maxFiles         : 5        
            }))
        });

        return TRANSPORTS
    }

    /**
     * Describe el formato de salida para la consola. 
     * @returns object
     */
    _consoleFormat () { 

        /**
         * Colores basados en la especificación RFC5424
         */
        const COLORS = {
            error : `\x1b[91m`, // LIGHT_RED
            warn  : `\x1b[93m`, // LIGHT_YELLOW
            info  : `\x1b[96m`, // LIGHT_CYAN
            reset : `\x1b[0m`,  // Restaura al color por defecto
        }

        return (info) => {
            const START     = COLORS[info.level]
            const END       = COLORS.reset
            const TIMESTAMP = moment().format('DD/MM/YYYY HH:mm:ss')
            const LEVEL     = info.level
            const MESSAGE   = info.message
            const DATA      = info.data ? util.inspect(info.data, false, null) : ''
            return `${START} ${TIMESTAMP} [${LEVEL}] ${MESSAGE} ${DATA} ${END}`
        }
    }

    /**
     * Describe el formato de salida para los ficheros de logs.
     * @returns string
     */
    _fileFormat() { 
        const TIMESTAMP = moment().format('DD/MM/YYYY HH:mm:ss')
        const LEVEL     = info.level
        const MESSAGE   = info.message
        const DATA      = info.data ? util.inspect(info.data, false, null) : null
        return JSON.stringify({
            timestamp : TIMESTAMP,
            level     : LEVEL,
            message   : MESSAGE,
            data      : DATA,
        })
    }
}

module.exports = Logger;