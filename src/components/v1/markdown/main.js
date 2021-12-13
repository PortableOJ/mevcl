import katex from 'katex'
import {marked} from "marked";

import Vue from "vue";
import MarkdownBlockCode from "./MarkdownBlockCode";
import MarkdownInlineCode from "./MarkdownInlineCode";

// eslint-disable-next-line no-unused-vars
const markdownBlockCodeConstructor = Vue.extend(MarkdownBlockCode)
const markdownInlineCodeConstructor = Vue.extend(MarkdownInlineCode)

const Markdown = function () {

    // noinspection JSUnusedGlobalSymbols
    const katexLaxer = {
        name: 'mathjax',
        level: 'inline',
        start(src) {
            return src.match(/\$.*\$/)?.index;
        },
        tokenizer(src) {
            const blockRule = /^([^$]*)\$\$([^$]*)\$\$([\s\S]*)$/
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

            const inlineRule = /^([^$]*)\$([^$]*)\$([\s\S]*)$/
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

    /// region 美化
    const renderStyle = new marked.Renderer();

    let mountId = 0
    let mountDist = {}
    renderStyle.code = function (code, language) {
        mountId++
        mountDist[mountId] = new markdownBlockCodeConstructor({
            data: {code: code, language: language}
        })
        return `<div id="markdown-${mountId}"></div>`
    }

    // noinspection SpellCheckingInspection
    renderStyle.codespan = function (text) {
        mountId++
        mountDist[mountId] = new markdownInlineCodeConstructor({
            data: {code: text}
        })
        return `<span id="markdown-${mountId}"></span>`
    }

    renderStyle.blockquote = function (quote) {
        return `
            <div style="margin: 3px 1px;
                padding: 0 10px;
                border: 1px solid var(--border-color-level-1);
                border-left: 5px solid var(--border-color-level-1);
                border-radius: 5px;"
            >
                ${quote}
            </div>`
    }

    renderStyle.hr = function () {
        return `
            <div style="
                border-top: 3px solid var(--border-color-level-1);
                border-bottom: 3px solid var(--border-color-level-1);
                color: var(--border-color-level-1);
                text-align: center;
                height: 1px;
                border-radius: 3px;
                margin: 20px 0;
                position: relative;
            ">
                <div style="
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    padding: 0 5px;
                    background-color: white;
                    transform: translate(-50%, -50%);
                    color: var(--common-text-color);
                ">
                    §
                </div>
            </div>`
    }

    /// endregion

    const markdownParser = function (text) {
        return marked(text, {renderer: renderStyle})
    }

    const markdownMount = function () {
        for (const mountDistKey in mountDist) {
            mountDist[mountDistKey].$mount(`#markdown-${mountDistKey}`)
        }
        mountDist = {}
    }

    return function (Vue) {
        marked.setOptions({
            pedantic: false,
            gfm: true,
            breaks: true,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        });

        marked.use({extensions: [katexLaxer]});

        Vue.prototype.$markdown = markdownParser
        Vue.prototype.$renderer = markdownMount
    }
}

const install = Markdown()

export default {
    install
}