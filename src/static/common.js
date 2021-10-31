const tendency = ['success', 'warning', 'error', 'info']

const getLightTypeColor = (name) => {
    if (tendency.indexOf(name) !== -1)
        return 'var(--light-' + name + '-color)'
    return 'var(--white-color)'
}

const getTypeColor = (name) => {
    if (tendency.indexOf(name) !== -1)
        return 'var(--' + name + '-color)'
    return 'var(--text-color)'
}

const getTendencyStyle = (name) => {
    return 'color: ' + getTypeColor(name) + ';' +
        'background-color: ' + getLightTypeColor(name) + ';'
}

export default {
    getLightTypeColor,
    getTypeColor,
    getTendencyStyle
}