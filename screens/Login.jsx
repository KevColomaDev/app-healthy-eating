import { Text, View, TextInput, Pressable, Image } from 'react-native'
import { Link } from 'expo-router'
import { useForm, Controller } from 'react-hook-form'
import topImage from '../assets/topImage.png'
import buttonImage from '../assets/buttonImage.png'

export const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <View className='flex-1 justify-between'>
      <View>
        <Image source={topImage} resizeMode="stretch"  className="w-full h-20"/>
      </View>
      <View className="items-center gap-7">
        <Text className="text-3xl font-bold text-center text-orange-500">Bienvenido</Text>
        <View className="items-center">
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput className="w-48 border border-black-500 rounded-lg text-center"
                placeholder="jondo@example.com"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          <Text className="text-red-500 h-6">{errors.email && "Email is required"}</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput className="w-48 border border-black-500 rounded-lg text-center"
                placeholder="********"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
              />
            )}
            name="password"
          />
          <Text className="text-red-500 h-6">{errors.password && "Password is required"}</Text>

          <Pressable className="h-8 w-40 bg-orange-800 rounded-xl justify-center items-center" onPress={handleSubmit(onSubmit)}>
            <Text className="text-white font-bold">Iniciar Sesion</Text>
          </Pressable>
        </View>
      </View>
      <View className="items-center">
        <Text>Si no tienes cuenta, <Link href="/register" asChild><Text className="text-orange-500">registrate</Text></Link></Text>
      </View>
      <View>
        <Image source={buttonImage} resizeMode="stretch"  className="w-full h-20"/>
      </View>
    </View>
  )
}