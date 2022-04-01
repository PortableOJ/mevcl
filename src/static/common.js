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

//判断系统类型
const isMac = () => {
    const agent = navigator.userAgent.toLowerCase();
    const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
    if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
        return false
    }
    if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
        return false
    }
    return isMac;
}


export default {
    getThemeClass,
    getTendencyClass,
    isMac,
}