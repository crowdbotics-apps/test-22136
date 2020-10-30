import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings165300Navigator from '../features/Settings165300/navigator';
import Settings165285Navigator from '../features/Settings165285/navigator';
import NotificationList165284Navigator from '../features/NotificationList165284/navigator';
import Maps165283Navigator from '../features/Maps165283/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings165300: { screen: Settings165300Navigator },
Settings165285: { screen: Settings165285Navigator },
NotificationList165284: { screen: NotificationList165284Navigator },
Maps165283: { screen: Maps165283Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
