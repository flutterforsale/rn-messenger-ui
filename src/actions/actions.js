import _ from 'lodash';
import { Navigation } from 'react-native-navigation';

class Actions {
    constructor() {
        this._lastAction = { params: undefined, timestamp: 0 };
    }

    _checkLastAction(params) {
        if (Date.now() - this._lastAction.timestamp < 1000
            && _.isEqual(params, this._lastAction.params)
            && !params.force) {
            return false;
        } else {
            this._lastAction = { params, timestamp: Date.now() };
            return true;
        }
    }

    dismissModal = async (componentId) => {
        await Navigation.dismissModal(componentId);
    }

    dismissAllModals = async () => {
        await Navigation.dismissAllModals();
    }

    dismissOverlay = (componentId) => {
        Navigation.dismissOverlay(componentId);
    }

    pop = (componentId) => {
        Navigation.pop(componentId);
    }

    toMyProfile = (componentId, passProps) => {
        Navigation.showModal({
            stack: {
                children: [{
                    component: {
                        name: 'app.MyProfile',
                        passProps: passProps,
                        options: {
                            topBar: {
                                visible: false
                            }
                        }
                    }
                }]
            }
        });
    }

    toChatting = (componentId, passProps) => {
        Navigation.push(componentId, {
            component: {
                name: 'app.ChattingScreen',
                passProps: passProps,
                options: {
                    topBar: {
                        visible: false
                    },
                    bottomTabs: {
                        visible: false,
                        drawBehind: true
                    }
                }
            }
        })
    }
}

export default new Actions();