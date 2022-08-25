import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SwitchToggle from 'react-native-switch-toggle';

const Setting = () => {
  const [isOn, setIsOn] = useState(false);
  const [isOns, setIsOns] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: '5%',
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: '5%'}}>
          <View>
            <Image source={require('../components/Ellipse.png')} />
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginHorizontal: '10%',
              alignItems: 'flex-start',
            }}>
            <Text style={{fontSize: 24, fontWeight: '700', color: '#FFF'}}>
              Varksed
            </Text>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#FFF'}}>
              Premium Enabled
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={{color: '#FFC839'}}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{color: '#FFF', fontSize: 24, fontWeight: '700'}}>
            Your Stats
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#FFA439',
              fontWeight: '700',
              marginHorizontal: '3%',
            }}>
            3
          </Text>
          <View>
            <Fontisto style={{color: '#FFA439'}} name="fire" size={20} />
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: '700',
              color: '#FFF',
              width: '50%',
            }}>
            3
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              width: '50%',
              color: '#FFF',
            }}>
            CURRENT STREAK
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: '700',
              color: '#FFF',
              width: '50%',
            }}>
            7
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              width: '50%',
              color: '#FFF',
            }}>
            BEST STREAK
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#FFF',
          }}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: '700',
              color: '#FFF',
              width: '50%',
            }}>
            135
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              width: '50%',
              color: '#FFF',
            }}>
            QUESTIONS ATTEMPTED
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: '700',
              color: '#FFF',
              width: '50%',
            }}>
            114
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              width: '50%',
              color: '#FFF',
            }}>
            QUESTIONS SOLVED
          </Text>
        </View>
      </View>
      <View>
        <View style={{marginVertical: '5%'}}>
          <Text style={{fontSize: 24, fontWeight: '700', color: '#FFF'}}>
            Notifications
          </Text>
        </View>
        <View
          style={{
            marginVertical: '5%',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#FFF',
              width: '80%',
            }}>
            Recieve daily reminders to consistently practice and review
            concepts.
          </Text>
          <View
            style={{width: '20%', alignSelf: 'center', marginHorizontal: '5%'}}>
            <SwitchToggle
              switchOn={isOn}
              onPress={() => setIsOn(!isOn)}
              circleColorOff="#fff"
              circleColorOn="#fff"
              backgroundColorOn="#14D39A"
              backgroundColorOff="#C4C4C4"
              containerStyle={{
                width: 50,
                height: 25,
                borderRadius: 25,
              }}
              circleStyle={{
                width: 25,
                height: 25,
                borderRadius: 12,
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginVertical: '5%',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#FFF',
              width: '80%',
            }}>
            Recieve notifications for whenever there may be a new resource to
            help you on your coding journey.
          </Text>
          <View
            style={{width: '20%', alignSelf: 'center', marginHorizontal: '5%'}}>
            <SwitchToggle
              switchOn={isOns}
              onPress={() => setIsOns(!isOns)}
              circleColorOff="#fff"
              circleColorOn="#fff"
              backgroundColorOn="#14D39A"
              backgroundColorOff="#C4C4C4"
              containerStyle={{
                width: 50,
                height: 25,
                borderRadius: 25,
              }}
              circleStyle={{
                width: 25,
                height: 25,
                borderRadius: 12,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#3D67FF',
    justifyContent: 'space-between',
    padding: '5%',
  },
});
export default Setting;
