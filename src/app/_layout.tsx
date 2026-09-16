import { Stack } from 'expo-router';
import { EventProvider } from '../context/EventContext';

export default function RootLayout() {
  return (
    <EventProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </EventProvider>
  );
}
