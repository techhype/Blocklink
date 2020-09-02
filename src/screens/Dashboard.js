import React, {useState,useEffect} from 'react';
import { Text, View, Button,Image,StatusBar, ScrollView, RefreshControl, StyleSheet } from 'react-native';
import Card from '../../library/utils/Card';
const imageData = require("../../assets/img/ImageData.json")



const HomeScreen = ({ navigation }) => {
    const initialValue = [{ name: '', price: '', change: ''}];
    const [refreshing, setRefreshing] = React.useState(false);
    const [stateOptions, setStateValues] = useState(initialValue);
    
    
    useEffect(() => {
        fetch("https://api.coinranking.com/v1/public/coins?ids=1,2,3")
        .then((response) => response.json())
        .then((json) => {
            let coinData= [];
            (json.data.coins).map(coin => {
                let { name, price, change } = coin;
                price = parseFloat(price).toFixed(2);
                coinData.push({name,price: `${price} USD` ,change});
            });
            console.log(coinData);
            setStateValues(coinData);
        })
        .catch((error) => console.error(error));
    },[]);
    
    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }
    
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetch("https://api.coinranking.com/v1/public/coins?ids=1,2,3")
        .then((response) => response.json())
        .then((json) => {
            let coinData = [];
            (json.data.coins).map(coin => {
                let { name, price, change } = coin;
                price = parseFloat(price).toFixed(2);
                coinData.push({ name, price: `${price} USD`, change });
            });
            console.log(coinData);
            setStateValues(coinData);
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
            {stateOptions.map((localState,index) => (
                <Card key={index}>
                    <View style={{width:200,borderRightWidth: 1 ,borderRightColor: '#D3D3D3'}}>
                        <View style={{flexDirection: "row",marginBottom:30,}}>
                            <Image
                                style={{ width: 28, height: 28 }}
                                source={{ uri: imageData[localState.name] }}
                            />
                            <Text style={{ fontSize: 20, marginLeft: 15,fontSize: 25, fontFamily: 'Inter'}}>{localState.name}</Text>
                        </View>
                        <Text style={{ marginLeft: 44,marginBottom: 5, fontSize:19, fontFamily: 'Inter'}}>{localState.price}</Text>
                        <Text style={{ marginLeft: 44,marginBottom: 5, fontFamily: 'Inter',color: 'black'}}>
                        <Text style={localState.change>0 ? styles.increase : styles.decrease}>{localState.change}%   </Text>
                        24hrs</Text>
                    </View>
                </Card>
            ))}
            
            <Button title='Log out' onPress={() => navigation.navigate('Login')} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    increase:{
        color: 'green'
    },
    decrease:{
        color: 'red'
    }

});

export default HomeScreen;