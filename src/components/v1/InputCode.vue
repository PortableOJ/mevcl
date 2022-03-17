<template>
    <div>
        <textarea :placeholder="placeholder" ref="code" style="display: none"></textarea>
    </div>
</template>

<script>

// Introduce global instance
import CodeMirror from 'codemirror'
// Core style
import 'codemirror/lib/codemirror.css'
// After the theme is introduced, you need to specify the theme in options to take effect
import 'codemirror/theme/idea.css'

// You need to introduce a specific syntax highlighting library to have the corresponding syntax highlighting effect
// codemirror officially supports dynamic loading of corresponding syntax highlight library through / addon/mode/loadmode.js and / mode/meta.js
// However, vue does not seem to be able to dynamically load the corresponding JS after instance initialization, so the corresponding JS is introduced in advance here
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/gfm/gfm'

//Code completion prompt
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';

import 'codemirror/addon/display/placeholder'

export default {
    name: "InputCode",
    props: {
        /**
         * c: text/x-csrc
         * C++: text/x-c++src
         * Java: text/x-java
         * C#: text/x-csharp
         * markdown: text/x-markdown
         * gfm: gfm
         */
        mode: String,
        placeholder: String,
        value: {
            type: String,
            default: ''
        },
    },
    mounted() {
        // noinspection JSUnresolvedFunction
        this.coder = CodeMirror.fromTextArea(this.$refs.code, {
            // Indentation format
            tabSize: 4,
            // Subject, corresponding subject library JS needs to be introduced in advance
            theme: 'idea',
            // set number
            lineNumbers: true,
            mode: this.mode,
            matchBrackets: true,
            hintOptions: {
                completeSingle: false
            },
            line: true,
            highlightFormatting: true,
            extraKeys: {"Ctrl": "autocomplete"},
        });
        this.coder.on("cursorActivity", () => {
            this.$emit('change', this.coder.getValue())
        });
        this.coder.on('inputRead', (instance, changeObj) => {
            if (/^[a-zA-Z]+$/.test(changeObj.text[0])) {
                this.coder.showHint();
            }
        })
        this.coder.setValue(this.value)
    },
}
</script>

<style scoped>

</style>