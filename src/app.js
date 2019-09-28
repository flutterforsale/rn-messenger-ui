console.disableYellowBox = true;
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
registerScreens();

export function goMainApp() {
    Navigation.setDefaultOptions({
        statusBar: {
            visible: true,
            drawBehind: false,
            style: 'dark',
            backgroundColor: '#ffffff'
        },
        topBar: {
            backButton: {
                title: ''
            }
        },
        animations: {
            push: { enable: true }
        },
        layout: {
            orientation: ['portrait'],
            backgroundColor: '#ffffff'
        },
        bottomTabs: {
            animate: true,
            translucent: true,
            backgroundColor: '#ffffff',
            titleDisplayMode: "alwaysShow",
        },
    })

    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [
                    {
                        stack: {
                            children: [
                                {
                                    id: 'ChatList',
                                    component: {
                                        name: 'app.ChatList',
                                        passProps: {},
                                        options: {
                                            topBar: {
                                                visible: false
                                            }
                                        }
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                    text: 'Chat',
                                    iconColor: '#95a5a6',
                                    textColor: '#95a5a6',
                                    selectedIconColor: '#4834d4',
                                    selectedTextColor: '#4834d4',
                                    icon: require('./assets/icons/chat_icon.png')
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [
                                {
                                    id: 'StoryList',
                                    component: {
                                        id: 'app.StoryList',
                                        name: 'app.StoryList',
                                        passProps: {},
                                        options: {
                                            topBar: {
                                                visible: false
                                            }
                                        }
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                    text: 'Stories',
                                    iconColor: '#95a5a6',
                                    textColor: '#95a5a6',
                                    selectedIconColor: '#4834d4',
                                    selectedTextColor: '#4834d4',
                                    icon: require('./assets/icons/contact_icon.png')
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [
                                {
                                    id: 'NotifyListScreen',
                                    component: {
                                        name: 'app.NotifyListScreen',
                                        passProps: {},
                                        options: {
                                            topBar: {
                                                visible: false
                                            }
                                        }
                                    }
                                }
                            ],
                            options: {
                                bottomTab: {
                                    text: 'Notifications',
                                    iconColor: '#95a5a6',
                                    textColor: '#95a5a6',
                                    selectedIconColor: '#4834d4',
                                    selectedTextColor: '#4834d4',
                                    icon: require('./assets/icons/bell_icon.png')
                                }
                            }
                        }
                    }
                ]
            }
        }
    });
}

Navigation.events().registerAppLaunchedListener(async () => {
    goMainApp()
})
