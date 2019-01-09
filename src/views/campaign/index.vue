<template>
  <div class="tab-container">
    <div class="filter-container">
      <el-input :placeholder="$t('table.title')" style="width: 200px;" class="filter-item" />
      <el-select :placeholder="$t('table.importance')" clearable style="width: 90px" class="filter-item">
        <el-option />
      </el-select>
      <el-select :placeholder="$t('table.type')" clearable class="filter-item" style="width: 130px">
        <el-option />
      </el-select>
      <el-select style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option />
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" >{{ $t('table.search') }}</el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">{{ $t('table.export') }}</el-button>
    </div>
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key="item.key" :name="item.key">
        <keep-alive>
          <tab-pane v-if="activeName==item.key" :type="item.key" @create="showCreatedTimes"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tabPane from './components/tabPane'

export default {
  name: 'Tab',
  components: { tabPane },
  data() {
    return {
      tabMapOptions: [
        { label: 'Chiến dịch', key: 'CN' },
        { label: 'Đơn hàng', key: 'US' },
        { label: 'Traffic', key: 'JP' },
        { label: 'Doanh thu', key: 'EU' }
      ],
      activeName: 'CN',
      createdTimes: 0
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

<style scoped>
  .tab-container{
    margin: 30px;
  }
</style>
