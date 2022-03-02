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

const tabInput = (event, dom) => {
    if(event.code !== "Tab") return true;

    event.preventDefault();

    let start = dom.selectionStart;
    let end = dom.selectionEnd;
    if(start === end){
        document.execCommand('insertText',false,"  ");
    }
    else{
        let strBefore = this.value.slice(0,start);
        let curLineStart = strBefore.includes('\n')?strBefore.lastIndexOf('\n')+1 : 0;
        let strBetween = this.value.slice(curLineStart,end+1);
        let newStr = "  " + strBetween.replace(/\n/g,'\n  ');
        let lineBreakCount = strBetween.split('\n').length;
        let newStart = start + 2;
        let newEnd = end + (lineBreakCount + 1)*2;

        dom.setSelectionRange(curLineStart,end);
        document.execCommand("insertText",false,newStr);
        dom.setSelectionRange(newStart,newEnd);
    }
}

export default {
    getThemeClass,
    getTendencyClass,
    tabInput,
}