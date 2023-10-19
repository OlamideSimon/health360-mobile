import { View } from 'react-native'

import AppContainer from '../../components/AppContainer'
import Category from '../../components/home/categories/Category'
import Header from '../../components/home/header/header'
import Services from '../../components/home/services/services'

const Home = () => {
  return (
    <AppContainer hideHeader>
      <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 24 }}>
        <Header />
        <Services />
        <Category />
      </View>
    </AppContainer>
  )
}

export default Home
