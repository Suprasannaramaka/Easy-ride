import { Tabs } from "expo-router";
 export default function TabsLayout(){
    return (
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="home" options={{ title: "Home" }} />
        <Tabs.Screen name="chat" options={{ title: "Chat" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        <Tabs.Screen name="rides" options={{ title: "Rides" }} />
      </Tabs>
    );
 };