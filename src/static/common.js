const theme = ['brand', 'success', 'warning', 'error', 'info']
const tendency = ['success', 'warning', 'error', 'info']

const getThemeClass = (name) => {
    if (theme.indexOf(name) !== -1) {
        return name + '-theme theme'
    }
    return 'normal-theme'
}

const getTendencyClass = (name) => {
    if (tendency.indexOf(name) !== -1) {
        return name + '-tendency '
    }
    return 'normal-tendency '
}

export default {
    getThemeClass,
    getTendencyClass,
}