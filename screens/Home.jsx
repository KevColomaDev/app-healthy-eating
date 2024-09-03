import { Text, View, Image, Pressable, ImageBackground } from 'react-native'
import { Link } from 'expo-router'
import topImage from '../assets/topImage.png'
import buttonImage from '../assets/buttonImage.png'
import dish from '../assets/dish.png'
export const Home = () => {
  return (
    <>
      <View>
        <Image source={topImage} resizeMode="stretch"  className="w-full h-20"/>
      </View>
      <View className="m-5">
        <Text className="text-5xl font-bold text-center text-orange-500">FRUTANITA</Text>
        <Text className="text-2xl font-bold text-center tracking-[5px] text-orange-700">Ensaladas - delivery</Text>
      </View>
      <View>
        <Image source={buttonImage} resizeMode="stretch"  className="w-full h-20"/>
      </View>
      <View className="my-5">
        <Text className="text-base font-bold text-center text-orange-500">¡Crea la ensalada perfecta con tus frutas favoritas!</Text>
      </View>
      <View>
        <ImageBackground source={dish} resizeMode="stretch"  className="w-full h-80">
          <Link asChild href="/login">
            <Pressable className='flex items-center justify-center -my-1.5'>
              <Text className="bg-yellow-400 text-orange-500 text-1xl font-bold text-center w-40 rounded-3xl">ORDENA AHORA</Text>
            </Pressable>
          </Link>
        </ImageBackground>
      </View>
    </>
  )
}
