import katex from 'katex'
import {marked} from "marked";

import Vue from "vue";
import MarkdownBlockCode from "./MarkdownBlockCode";

// eslint-disable-next-line no-unused-vars
const markdownBlockCodeConstructor = Vue.extend(MarkdownBlockCode)

const Markdown = function () {

    // noinspection JSUnusedGlobalSymbols
    const katexLaxer = {
        name: 'mathjax',
        level: 'inline',
        start(src) {
            return src.match(/\$.*\$/)?.index;
        },
        tokenizer(src) {
            const blockRule = /^([^$]*)\$\$([^$]*)\$\$(.*)$/
            const blockMatch = blockRule.exec(src)
            if (blockMatch) {
                return {
                    type: 'mathjax',
                    level: 'block',
                    raw: blockMatch[0],
                    left: this.lexer.inlineTokens(blockMatch[1].trim()),
                    text: blockMatch[2].trim(),
                    right: this.lexer.inlineTokens(blockMatch[3].trim()),
                }
            }

            const inlineRule = /^([^$]*)\$([^$]*)\$(.*)$/
            const inlineMatch = inlineRule.exec(src)
            if (inlineMatch) {
                return {
                    type: 'mathjax',
                    level: 'inline',
                    raw: inlineMatch[0],
                    left: this.lexer.inlineTokens(inlineMatch[1].trim()),
                    text: inlineMatch[2].trim(),
                    right: this.lexer.inlineTokens(inlineMatch[3].trim()),
                }
            }
        },
        renderer(token) {
            const left = this.parser.parseInline(token.left)
            const right = this.parser.parseInline(token.right)
            // noinspection JSUnresolvedFunction
            const html = katex.renderToString(token.text, {throwOnError: false})
            const math = token.level === 'block' ? `<div>${html}</div>` : html
            return `${left}${math}${right}`
        }
    }

    marked.use({extensions: [katexLaxer]});

    const renderStyle = new marked.Renderer();

    let mountId = 0
    let mountDist = {}
    renderStyle.code = function (code, language) {
        mountId++
        mountDist[mountId] = new markdownBlockCodeConstructor({
            data: {code: code, language: language}
        })
        return `<div id="MOUNT-${mountId}"></div>`
    }

    const markdownParser = function (text) {
        console.log(marked.lexer(text))
        return marked(text, {renderer: renderStyle})
    }

    const markdownMount = function () {
        for (const mountDistKey in mountDist) {
            mountDist[mountDistKey].$mount(document.getElementById(`MOUNT-${mountDistKey}`))
        }
        mountDist = {}
    }

    return function (Vue) {
        Vue.prototype.$markdown = markdownParser
        Vue.prototype.$renderer = markdownMount
    }
}

const install = Markdown()

export default {
    install
}