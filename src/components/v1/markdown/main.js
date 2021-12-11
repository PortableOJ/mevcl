import katex from 'katex'
import {marked} from "marked";

import 'katex/dist/katex.css'

const Markdown = function () {

    // noinspection JSUnusedGlobalSymbols
    const inlineKatex = {
        name: 'mathjaxInline',
        level: 'inline',
        start(src) {
            return src.match(/\$.*\$/)?.index;
        },
        tokenizer(src) {
            const rule = /^([^$]*)\$([^$]*)\$(.*)$/;
            const match = rule.exec(src);
            if (match) {
                return {
                    type: 'mathjaxInline',
                    raw: match[0],
                    left: this.lexer.inlineTokens(match[1].trim()),
                    text: match[2].trim(),
                    right: this.lexer.inlineTokens(match[3].trim()),
                };
            }
        },
        renderer(token) {
            const left = this.parser.parseInline(token.left)
            const right = this.parser.parseInline(token.right)
            if (token.text.length === 0) return `${left}${right}`
            // noinspection JSUnresolvedFunction
            const html = katex.renderToString(token.text, {throwOnError: false})
            return `${left}${html}${right}`
        }
    }

    marked.use({extensions: [inlineKatex]});

    const markdownParser = function (text) {
        return marked(text)
    }

    return function (Vue) {
        Vue.prototype.$markdown = markdownParser
    }
}

const install = Markdown()

export default {
    install
}