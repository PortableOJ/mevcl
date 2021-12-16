<template>
    <div>
        <table class="content-table">
            <thead>
            <tr>
                <th v-for="(item, index) in head" :key="index"
                    :style="item.width === undefined ? '' : `min-width: ${item.width}px`">
                    <slot :name="'head-' + item.value" v-bind:data="item">
                        {{ item.label }}
                    </slot>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in data" :key="index">
                <td v-for="(line, col) in head" :key="col">
                    <slot :name="'body-' + line.label" v-bind:data="item">
                        {{ item[line.value] }}
                    </slot>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Table",
    props: {
        head: Array,
        data: Array
    }
}
</script>

<style scoped>
.content-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    width: 100%;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: var(--focus-shadowbox);
}

.content-table thead tr {
    background-color: var(--very-light-brand-color);
    color: var(--common-text-color);
    text-align: center;
    font-weight: bold;
}

.content-table th,
.content-table td {
    padding: 12px 15px;
}

.content-table td * {
    vertical-align: middle;
    display: inline-block;
}

.content-table tbody tr {
    border-bottom: 1px solid var(--border-color-level-1);
}

.content-table tbody tr:nth-of-type(even) {
    background-color: var(--border-color-level-3);
}

.content-table tbody tr:last-of-type {
    border-bottom: 2px solid var(--very-light-brand-color);
}

.content-table tbody tr:hover {
    background-color: var(--border-color-level-2);
}
</style>
