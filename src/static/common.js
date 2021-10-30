const getLightTypeColor = (name) => {
    return 'var(--light-' + name + '-color)'
}

const getTypeColor = (name) => {
    return 'var(--' + name + '-color)'
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