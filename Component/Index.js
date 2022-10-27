import {Translate} from '@mui/icons-material';
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
function Index() {
  const res = (
    <View
      style={{
        position: 'relative',
        width: '50%',
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 170,
          width: 170,
          borderStyle: 'dotted',
        }}>
        <Image
          source={require('../Images/bg1.jpg')}
          style={{
            height: 150,
            width: 150,
            padding: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: -50,
          backgroundColor: '#fae5be',
          opacity: 0.5,
          padding: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Shrimp Pizza</Text>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          Cheez with Shrimp
        </Text>
        <Text style={{color: 'black', fontWeight: 'bold'}}>$18.00</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 10,
            margin: 30,
          }}>
          <Image
            source={require('../Images/share.png')}
            style={{height: 24, width: 24}}
          />
          <Image
            source={require('../Images/search.png')}
            style={{height: 24, width: 24}}
          />
        </View>
        <View style={{left: 15, top: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 30, color: 'black'}}>
            Today's Special
          </Text>
          <Text style={{fontSize: 20}}>Fresh Food Menu</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 20,
            margin: 30,
          }}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Pizza</Text>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Pasta</Text>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Salad</Text>
          <Image
            source={require('../Images/Up.png')}
            style={{height: 24, width: 24}}
          />
        </View>
        <View>
          <ScrollView>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {res}
                {res}
                {res}
                {res}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Index;
