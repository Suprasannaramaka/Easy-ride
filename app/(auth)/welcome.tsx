import { router } from 'expo-router';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import { useRef , useState} from 'react';
import {onboarding} from '@/constants';
const Onboarding = () =>
{
  const swiperRef = useRef<Swiper>(null);
  const[activeIndex , setActiveIndex] = useState(0);
    return(
        <SafeAreaView className="flex justify-center items-center bg-white h-full">
       <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-in");
        }}
        className="w-full flex justify-center items-end p-5"
      >
      <Text className="text-black text-md font-jakartaBold">Skip</Text>
      </TouchableOpacity>
     <Swiper ref={swiperRef} 
     loop={false} 
     dot={<View className="w-[32px] h-[5px] mx-1 bg-[#E2E8F0]"/>}
     activeDot={<View className="w-[32px] h-[5px] mx-1 bg-[#0286FF] rounded-full"/>}
     onIndexChanged = {(index) => setActiveIndex(index)}>
     {onboarding.map((item) =>
     (<View key={item.id} className="flex items-center justify-center p-5">
      <Image source={item.image} className="w-full h-[300px]" resizeMode="contain" />
      <Text>{item.title}</Text>
      </View>))}
     </Swiper>
    </SafeAreaView>
    );
};
export default Onboarding;