import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go on Onboard{" "}
      </Link>
      <Link
        href="/(auth)/signIn"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to SignIn{" "}
      </Link>
      <Link
        href="/(auth)/signUp"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to SignUp
      </Link>

      <Link href="/subscriptions/spotify">Spotify Subscription</Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
      >
        {" "}
        Claude Subscription
      </Link>
    </SafeAreaView>
  );
}
