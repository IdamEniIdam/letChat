// import React, { PureComponent } from 'react';
// import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
// import { StreamChat } from 'stream-chat';
// import * as DocumentPicker from 'expo-document-picker';
// import * as Permissions from 'expo-permissions';

// import {
//   Avatar,
//   Chat,
//   Channel,
//   MessageList,
//   MessageInput,
//   ChannelList,
//   IconBadge,
// } from 'stream-chat-expo';
// import { createAppContainer, createStackNavigator } from 'react-navigation';
// import truncate from 'lodash/truncate';

// const chatClient = new StreamChat('f8wwud5et5jd');
// const userToken =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmxhdC1zbm93LTcifQ.53kS7DH2ANdOuXkI6-COtnInVTaehq3is3vxZbYrrLY';

// const user = {
//   id: 'flat-snow-7',
//   name: 'Flat snow',
//   image:
//     'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
// };

// chatClient.setUser(user, userToken);

// class CustomChannelPreview extends PureComponent {
//   channelPreviewButton = React.createRef();

//   onSelectChannel = () => {
//     this.props.setActiveChannel(this.props.channel);
//   };

//   render() {
//     const { channel } = this.props;
//     const unreadCount = channel.countUnread();

//     return (
//       <TouchableOpacity
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           borderBottomColor: '#EBEBEB',
//           borderBottomWidth: 1,
//           padding: 10,
//         }}
//         onPress={this.onSelectChannel}
//       >
//         <Avatar image={channel.data.image} size={40} />
//         <View
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             flex: 1,
//             paddingLeft: 10,
//           }}
//         >
//           <View
//             style={{
//               display: 'flex',
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//             }}
//           >
//             <Text
//               style={{
//                 fontWeight: unreadCount > 0 ? 'bold' : 'normal',
//                 fontSize: 14,
//                 flex: 9,
//               }}
//               ellipsizeMode="tail"
//               numberOfLines={1}
//             >
//               {channel.data.name}
//             </Text>
//             <IconBadge unread={unreadCount} showNumber>
//               <Text
//                 style={{
//                   color: '#767676',
//                   fontSize: 11,
//                   flex: 3,
//                   textAlign: 'right',
//                 }}
//               >
//                 {this.props.latestMessage.created_at}
//               </Text>
//             </IconBadge>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   }
// }

// class ChannelListScreen extends PureComponent {
//   static navigationOptions = () => ({
//     headerTitle: (
//       <Text style={{ fontWeight: 'bold' }}>Awesome Conversations</Text>
//     ),
//   });

//   render() {
//     return (
//       <SafeAreaView>
//         <Chat client={chatClient}>
//           <View style={{ display: 'flex', height: '100%', padding: 10 }}>
//             <ChannelList
//               filters={{ type: 'messaging', members: { $in: ['flat-snow-7'] } }}
//               sort={{ last_message_at: -1 }}
//               Preview={CustomChannelPreview}
//               onSelect={(channel) => {
//                 this.props.navigation.navigate('Channel', {
//                   channel,
//                 });
//               }}
//             />
//           </View>
//         </Chat>
//       </SafeAreaView>
//     );
//   }
// }

// class ChannelScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     const channel = navigation.getParam('channel');
//     return {
//       headerTitle: (
//         <Text style={{ fontWeight: 'bold' }}>{channel.data.name}</Text>
//       ),
//     };
//   };

//   render() {
//     const { navigation } = this.props;
//     const channel = navigation.getParam('channel');

//     return (
//       <SafeAreaView>
//         <Chat client={chatClient}>
//           <Channel client={chatClient} channel={channel}>
//             <View style={{ display: 'flex', height: '100%' }}>
//               <MessageList />
//               <MessageInput />
//             </View>
//           </Channel>
//         </Chat>
//       </SafeAreaView>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     ChannelList: {
//       screen: ChannelListScreen,
//     },
//     Channel: {
//       screen: ChannelScreen,
//     },
//   },
//   {
//     initialRouteName: 'ChannelList',
//   },
// );

// const AppContainer = createAppContainer(RootStack);

// export default class ChatRoom extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
  




  
import React, { PureComponent } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
  ChannelList,
  Thread,
  ChannelPreviewMessenger,
  CloseButton,
  TypingIndicator,
} from 'stream-chat-expo';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Remote debugger']);

