import { Dimensions, FlatList, Text, View } from 'react-native'

import { useState } from 'react'
import { HOME_DUMMY_TEXTS } from '../../../constants'
import { styles } from './services.styles'

const Services = () => {
  const [currentDotIndex, setCurrentDotIndex] = useState(0)

  const { width } = Dimensions.get('window')

  return (
    <View style={{ marginTop: 34 }}>
      <FlatList
        // style={{ borderRadius: 10 }}
        data={HOME_DUMMY_TEXTS.homeHeaderPosts}
        ItemSeparatorComponent={() => <View style={{ padding: 2 }}></View>}
        renderItem={({ item }) => (
          <View
            style={{
              ...styles.service_card,
              width: width - 26 * 2,
              // width: '100%',
              // width: currentIndex === Number(item?.id) ? '100%' : 'auto',
            }}
          >
            <Text style={styles.card_title}>{item.title}</Text>
            <Text style={styles.card_description}>{item.content}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        disableIntervalMomentum
        scrollEventThrottle={200}
        centerContent
        onMomentumScrollEnd={(event) => {
          setCurrentDotIndex(
            Math.ceil(event.nativeEvent.contentOffset.x / width)
          )
        }}
      />

      <View
        style={{
          paddingTop: 10,
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 4,
        }}
      >
        {/* <View style={styles.inActiveCarouselIndicator}></View>
        <View style={styles.inActiveCarouselIndicator}></View>
        <View style={styles.inActiveCarouselIndicator}></View> */}
        {new Array(HOME_DUMMY_TEXTS.homeHeaderPosts.length)
          .fill(0)
          .map((_, index) => (
            <View
              key={index}
              style={
                currentDotIndex === index
                  ? styles.activeCarouselIndicator
                  : styles.inActiveCarouselIndicator
              }
            ></View>
          ))}
      </View>
    </View>
  )
}

export default Services
