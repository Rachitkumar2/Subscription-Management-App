import { View, Text } from 'react-native'
import React from 'react'

const SubscriptionCard = ({name, price , currency, icon, billing}:SubscriptionCardProps) => {
  return (
    <View className='subscription-card'>
      <Text>SubscriptionCard</Text>
    </View>
  )
}

export default SubscriptionCard