const server = {
  // API_KEY: 'qk4nn7rpcn75',
  // TOKEN:
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidGhpZXJyeSJ9.EJ6poZ2UbnJJvbCi6ZiImeEPeIoXVEBSdZN_-2YC3t0',
  // USER: 'thierry',
  // SERVER_ENDPOINT: 'http://localhost:3030',
};

const apiKey = server.API_KEY || 'qk4nn7rpcn75';
const userToken =
  server.TOKEN ||
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYmlsbG93aW5nLWZpcmVmbHktOCJ9.CQTVyJ6INIM8u28BxkneY2gdYpamjLzSVUOTZKzfQlg';
const user = server.USER || 'billowing-firefly-8';

const chatClient = new StreamChat(apiKey);

const theme = {
  avatar: {
    image: {
      size: 32,
    },
  },
  colors: {
    primary: 'magenta',
  },
  spinner: {
    css: `
      width: 15px;
      height: 15px;
    `,
  },
};

if (server.SERVER_ENDPOINT) {
  chatClient.setBaseURL(server.SERVER_ENDPOINT);
}

chatClient.setUser(
  {
    id: user,
  },
  userToken,
);

const filters = { type: 'messaging' };
const sort = {
  last_message_at: -1,
  cid: 1,
};
const options = {
  member: true,
  watch: true,
};
// const channels = chatClient.queryChannels(filters, sort, {
//   watch: true,
// });

class ChannelListScreen extends PureComponent {
  static navigationOptions = () => ({
    headerTitle: <Text style={{ fontWeight: 'bold' }}>Channel List</Text>,
  });

  render() {
    return (
      <SafeAreaView>
        <Chat style={theme} client={chatClient}>
          <View style={{ display: 'flex', height: '100%', padding: 10 }}>
            <ChannelList
              Preview={ChannelPreviewMessenger}
              filters={filters}
              sort={sort}
              options={options}
              onSelect={(channel) => {
                this.props.navigation.navigate('Channel', {
                  channel,
                });
              }}
            />
          </View>
        </Chat>
      </SafeAreaView>
    );
  }
}

class ChannelScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const channel = navigation.getParam('channel');
    return {
      headerTitle: (
        <Text style={{ fontWeight: 'bold' }}>{channel.data.name}</Text>
      ),
    };
  };

  render() {
    const { navigation } = this.props;
    const channel = navigation.getParam('channel');

    return (
      <SafeAreaView>
        <Chat style={theme} client={chatClient}>
          <Channel client={chatClient} channel={channel}>
            <View style={{ display: 'flex', height: '100%' }}>
              <MessageList
                TypingIndicator={TypingIndicator}
                onThreadSelect={(thread) => {
                  this.props.navigation.navigate('Thread', {
                    thread,
                    channel: channel.id,
                  });
                }}
              />
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView>
    );
  }
}

class ThreadScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text style={{ fontWeight: 'bold' }}>Thread</Text>,
    headerLeft: null,
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          backgroundColor: '#ebebeb',
          width: 30,
          height: 30,
          marginRight: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
        }}
      >
        <CloseButton />
      </TouchableOpacity>
    ),
  });

  render() {
    const { navigation } = this.props;
    const thread = navigation.getParam('thread');
    const channel = chatClient.channel(
      'messaging',
      navigation.getParam('channel'),
    );

    return (
      <SafeAreaView>
        <Chat style={theme} client={chatClient}>
          <Channel
            client={chatClient}
            channel={channel}
            thread={thread}
            dummyProp="DUMMY PROP"
          >
            <View
              style={{
                display: 'flex',
                height: '100%',
                justifyContent: 'flex-start',
              }}
            >
              <Thread thread={thread} />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView>
    );
  }
}

const RootStack = createStackNavigator(
  {
    ChannelList: {
      screen: ChannelListScreen,
    },
    Channel: {
      screen: ChannelScreen,
    },
    Thread: {
      screen: ThreadScreen,
    },
  },
  {
    initialRouteName: 'ChannelList',
  },
);

const AppContainer = createAppContainer(RootStack);

export default class ChatRoom extends React.Component {
  render() {
    return <AppContainer />;
  }
}








