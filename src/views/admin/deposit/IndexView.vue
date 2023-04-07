<template>
  <div
    v-if="error"
    class="mb-5 text-lg text-left bg-red-500 text-white p-2 rounded"
  >
    {{ error }}
  </div>
  <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%"
    empty-text="No existen depósitos"
  >
    <el-table-column label="Id">
      <template #default="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Depósito">
      <template #default="scope">
        <span>{{ drawDepositIn(scope.row) }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Recibe">
      <template #default="scope">
        <span>{{ drawDepositGet(scope.row) }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Comisión">
      <template #default="scope">
        <span>{{ drawFee(scope.row) }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Cuenta destino">
      <template #default="scope">
        <span>{{ scope.row.to }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleGoto(scope.row)"
          >Detalles</el-button
        >
        <el-button
          size="small"
          type="success"
          @click="handleComplete(scope.row.id)"
          >Procesar</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import DepositService from "@/services/deposit.service";

const mapCurrencys = {
  "iso4217:USD": "USD",
  "stellar:NPC:GDPVRONWGXB4KS36PANZIGW2USNA4OMMPAZBEQ427GLGDSLI3FGB4QQP": "NPC",
};

export default {
  name: "DepositView",
  data() {
    return {
      tableData: [],
      loading: false,
      error: null,
    };
  },
  async mounted() {
    await this.queryDeposits();
  },
  methods: {
    queryDeposits: async function () {
      this.loading = true;
      const res = await DepositService.getDeposits();
      if (res.isOk) {
        this.tableData = res.data;
      } else {
        this.error = res.message;
      }
      this.loading = false;
    },
    mutationCompleteDeposit: async function (id) {
      this.loading = true;
      const res = await DepositService.completeDeposit(id);
      if (res.isOk) {
        await this.queryDeposits();
      } else {
        this.error = res.message;
        this.loading = false;
      }
    },
    drawFee: function (row) {
      return `${row.amount_fee} ${mapCurrencys[row.amount_fee_asset]}`;
    },
    drawDepositIn: function (row) {
      return `${row.amount_in} ${mapCurrencys[row.amount_in_asset]}`;
    },
    drawDepositGet: function (row) {
      return `${row.amount_out} ${mapCurrencys[row.amount_out_asset]}`;
    },
    handleGoto: function (row) {
      window.open(row.more_info_url, "_blank");
    },
    handleComplete: async function (row) {
      await this.mutationCompleteDeposit(row.id);
    },
  },
};
</script>

<!-- {
  id: "50530e2d-c539-4e31-842b-45a7aff44055",
  status: "pending_user_transfer_start",
  status_eta: null,
  amount_in: "10000.00",
  amount_out: "11529.41",
  amount_fee: "200.00",
  started_at: "2023-04-07T12:01:24.471228Z",
  completed_at: null,
  stellar_transaction_id: null,
  external_transaction_id: null,
  more_info_url:
    "https://anchor.novapocket.com/sep24/transaction/more_info?id=50530e2d-c539-4e31-842b-45a7aff44055",
  refunded: false,
  message: "waiting on the user to transfer funds",
  claimable_balance_id: null,
  to: "GAZ4CLW4TFNWH73SEW5VZNLGOZ5FLOAHI2I5U76JGLRS3F4EBELK5ARD",
  from: null,
  deposit_memo_type: "hash",
  deposit_memo: null,
  amount_in_asset: "iso4217:USD",
  amount_out_asset:
    "stellar:NPC:GDPVRONWGXB4KS36PANZIGW2USNA4OMMPAZBEQ427GLGDSLI3FGB4QQP",
  amount_fee_asset: "iso4217:USD",
}, -->
