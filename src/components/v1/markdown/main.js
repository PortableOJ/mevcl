import katex from 'katex'
import {marked} from "marked";

import Vue from "vue";
import MarkdownBlockCode from "./MarkdownBlockCode";
import MarkdownInlineCode from "./MarkdownInlineCode";

import 'katex/dist/katex.css'
import './markdownStyle.css'

const markdownBlockCodeConstructor = Vue.extend(MarkdownBlockCode)
const markdownInlineCodeConstructor = Vue.extend(MarkdownInlineCode)

const Markdown = function () {

    // noinspection JSUnusedGlobalSymbols
    const katexLaxer = {
        name: 'mathjax',
        level: 'inline',
        start(src) {
            let tmp = src.match(/(^|[^\\])\$.*[^\\]\$/)
            return tmp && tmp.index;
        },
        tokenizer(src) {
            const blockRule = /^(^|[^$]*[^\\])\$\$((?:[\s\S]*?[^\\])??)\$\$([\s\S]*)$/
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

            const inlineRule = /^(^|[^$]*[^\\])\$((?:[\s\S]*?[^\\])??)\$([\s\S]*)$/
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
            const math = token.level === 'block' ? `<div style="text-align: center">${html}</div>` : html
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
        return `<div class="markdown-block-quote">${quote}</div>`
    }

    renderStyle.hr = function () {
        return `<div class="markdown-hr-box"><div class="markdown-hr-logo">§</div></div>`
    }

    // noinspection SpellCheckingInspection
    renderStyle.listitem = function (text) {
        if (text.match(/<input/)) return `<li class="markdown-checkbox-list-item">${text}</li>`
        return `<li>${text}</li>`
    }

    renderStyle.checkbox = function (checked) {
        return `<input type="checkbox" ${checked ? 'checked' : ''} class="markdown-checkbox" disabled>`
    }

    renderStyle.table = function (header, body) {
        return `<table class="markdown-table">
                    <thead>${header}</thead>
                    <tbody>${body}</tbody>
                </table>`
    }

    renderStyle.link = function (href, title, text) {
        return `<a href="${href}" class="markdown-link">${text}</a>`
    }

    renderStyle.image = function (href, title, text) {
        return `<img class="markdown-image" src="${href}" alt="${title}" title="${text}" />
                <div class="markdown-image-title">${text}</div>`
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
        marked.use({extensions: [katexLaxer]});

        Vue.prototype.$markdown = markdownParser
        Vue.prototype.$renderer = markdownMount
    }
}

const install = Markdown()

export default {
    install
}