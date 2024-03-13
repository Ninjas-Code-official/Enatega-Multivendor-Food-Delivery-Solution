import React, { useContext } from 'react'
import { View, FlatList, Text, Image } from 'react-native'
import styles from './styles'
import TextDefault from '../../Text/TextDefault/TextDefault'
import { alignment } from '../../../utils/alignment'
import ThemeContext from '../../../ui/ThemeContext/ThemeContext'
import { theme } from '../../../utils/themeColors'

import { LocationContext } from '../../../context/Location'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { topRatedVendorsInfo } from '../../../apollo/queries'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'

const TOP_BRANDS = gql`
  ${topRatedVendorsInfo}
`

function TopBrands(props) {
  const { location } = useContext(LocationContext)
  const themeContext = useContext(ThemeContext)
  const currentTheme = theme[themeContext.ThemeValue]
  const navigation = useNavigation()

  const { loading, error, data } = useQuery(TOP_BRANDS, {
    variables: {
      latitude: location?.latitude,
      longitude: location?.longitude
    }
  })

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles().topbrandsContainer}
      onPress={() => navigation.navigate('Restaurant', { ...item })}>
      <View style={styles().brandImgContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles().brandImg}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <TextDefault
          style={styles().brandName}
          textColor={currentTheme.fontThirdColor}
          H5
          bolder>
          {item?.name}
        </TextDefault>
        <TextDefault textColor={currentTheme.fontFifthColor} normal>
          {item?.deliveryTime + ' Mins'}
        </TextDefault>
      </View>
    </TouchableOpacity>
  )

  if (loading) return <Text style={styles().margin}>Loading...</Text>
  if (error) return <Text style={styles().margin}>Error: {error.message}</Text>

  return (
    <View style={styles().topbrandsSec}>
      <TextDefault
        numberOfLines={1}
        textColor={currentTheme.fontFourthColor}
        bolder
        H4>
        Top Brands
      </TextDefault>
      <View style={{ ...alignment.PRsmall }}>
        <FlatList
          data={data?.topRatedVendors}
          renderItem={renderItem}
          keyExtractor={item => item?._id}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      </View>
    </View>
  )
}

export default TopBrands