export const positiveSide = [
    {
      name: '优惠活动',
      type: 'ACTIVITY',
      forbidCheck: ['KOUBEI_COUPON']
    },
    {
      name: '会员价',
      type: 'MEMBER_PRICE',
      forbidCheck: []
    },
    {
      name: '折扣',
      type: 'DISCOUNT',
      forbidCheck: []
    },
    {
      name: '储值支付',
      type: 'STORE_PAY',
      forbidCheck: []
    },
    {
      name: '口碑券',
      type: 'KOUBEI_COUPON',
      forbidCheck: ['SHOP_COUPON']
    },
    {
      name: '店铺券',
      type: 'SHOP_COUPON',
      forbidCheck: ['KOUBEI_COUPON']
    }
  ]
  
  export const negativeSide = [
    {
      name: '储值支付',
      type: 'STORE_PAY',
      checked: null,
      disabled: null
    },
    {
      name: '口碑券',
      type: 'KOUBEI_COUPON',
      checked: null,
      disabled: null
    },
    {
      name: '店铺券',
      type: 'SHOP_COUPON',
      checked: null,
      disabled: null
    }
  ]
  
  export const ruleSideList = () => {
    return positiveSide.map(pos => {
      let relationSide = JSON.parse(JSON.stringify(negativeSide))
      relationSide.forEach(rel => {
        if (pos.forbidCheck.includes(rel.type)) {
          rel.checked = true
          rel.disabled = true
        }
      })
      return {
        ...pos,
        relationSide
      }
    })
  }