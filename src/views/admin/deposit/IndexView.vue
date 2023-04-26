<template>
  <n-alert title="Oppsss!!" type="error" closable>
    {{ error }}
  </n-alert>
  <n-data-table
    class="mt-5"
    :bordered="false"
    :single-line="false"
    :columns="columns"
    :data="data"
    :pagination="pagination"
  />
</template>

<script>
  import { h, defineComponent, onMounted, ref } from 'vue'
  import { NButton } from 'naive-ui'
  import { useRouter } from 'vue-router'
  import DepositService from "@/services/deposit.service"

  export default defineComponent({
    props: [],
    setup () {
      const mapCurrencys = {
        "iso4217:USD": "USD",
        "stellar:NPC:GDPVRONWGXB4KS36PANZIGW2USNA4OMMPAZBEQ427GLGDSLI3FGB4QQP": "NPC",
      }
      const data = ref([])
      const loading = ref(true)
      const error = ref(null)
      const router = useRouter()

      const queryDeposits = async () => {
        loading.value = true
        const res = await DepositService.getDeposits()
        if (res.isOk) {
          // data.value = res.data
          data.value = [
            {
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
            }
          ]
        } else {
          error.value = res.message
        }
        loading.value = false
      }
      const mutationCompleteDeposit = async (id) => {
        loading.value = true
        const res = await DepositService.completeDeposit(id)
        if (res.isOk) {
          data.value = data.value.filter(row => row.id != id)
        } else {
          error.value = res.message
        }
        loading.value = false
      }
      const handleGoto = (row) => {
        window.open(row.more_info_url, "_blank")
      }
      const createColumns = () => {
        return [
          {
            title: 'Id',
            key: 'id'
          },
          {
            title: 'Depósito',
            key: 'amount_in',
            render: (row) => `${row.amount_in} ${mapCurrencys[row.amount_in_asset]}`
          },
          {
            title: 'Recibe',
            key: 'amount_out',
            render: (row) => `${row.amount_out} ${mapCurrencys[row.amount_out_asset]}`
          },
          {
            title: 'Comisión',
            key: 'amount_out',
            render: (row) => `${row.amount_fee} ${mapCurrencys[row.amount_fee_asset]}`
          },
          {
            title: 'Cuenta destino',
            key: 'destiny_source',
            render: (row) => h(
              NButton,
              {
                quaternary: true,
                type: "primary",
                onClick: () => router.push({name: 'account-detail', params: {id: row.to }})
              },
              { default: () => row.to }
            )
          },
          {
            title: 'Action',
            key: 'actions',
            render (row) {
              return h(
                'div',
                {},
                [
                  h(
                    NButton,
                    {
                      type: "primary",
                      onClick: () => handleGoto(row)
                    },
                    { default: () => 'Detalles' }
                  ),
                  h(
                    NButton,
                    {
                      class: "ml-1",
                      type: "primary",
                      onClick: () => mutationCompleteDeposit(row.id)
                    },
                    { default: () => 'Procesar' }
                  )
                ]
              )
            }
          }
        ]
      }

      onMounted(() => {
        queryDeposits()
      })

      return {
        data,
        loading,
        error,
        columns: createColumns(),
      }
    }
  })
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
