import React, {useState,useEffect} from 'react';
import { Text, View, Button,Image,StatusBar, ScrollView, RefreshControl } from 'react-native';
import Card from '../../library/utils/Card';


// const fetchCryptoDetails = async () =>{
//     await fetch('https://sochain.com/api/v2/get_info/DOGE', {
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json',
//         }
//     })
//         .then((res) => res.json())
//         .then( (data) => {
//         try {
//             var string = JSON.stringify(data);
//             var objectValue = JSON.parse(string);
//             console.log(objectValue['data']['name']);
//         } catch (e) {
//             console.log('error:', e);
//             // Alert(e)
//         }
//         });
// }

const HomeScreen = ({ navigation }) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [cryptoName,setCryptoName] = useState('');
    const [cryptoValue,setCryptoValue] = useState('');

    useEffect(() => {
        fetch('https://sochain.com/api/v2/get_info/Bitcoin')
            .then((response) => response.json())
            .then((json) => {
                setCryptoName(json.data.name);
                let price = parseFloat(json.data.price).toFixed(2);
                const cryptoValue = `${json.data.price_base} ${(price)}`;
                setCryptoValue(cryptoValue);
            })
            .catch((error) => console.error(error))
    },[]);

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetch('https://sochain.com/api/v2/get_info/Bitcoin')
            .then((response) => response.json())
            .then((json) => {
                setCryptoName(json.data.name);
                let price = parseFloat(json.data.price).toFixed(2);
                const cryptoValue = `${json.data.price_base} ${(price)}`;
                setCryptoValue(cryptoValue);
            })
            .catch((error) => console.error(error));
        wait(1500).then(() => setRefreshing(false));
    }, [refreshing]);

    return (
        <ScrollView style={ {
                        flex:1,
                        // alignItems: 'center',
                        // justifyContent: 'center'
                    } }
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <StatusBar backgroundColor= '#121d33'/>
            <Card>
                <View style={{width:200,borderRightWidth: 1 ,borderRightColor: '#D3D3D3'}}>
                    <View style={{flexDirection: "row",marginBottom:30,}}>
                        <Image
                            style={{ width: 28, height: 28 }}
                            source={require('../../assets/img/bitcoin.png')}
                        />
                        <Text style={{ fontSize: 20, marginLeft: 15,fontSize: 25, fontFamily: 'Inter'}}>{cryptoName}</Text>
                    </View>
                    <Text style={{ marginLeft: 44,marginBottom: 5, fontFamily: 'Inter'}}>{cryptoValue}</Text>
                </View>
            </Card>
            <Button title='Log out' onPress={() => navigation.navigate('Login')} />
        </ScrollView>
    );
}

export default HomeScreen;