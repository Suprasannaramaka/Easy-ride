import { router } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Onboarding = () =>
{
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
    </SafeAreaView>
    );
};
export default Onboarding;