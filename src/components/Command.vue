<template>
    <div v-html="highlightCmd(command.toUpperCase())">
    </div>
</template>

<script>
    function highlightCmdSyntax(cmd) {
        const command = /(^[a-zA-z]{5})/g
        const symbol = /([:,;])/g
        const number = /(\d+)/g
        const cmdBlocks = cmd.split(symbol)
        cmdBlocks.forEach((element, idx) => {
            if (idx === 0) {
                cmdBlocks[idx] = element.replace(command, '<span class="command">$1</span>')
            } else {
                const paramValue = element.split(/=/)
                if (paramValue[0].match(symbol)) {
                    cmdBlocks[idx] = element.replace(symbol, '<span class="symbol">$1</span>')
                } else {
                    paramValue[0] = `<span class="parameter">${paramValue[0]}</span>`
                    let right = ''
                    if (paramValue[1]) {
                        paramValue[1] = paramValue[1].replace(number, '<span class="number">$1</span>')
                        paramValue[1] = `<span class="value">${paramValue[1]}</span>`
                        right = `<span class="symbol">=</span>${paramValue[1]}`
                    }
                    cmdBlocks[idx] = `${paramValue[0]}${right}`
                }
            }
        })
        return cmdBlocks.join('')
    }


    export default {
        name: 'Command',
        props: {
            command: String
        },
        methods: {
            highlightCmd(c) {
                return highlightCmdSyntax(c)
            }
        }
    }
</script>

<style>
    span.command {
        color: blue;
        font-weight: bold;
    }

    span.symbol {
        color: green;
    }

    span.value {
        color: darkred;
    }

    span.parameter {
        color: darkorange;
    }

    span.number {
        color: indigo;
    }
</style>