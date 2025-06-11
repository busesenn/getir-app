import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStaticNavigation,
  StaticParamList,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { NotFound } from './screens/NotFound';
import Search from './screens/Search';
import { Updates } from './screens/Updates';
import Home from './screens/Home';
import React from 'react';
import { colors } from '../Types';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import List from './screens/List';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Header, HeaderButton } from '@react-navigation/elements';
import ProductDetails from './screens/ProductDetails';

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        tabBarActiveTintColor: colors.mainColor,
        tabBarShowLabel: false,
        headerShown: true,
        tabBarStyle: {
          height: 80
        },
        headerStyle: {
          backgroundColor: colors.mainColor
        },
        headerTitle: () => (
          <Image source={{ uri: "https://cdn.prod.website-files.com/62b0e6308cc691625470b227/63dbfaf194b2734233438dc1_PvjuUKFPIlCb-l8-wGoJcnLwhixk7tua4VNLesRQKJQ.png" }} style={{ width: 70, height: 60, }} />
        ),
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home" size={24} color={color} />
        ),
      },
    },
    Search: {
      screen: Search,
      options: {
        tabBarActiveTintColor: colors.mainColor,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 80
        },
        tabBarIcon: ({ color, size }) => (
          <Feather name="search" size={24} color={color} />
        ),
      },
    },
    List: {
      screen: List,
      options: {
        tabBarActiveTintColor: colors.mainColor,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 80
        },
        tabBarIcon: ({ color, size }) => (
          <View style={{ width: 58, height: 58, backgroundColor: colors.mainColor, borderRadius: 33, justifyContent: "center", alignItems: "center", marginTop: -8, borderWidth: 3, borderColor: "#fff" }}>
            <Entypo name="list" size={32} color={colors.yellow} />
          </View>
        ),
      },
    },
    Profile: {
      screen: Profile,
      options: {
        tabBarActiveTintColor: colors.mainColor,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 80
        },
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user" size={24} color={color} />
        ),
      },
    },
    Updates: {
      screen: Updates,
      options: {
        tabBarActiveTintColor: colors.mainColor,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 80
        },
        tabBarIcon: ({ color, size }) => (
          <FontAwesome6 name="gift" size={24} color={color} />
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
      linking: {
        path: ':user(@[a-zA-Z0-9-_]+)',
        parse: {
          user: (value) => value.replace(/^@/, ''),
        },
        stringify: {
          user: (value) => `@${value}`,
        },
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
    CategoryScreen: {
      screen: CategoryScreen,
      options: ({ navigation }) => ({
        title: 'Ürünler',
        headerStyle: {
          backgroundColor: colors.mainColor
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        headerBackButtonDisplayMode: "minimal"
      }),
      linking: {
        path: '*',
      },
    },
    ProductDetails: {
      screen: ProductDetails,
      options: {
        title: 'Ürün Detayı',
        headerShown: true,
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#fff",
          fontSize: 15
        },
        headerStyle: {
          backgroundColor: colors.mainColor
        },
        headerTintColor: "#fff",
        headerBackVisible: false,
        headerRight: () => (
          <TouchableOpacity>
            <AntDesign name="heart" size={24} color="#32177a" />
          </TouchableOpacity>
        )
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
