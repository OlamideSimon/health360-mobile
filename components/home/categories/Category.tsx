import { useRouter } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'
import { images } from '../../../constants'
import { styles } from './category.styles'

const Category = () => {
  return (
    <View style={{ marginTop: 31, gap: 35 }}>
      <View>
        <Text style={styles.title}>Consultation category</Text>
        <Text style={styles.description}>
          Which specialist would you like to connect with today?
        </Text>
      </View>

      <View style={styles.flex_container}>
        <Card
          title="Cardiology"
          bg_color="#ff0000"
          href="cardiology"
          icon={images.cardio}
        />
        <Card
          title="Hair Issues"
          bg_color="#DEFA6E"
          href="hair issues"
          icon={images.hair}
        />
        <Card
          title="General Checkup"
          bg_color="#900808"
          href="general checkup"
          icon={images.general}
        />
        <Card
          title="Optician"
          bg_color="#587DBD"
          href="optician"
          icon={images.optician}
        />
        <Card
          title="Dermatology"
          bg_color="#587DBD"
          href="dermatology"
          icon={images.derma}
        />
      </View>
    </View>
  )
}

const Card = ({
  bg_color,
  icon,
  href,
  title,
}: {
  bg_color: string
  icon: ImageData
  href: any
  title: string
}) => {
  const router = useRouter()

  return (
    <Pressable
      onPress={() => router.push(`/category/${href}`)}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ ...styles.card_background, backgroundColor: bg_color }}>
        <Image source={icon} />
      </View>

      <Text style={styles.card_title}>{title}</Text>
      <Text style={styles.card_description}>connect with specialist </Text>
    </Pressable>
  )
}

export default Category
