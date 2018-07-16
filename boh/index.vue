<template>
    <table>
        <thead>
        <tr>
            <th></th>
            <th>储值支付</th>
            <th>口碑券</th>
            <th>店铺券</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(rule, i) in defaultRuleList" :key="i">
            <td>{{ rule.name }}</td>
            <td v-for="(item, j) in rule.relationSide" :key="j">
            <span v-if="rule.type === item.type"> -- </span>
            <el-checkbox v-else v-model="item.checked" :disabled="item.disabled" @change="changeRelRule($event, i, j)"/>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import {discountsExplanation, ruleList, ruleSideList} from './constant.js'

export default {
    data() {
        return {
            defaultRuleList: ruleSideList()
        }
    },
    methods: {
        changeRelRule(flag, i, j) {
            if (i > 2) {
                let defaultRuleList = this.defaultRuleList
                let rule = defaultRuleList[i]
                let posType = rule.type
                let relType = rule.relationSide[j].type
                let x = defaultRuleList.findIndex(v => v.type === relType)
                let y = defaultRuleList[x].relationSide.findIndex(v => v.type === posType)
                this.defaultRuleList[x].relationSide[y].checked = flag
            }
        },
        getData() {
            let defaultRuleList = this.defaultRuleList
            tmpExclusionRuleDtoList.forEach(item => {
                let posType = item.positiveSide
                let relType = item.negativeSide
                let x = defaultRuleList.findIndex(v => v.type === posType)
                let y = defaultRuleList[x].relationSide.findIndex(v => v.type === relType)
                defaultRuleList[x].relationSide[y].checked = true
            })
            this.defaultRuleList = defaultRuleList
        }
    }
}
</script>

<style lang="scss" scoped>
    table{
      width: 60%;
      margin: 40px auto 0;
      border: 1px solid #ebeef5;
      border-collapse: collapse;

      tr td, tr th{
        border: 1px solid #ebeef5;
        padding: 6px 0 6px 15px;
        font-size: 12px;
        color: #666;
      }
    }
</style>


