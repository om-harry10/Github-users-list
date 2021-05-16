import React, { useEffect,useState } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import {ListItem,Avatar} from 'react-native-elements';


  
const Homepage=({navigation})=> {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data);
            
        })
        .catch(error=>{
            console.log(error)
          })
       
          
     }, [])
    
        return (
           <View>
                <ScrollView>
                {users.map((item, i) => (
                  
                    <ListItem key={i}  containerStyle={allStyle.listview} onPress={()=>{navigation.navigate('UserInfo',item)}} bottomDivider>
                    <Avatar rounded size="medium" source={{uri:item.avatar_url}}/>
                    <ListItem.Content>
                        <ListItem.Title style={{fontSize:18}} >{item.login}</ListItem.Title>

                    </ListItem.Content>
                   
                    </ListItem>
                    
                ))}
        </ScrollView>
           </View>
        )
    
}

export default Homepage;

const allStyle = StyleSheet.create({
  listview:{
    backgroundColor:'#a9f1df',
    height:100,

  }
});
