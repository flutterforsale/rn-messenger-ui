import { Navigation } from 'react-native-navigation';
import ChatList from './Chat/Listing';
import ChattingScreen from './Chat/Chatting';
import StoryList from './Stories/Listing';
import NotifyListScreen from './Notification/List';
import MyProfile from './Auth/MyProfile';

export function registerScreens() {
    Navigation.registerComponent('app.ChatList', () => ChatList);
    Navigation.registerComponent('app.ChattingScreen', () => ChattingScreen);
    Navigation.registerComponent('app.StoryList', () => StoryList);
    Navigation.registerComponent('app.NotifyListScreen', () => NotifyListScreen);
    Navigation.registerComponent('app.MyProfile', () => MyProfile);
}