// import React, { PureComponent } from 'react';
// import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
// import { StreamChat } from 'stream-chat';
// import {
//   Chat,
//   Channel,
//   MessageList,
//   MessageInput,
//   ChannelList,
//   Thread,
//   ChannelPreviewMessenger,
// } from 'stream-chat-react-native';

// import { createAppContainer, createStackNavigator } from 'react-navigation';

// import { YellowBox } from 'react-native';

// YellowBox.ignoreWarnings(['Remote debugger']);
// const chatClient = new StreamChat('qk4nn7rpcn75');
// const userToken =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYmlsbG93aW5nLWZpcmVmbHktOCJ9.CQTVyJ6INIM8u28BxkneY2gdYpamjLzSVUOTZKzfQlg';
// chatClient.setUser(
//   {
//     id: 'billowing-firefly-8',
//     name: 'Billowing firefly',
//     image:
//       'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
//   },
//   userToken,
// );

// const filters = { type: 'messaging' };
// const sort = {
//   last_message_at: -1,
//   cid: 1,
// };
// const options = {
//   member: true,
//   watch: true,
// };

// class ChannelListScreen extends PureComponent {
//   static navigationOptions = () => ({
//     headerTitle: <Text style={{ fontWeight: 'bold' }}>Channel List</Text>,
//   });

//   render() {
//     return (
//       <SafeAreaView>
//         <Chat client={chatClient}>
//           <View style={{ display: 'flex', height: '100%', padding: 10 }}>
//             <ChannelList
//               Preview={ChannelPreviewMessenger}
//               filters={filters}
//               sort={sort}
//               options={options}
//               onSelect={(channel) => {
//                 this.props.navigation.navigate('Channel', {
//                   channel,
//                 });
//               }}
//             />
//           </View>
//         </Chat>
//       </SafeAreaView>
//     );
//   }
// }

// class ChannelScreen extends PureComponent {
//   static navigationOptions = ({ navigation }) => {
//     const channel = navigation.getParam('channel');
//     return {
//       headerTitle: (
//         <Text style={{ fontWeight: 'bold' }}>{channel.data.name}</Text>
//       ),
//     };
//   };

//   render() {
//     const { navigation } = this.props;
//     const channel = navigation.getParam('channel');

//     return (
//       <SafeAreaView>
//         <Chat client={chatClient}>
//           <Channel client={chatClient} channel={channel}>
//             <View style={{ display: 'flex', height: '100%' }}>
//               <MessageList
//                 onThreadSelect={(thread) => {
//                   this.props.navigation.navigate('Thread', {
//                     thread,
//                     channel: channel.id,
//                   });
//                 }}
//               />
//               <MessageInput />
//             </View>
//           </Channel>
//         </Chat>
//       </SafeAreaView>
//     );
//   }
// }

// class ThreadScreen extends PureComponent {
//   static navigationOptions = ({ navigation }) => ({
//     headerTitle: <Text style={{ fontWeight: 'bold' }}>Thread</Text>,
//     headerLeft: null,
//     headerRight: (
//       <TouchableOpacity
//         onPress={() => {
//           navigation.goBack();
//         }}
//         style={{
//           backgroundColor: '#ebebeb',
//           width: 30,
//           height: 30,
//           marginRight: 20,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderRadius: 20,
//         }}
//       >
//         <Text>X</Text>
//       </TouchableOpacity>
//     ),
//   });

//   render() {
//     const { navigation } = this.props;
//     const thread = navigation.getParam('thread');
//     const channel = chatClient.channel(
//       'messaging',
//       navigation.getParam('channel'),
//     );

//     return (
//       <SafeAreaView>
//         <Chat client={chatClient}>
//           <Channel
//             client={chatClient}
//             channel={channel}
//             thread={thread}
//             dummyProp="DUMMY PROP"
//           >
//             <View
//               style={{
//                 display: 'flex',
//                 height: '100%',
//                 justifyContent: 'flex-start',
//               }}
//             >
//               <Thread thread={thread} />
//             </View>
//           </Channel>
//         </Chat>
//       </SafeAreaView>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     ChannelList: {
//       screen: ChannelListScreen,
//     },
//     Channel: {
//       screen: ChannelScreen,
//     },
//     Thread: {
//       screen: ThreadScreen,
//     },
//   },
//   {
//     initialRouteName: 'ChannelList',
//   },
// );

// const AppContainer = createAppContainer(RootStack);

// export default class ChatRoom extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }